# AI Professional Catalog-Builder

A professional, AI-powered product catalogue builder designed for dealers and enterprises. Built with React, Tailwind CSS, and a reusable skill framework that enables rapid catalogue generation for any product category — electric vehicles, solar cameras, solar rooftops, and more.

---

## Overview

This project generates **dual-version catalogues** for businesses that operate as sales and service partners for manufacturers:

- **Dealer Pricing** — Source-of-truth pricing with a green border and "DEALER COPY" watermark
- **Customer Pricing** — Automatically marked-up pricing (configurable %) with an orange border for customer-facing use

Both versions are interlinked — update the dealer pricing once, and the customer version reflects the markup automatically.

---

## Sample Catalogue: Living Vitals — Electric Scooter Catalogue

| Detail | Value |
|--------|-------|
| **Sales & Service** | Living Vitals, RajPraNim Enterprises |
| **Manufacturer** | Ryoto Electrix Pvt Ltd., Chevella, Hyderabad |
| **Models** | Neutron Pro (SL 10'10), Electro ZL9 (ZL 9 12'10), Polo (CS 2 12'12) |
| **Markup** | 32% (Dealer → Customer) |
| **Location** | Maheshwaram, Hyderabad, Telangana |

---

## Features

- **Dual Pricing Pages** — Dealer (green border) and Customer (orange border) with automatic markup calculation
- **Dealer Watermark** — Visual "DEALER COPY" watermark on dealer pages for clear identification
- **Battery Configuration Tables** — Lead Acid and Lithium-Ion options with range, charging time, warranty, and pricing
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Professional Branding** — Living Vitals as hero brand with manufacturer credited as footnote
- **Model Code Mapping** — Each model displays its factory code (e.g., SL 10'10) for easy reference to pricing sheets
- **Accessories Footnote** — Professional disclaimer on all product pages

---

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CataloguePage.tsx    # Shared catalogue component (dealer/customer mode)
│   │   │   ├── DealerPage.tsx       # Dealer pricing route
│   │   │   ├── CustomerPage.tsx     # Customer pricing route
│   │   │   └── Home.tsx             # Legacy (redirects to /dealer)
│   │   ├── App.tsx                  # Routing configuration
│   │   └── index.css                # Design tokens and global styles
│   └── index.html
├── docs/                            # Pre-built production output for GitHub Pages
│   ├── index.html                   # Main entry point
│   ├── 404.html                     # SPA fallback for client-side routing
│   ├── .nojekyll                    # Prevents Jekyll processing
│   └── assets/                      # Bundled CSS and JS
├── skill/
│   ├── SKILL.md                     # Reusable Catalog Builder skill
│   └── references/
│       └── build-guide.md           # Detailed implementation guide
└── README.md
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/dealer` |
| `/dealer` | Dealer pricing catalogue (green border, watermark) |
| `/customer` | Customer pricing catalogue (orange border, 32% markup) |

---

## How to Update Pricing

All pricing data is centralized in `client/src/pages/CataloguePage.tsx` within the `MODELS` array. Each model contains a `batteries` array with configuration objects:

```typescript
{
  type: "Lithium 60V/36Ah",
  range: "70 km",
  price: 45000,        // Dealer price (source of truth)
  charging: "3-4 Hrs",
  warranty: "2 Years",
  features: "Smart BMS, Fast Charging"
}
```

The customer price is automatically calculated: `dealerPrice × 1.32`

---

## Reusable Skill

The `skill/` directory contains the **Catalog Builder** skill — a reusable framework for generating product catalogues for any category:

- Electric Vehicles
- Solar Cameras
- Solar Rooftops
- Electronics
- Any product line

Read `skill/SKILL.md` for the complete workflow and `skill/references/build-guide.md` for implementation details.

---

## Live Demo

**View the catalogue live:** [https://mrinalgithub.github.io/AI-Professional-Catalog-Builder/](https://mrinalgithub.github.io/AI-Professional-Catalog-Builder/)

- Dealer version: [/dealer](https://mrinalgithub.github.io/AI-Professional-Catalog-Builder/dealer)
- Customer version: [/customer](https://mrinalgithub.github.io/AI-Professional-Catalog-Builder/customer)

---

## Deployment (GitHub Pages)

This project includes a pre-built `docs/` folder that GitHub Pages serves directly — no build step required.

**To enable GitHub Pages:**
1. Go to your repo **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Choose **main** branch and **/docs** folder
4. Click **Save**

The site will be live at `https://<username>.github.io/AI-Professional-Catalog-Builder/`

**To rebuild the docs/ folder after code changes:**
```bash
GITHUB_PAGES=true pnpm vite build
cp docs/index.html docs/404.html
git add docs/ && git commit -m "Rebuild docs for GitHub Pages" && git push
```

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production (standard)
pnpm build

# Build for GitHub Pages (outputs to docs/)
GITHUB_PAGES=true pnpm vite build
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI framework |
| Tailwind CSS 4 | Styling |
| Vite | Build tool |
| TypeScript | Type safety |
| Wouter | Client-side routing |
| Lucide React | Icons |

---

## Contact

**Living Vitals, RajPraNim Enterprises**
- Sales: 902 901 9991
- Service: 83338 64001
- Address: Opposite to Bharat Petrol Bunk, Maheshwaram-Mansanpally Road, Maheshwaram, Hyderabad, Telangana 501359

---

*Built with AI Professional Catalog-Builder*
