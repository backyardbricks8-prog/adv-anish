# Advocate Anish — Legal Practice Website

Official web application for the legal practice of **Advocate Anish Kumar**, practicing advocate across Delhi NCR (Supreme Court of India, Delhi High Court, Saket Court, Patiala House Court, Rouse Avenue Court).

Designed with a high-end Swiss minimal editorial aesthetic, built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, featuring real-time Google Sheets lead integration, server-side Route Handlers, and strict compliance with Bar Council of India (BCI) regulations.

---

## ✨ Features

- **Editorial Swiss Typography & Layout**: Refined typography using Cormorant Garamond, Cinzel, and Inter.
- **Direct Google Sheets Integration**: Form submissions are recorded in real-time to a connected Google Sheet via a secure Google Apps Script Web App endpoint.
- **Next.js Route Handlers**: `/api/consultation` provides server-side input sanitization, rate limiting, deduplication, and webhook delivery to Google Sheets.
- **Zero Third-Party Dependency for Forms**: Inquiries go directly to the advocate's private Google Sheet.
- **Bar Council of India (BCI) Compliance**: Includes mandatory statutory acknowledgement and ethics disclaimer modal with session persistence.
- **Accessible & Responsive**: Fully verified across 320px (mobile) to 1920px+ (ultrawide) viewports with semantic HTML and keyboard navigation.
- **SEO & Social Cards**: Comprehensive OpenGraph, Twitter cards, and Schema.org `LegalService` structured data (JSON-LD) configured in `app/layout.tsx`.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** v18+ (Node 20 or 22 recommended)
- **npm** (or **bun** / **pnpm**)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

This repository is pre-configured for seamless deployment to **Vercel** with Next.js App Router:

### Option A: Import via GitHub on Vercel Dashboard
1. Push this repository to your **GitHub** account:
   ```bash
   git add .
   git commit -m "Migrate to Next.js App Router with Google Sheets integration"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Next.js**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. *(Optional)* Under **Environment Variables**, you can set:
   - `NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL`: Your deployed Google Apps Script Web App URL.
   - `GOOGLE_SHEETS_WEB_APP_URL`: Same URL (for server route backup).
   *(Note: The default Google Apps Script Web App URL provided is already bundled in `config/sheets.ts` and `app/api/consultation/route.ts`).*
6. Click **Deploy**.

---

## 📊 Google Sheets Integration Setup

If you need to connect your own Google Sheet or re-deploy the Google Apps Script Web App:

1. Create a new Google Sheet (e.g. named `Advocate Anish — Client Enquiries`).
2. Go to **Extensions > Apps Script**.
3. Open `google-apps-script/Code.gs` from this project and paste its contents into the Apps Script editor.
4. Click **Deploy > New deployment**.
5. Select type: **Web app**.
   - **Description**: `Advocate Anish Consultation Form Webhook`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
6. Click **Deploy** and grant access if prompted.
7. Copy the Web App URL (ends with `/exec`).
8. Add it to `NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL` or update `config/sheets.ts`.
