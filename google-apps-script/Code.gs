/**
 * ADVOCATE ANISH — GOOGLE APPS SCRIPT WEB APP INTEGRATION
 * Webhook handler to record consultation enquiries into Google Sheets.
 *
 * HOW TO SET UP:
 * 1. Open your Google Sheet (e.g., named "Advocate Anish — Client Enquiries").
 * 2. In Google Sheets menu, click: Extensions > Apps Script.
 * 3. Delete any default code in Code.gs, and replace it with the code below.
 * 4. Click the blue "Deploy" button (top right) > "New deployment".
 * 5. Under "Select type" (gear icon), select "Web app".
 * 6. Set the fields:
 *    - Description: Advocate Anish Consultation Form Webhook
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 7. Click "Deploy".
 * 8. If prompted, click "Authorize access", choose your Google account,
 *    click "Advanced", then "Go to (unsafe)" to grant permission to write to your Sheet.
 * 9. Copy the generated Web App URL (ends with "/exec").
 * 10. Paste this URL into:
 *     /src/config/sheets.ts (replace 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL')
 *     OR set VITE_GOOGLE_SHEETS_WEB_APP_URL in your environment.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent writes to finish safely
  try {
    lock.waitLock(10000);
  } catch (lockError) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: "Server busy, please retry in a few moments."
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 1. Parse submitted data (supports JSON text/plain payload or form parameters)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // 2. Extract and sanitize fields
    var name = (data.name || data.fullName || "").toString().trim();
    var email = (data.email || "").toString().trim();
    var phone = (data.phone || "").toString().trim();
    var service = (data.service || data.legalMatter || "").toString().trim();
    var message = (data.message || data.briefDescription || "").toString().trim();
    var pageUrl = (data.pageUrl || "").toString().trim();
    var formName = (data.formName || "Consultation Enquiry").toString().trim();
    
    // Dates & timestamps (defaults to Indian Standard Time IST if not provided)
    var submittedAt = (data.submittedAt || new Date().toISOString()).toString().trim();
    var now = new Date();
    var submissionDate = (data.submissionDate || Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd")).toString().trim();
    var submissionTime = (data.submissionTime || Utilities.formatDate(now, "Asia/Kolkata", "hh:mm:ss a")).toString().trim();

    // 3. Basic validation
    if (!name || !email) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Required fields (name, email) are missing."
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 4. Check if header row exists, create if empty
    var lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      var headers = [
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Service",
        "Message",
        "Page URL",
        "Form Name"
      ];
      sheet.appendRow(headers);
      
      // Style headers with clean modern styling
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#18181B");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // 5. Append new enquiry as a new row (never overwrites or deletes existing rows)
    var rowData = [
      submittedAt,
      name,
      email,
      phone ? ("'" + phone) : "", // Prefix with apostrophe to preserve formatting in Sheets (e.g. +91)
      service,
      message,
      pageUrl,
      formName
    ];

    sheet.appendRow(rowData);

    // Auto-fit column widths if initial entries
    if (lastRow < 5) {
      for (var col = 1; col <= rowData.length; col++) {
        sheet.autoResizeColumn(col);
      }
    }

    // 6. Return standard JSON success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Enquiry recorded successfully in Google Sheets.",
        lead: {
          name: name,
          service: service,
          date: submissionDate
        }
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: "Error appending to sheet: " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Health check & diagnostic endpoint
 * Visit your Web App URL in a browser to verify deployment status.
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      service: "Advocate Anish Consultation Form Webhook",
      timestamp: new Date().toISOString(),
      instructions: "Send HTTP POST requests with JSON body to this endpoint to record consultation enquiries."
    }, null, 2)
  ).setMimeType(ContentService.MimeType.JSON);
}
