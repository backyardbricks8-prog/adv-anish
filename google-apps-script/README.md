# Google Sheets Integration Guide for Advocate Anish Website

This guide walks you through connecting the website's consultation enquiry form to your private Google Sheet via a **Google Apps Script Web App**.

---

## Architecture Flow

```
[Visitor Submits Consultation Form]
                 ↓
[Direct POST Request with JSON Payload]
                 ↓
[Google Apps Script Web App Endpoint]
                 ↓
[Appends Row to Google Sheet: Date, Time, Name, Phone, Email, Service, Message, Page URL, Form Name]
                 ↓
[200 OK JSON Response to Website]
                 ↓
[Instant Reassuring Success Card Displayed to User]
```

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a **Blank spreadsheet**.
2. Name the sheet something clear, e.g.:
   `Advocate Anish — Client Consultations`

---

## Step 2: Open Google Apps Script

1. In the Google Sheets top menu, click **Extensions** > **Apps Script**.
2. A new tab will open with the code editor.
3. Name your project at the top (e.g. `Advocate Anish Form Webhook`).

---

## Step 3: Paste the Web App Code

1. Delete any existing code inside `Code.gs`.
2. Open `/google-apps-script/Code.gs` from this project and copy all the code.
3. Paste it directly into the Apps Script editor.
4. Click the **Save** icon (diskette) or press `Ctrl + S` / `Cmd + S`.

---

## Step 4: Deploy as a Web App

1. In the top-right corner of the Apps Script window, click the blue **Deploy** button.
2. Select **New deployment**.
3. Next to "Select type", click the **Gear icon (⚙️)** and choose **Web app**.
4. Configure the fields:
   * **Description**: `Advocate Anish Consultation Form`
   * **Execute as**: `Me (<your-email>@gmail.com)` *(Important)*
   * **Who has access**: `Anyone` *(Important: Allows your website to send enquiries without requiring visitors to sign in to Google)*
5. Click **Deploy**.

---

## Step 5: Authorize Permissions

1. Google will show an **"Authorization required"** prompt.
2. Click **Authorize access**.
3. Select your Google account.
4. If you see a warning screen saying *"Google hasn't verified this app"*:
   - Click **Advanced** (small text at the bottom left).
   - Click **Go to Advocate Anish Form Webhook (unsafe)**.
   - Click **Allow**.
5. Once authorized, a dialog will appear showing your **Web App URL**.
   It looks like:
   `https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec`
6. Click **Copy** next to the Web App URL.

---

## Step 6: Connect to the Website

Open the file `/src/config/sheets.ts` in this project:

```typescript
export const CONFIG = {
  // Replace with your copied Web App URL:
  googleSheetsWebAppUrl: 'https://script.google.com/macros/s/YOUR_COPIED_ID_HERE/exec',
};

export const GOOGLE_SHEETS_WEB_APP_URL = CONFIG.googleSheetsWebAppUrl;
```

Alternatively, you can set the environment variable in `.env`:
```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_COPIED_ID_HERE/exec
```

---

## Step 7: Test the Integration

1. In your browser, open your Web App URL directly. You should see a JSON message:
   ```json
   {
     "status": "online",
     "service": "Advocate Anish Consultation Form Webhook"
   }
   ```
2. On the website, submit a test consultation enquiry through the form.
3. Check your Google Sheet: a new row will instantly appear with the timestamp, date, time, contact information, selected practice area, and client message!

---

## Data Fields Stored in Google Sheets

| Column | Description | Example |
| :--- | :--- | :--- |
| **Timestamp** | Submission timestamp (ISO 8601) | `2026-10-08T15:00:00.000Z` |
| **Name** | Client Full Name | `Rajesh Sharma` |
| **Email** | Client Email Address | `rajesh@example.com` |
| **Phone** | Client Phone Number | `+91 98111 22334` |
| **Service** | Selected Legal Practice Area | `Bail Matters` |
| **Message** | Brief Description of the Matter | `Need urgent consultation on anticipatory bail...` |
| **Page URL** | URL where inquiry originated | `https://advocateanish.com/#consultation` |

