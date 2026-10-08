# Advocate Anish — Legal Practice Website

Official web application for the legal practice of **Advocate Anish Kumar**, practicing advocate across Delhi NCR (Supreme Court of India, Delhi High Court, Saket Court, Patiala House Court, Rouse Avenue Court).

Designed with a high-end Swiss minimal editorial aesthetic, built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**, featuring real-time Google Sheets lead integration and compliance with Bar Council of India regulations.

---

## ✨ Features

- **Editorial Swiss Typography & Layout**: Clean typography using Cormorant Garamond, Cinzel, and Inter.
- **Direct Google Sheets Integration**: Form submissions are recorded in real-time to a connected Google Sheet via a secure Google Apps Script Web App endpoint.
- **Zero Third-Party Dependency for Forms**: No paid SaaS form services required; inquiries go directly to the advocate's private Google Sheet.
- **Bar Council of India (BCI) Compliance**: Includes mandatory statutory acknowledgement and ethics disclaimer modal with session persistence.
- **Accessible & Responsive**: Fully verified across 320px (mobile) to 1920px+ (ultrawide) viewports with semantic HTML and keyboard navigation.
- **Dual Runtime Support**:
  - **Vercel Edge / Static SPA**: Instant deployment to Vercel with included `vercel.json` rewrites and serverless `/api` routes.
  - **Full-Stack Node.js**: Built-in Express server (`server.ts`) for self-hosted VPS, Docker, or Google Cloud Run.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** v18+ (Node 20 or 22 recommended)
- **npm** or **pnpm** or **bun**

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

This repository is pre-configured for **one-click deployment to Vercel**:

### Option A: Import via Vercel Dashboard
1. Push this repository to your **GitHub** account.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects the framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`
5. *(Optional)* In **Environment Variables**, add:
   - `VITE_GOOGLE_SHEETS_WEB_APP_URL`: Your deployed Google Apps Script Web App URL.
6. Click **Deploy**.

The included `vercel.json` automatically configures client-side routing, security headers, immutable caching for assets, and serverless function endpoints.

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📊 Google Sheets Integration

Form submissions automatically write to your Google Sheet without exposing credentials in client-side code:

1. Create a Google Sheet (e.g. named *"Advocate Anish — Client Enquiries"*).
2. Open **Extensions** → **Apps Script**.
3. Copy the script from `google-apps-script/Code.gs` and paste it into the editor.
4. Click **Deploy** → **New deployment**:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the generated Web App URL (`https://script.google.com/macros/s/.../exec`).
6. Configure the URL in your project:
   - Either set `VITE_GOOGLE_SHEETS_WEB_APP_URL` in your `.env` or Vercel Environment Variables.
   - Or update `src/config/sheets.ts`.

### Expected Google Sheet Columns
| Timestamp | Name | Email | Phone | Service | Message | Page URL | Form Name |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |

---

## 🛠 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server on port 3000 (`tsx server.ts`) |
| `npm run build` | Builds optimized client production bundle to `dist/` |
| `npm run preview` | Previews the production build locally via Vite |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |
| `npm run start` | Starts Node production server (`tsx server.ts`) |

---

## 📁 Project Structure

```text
├── api/                       # Vercel serverless functions (/api/consultation, /api/health)
├── google-apps-script/        # Standalone Google Apps Script code (Code.gs)
│   └── Code.gs
├── public/                    # Static assets, robots.txt, sitemap.xml
│   ├── assets/
│   ├── robots.txt
│   └── sitemap.xml
├── src/                       # React 19 application
│   ├── components/            # UI components (Header, Hero, Services, ConsultationForm, etc.)
│   ├── config/                # Google Sheets and app configuration
│   ├── services/              # Service clients
│   ├── App.tsx                # Main application component
│   └── main.tsx               # Client entry point
├── index.html                 # HTML entry with OpenGraph, JSON-LD schema & font preconnects
├── package.json               # Dependencies and scripts
├── server.ts                  # Express server with Vite middleware integration
├── tsconfig.json              # TypeScript configuration
├── vercel.json                # Vercel deployment and routing configuration
└── vite.config.ts             # Vite configuration with chunk splitting
```

---

## ⚖️ Legal Disclaimer

This website is designed strictly for informational purposes in compliance with the rules established by the **Bar Council of India (BCI)**. Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules restricts advocates from soliciting work or advertising. Any information obtained through this website is at the user's voluntary request.
