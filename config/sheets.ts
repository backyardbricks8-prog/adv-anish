/**
 * GOOGLE APPS SCRIPT WEB APP INTEGRATION CONFIGURATION
 *
 * The consultation form sends submitted data directly to a Google Sheet
 * through a Google Apps Script Web App URL.
 *
 * HOW TO CONFIGURE:
 * 1. Open your Google Sheet and go to Extensions > Apps Script.
 * 2. Paste the provided Google Apps Script code (see /google-apps-script/Code.gs).
 * 3. Click Deploy > New deployment > Select type: Web app.
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 4. Copy the Web App URL (ends in /exec).
 * 5. Replace the URL below with your deployed URL,
 *    OR define NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL in your .env file.
 */

export const CONFIG = {
  // Configured Google Apps Script Web App URL:
  googleSheetsWebAppUrl:
    (typeof process !== 'undefined' &&
      process.env &&
      (process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL ||
        process.env.GOOGLE_SHEETS_WEB_APP_URL ||
        process.env.VITE_GOOGLE_SHEETS_WEB_APP_URL)) ||
    'https://script.google.com/macros/s/AKfycbyQHiyXcydcz7ADhMumrmWxyhc1U7kjGZ4ZldoAAMJCo7D0m9hmI4OIgB2xdkUgne46/exec',
};

// Configurable constant as requested by user specification
export const GOOGLE_SHEETS_WEB_APP_URL = CONFIG.googleSheetsWebAppUrl;
