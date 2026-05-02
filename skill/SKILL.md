---
name: catalog-builder
description: Build branded product catalogues as professional web pages for dealer/distributor companies. Use when the user provides product images, pricing sheets, and branding assets (logo, company details) and wants a lookbook-style catalogue website. Supports any product category — electric vehicles, solar cameras, solar rooftops, electronics, appliances, etc.
---

# Catalog Builder

Build professional, branded product catalogues as static web pages. Supports any product category (EV scooters, solar cameras, solar rooftops, electronics, etc.) with model/product pages, technical specifications, configuration/pricing tables, and consistent dealer/distributor branding.

## Workflow

1. **Gather inputs** from user (confirm before building)
2. **Validate product-to-pricing mapping** with user
3. **Build the catalogue** as a static webdev project
4. **Iterate** based on user feedback

## Step 1: Gather Inputs

Collect these from the user before starting:

| Input | Purpose | Required |
|-------|---------|----------|
| Product images | Hero images for each product page | Yes |
| Pricing sheet/table | Source of truth for all pricing | Yes |
| Dealer/seller logo (transparent PNG) | Header branding | Yes |
| Dealer company details | Address, phone numbers, tagline | Yes |
| Manufacturer/supplier name + address | Small footnote credit | Yes |
| Product-to-code mapping | Which pricing column maps to which product name | Yes |
| Configuration preferences | Which options/variants apply to which products | Yes |

### Key Questions to Ask

- Which company is the **hero** (dealer/seller) vs. which is the **manufacturer/supplier** (footnote)?
- What are the brand colors for the dealer company name and sub-brand?
- Which products to include and in what order?
- Which configurations/variants apply to which products?
- Any manual price overrides beyond the pricing sheet?
- What product category is this? (determines specs table fields and configuration options)
- Front-facing or angled product images?

### Product Category Detection

Determine the product type early — it shapes the specs table and pricing configurations:

| Category | Typical Specs | Pricing Variants |
|----------|--------------|------------------|
| EV Scooters | Weight, speed, suspension, tyres, motor | Battery type/capacity combinations |
| Solar Cameras | Resolution, night vision, storage, connectivity | Storage/connectivity packages |
| Solar Rooftops | Panel wattage, area, efficiency, inverter | Panel count/capacity tiers |
| Electronics | Dimensions, power, connectivity, features | Storage/RAM/color variants |

## Step 2: Validate Product-to-Pricing Mapping

Present a complete pricing table for each product to the user for approval BEFORE building. Format:

```
**Product Name (Code from sheet)**
| Configuration | Key Metric | Price | Warranty |
```

Confirm:
- Product order in catalogue
- Which pricing column maps to which product
- Configuration inclusion/exclusion per product
- Any manual overrides

## Step 3: Build the Catalogue

Use `webdev_init_project` (web-static). See `references/build-guide.md` for implementation details.

### Branding Hierarchy (Critical)

- **Dealer/seller brand = HERO everywhere** — large logo, prominent name, branded colors
- **Manufacturer/supplier = footnote only** — small text, "Manufactured by" or "Supplied by" prefix, no taglines
- Never use manufacturer taglines or marketing copy
- Dealer logo in header, manufacturer credit in footer (small)

### Page Structure

1. **Cover section** — Dealer logo LARGE + "[Product Category] Catalogue" + contact info. Manufacturer as tiny footnote only.
2. **Product sections** (one per product) — Product name with code in brackets, specs table left, product image right, pricing/configuration table below.
3. **Contact section** — Dealer full address, sales & service numbers.

### Product Page Components

Each product page includes:
- Product name with pricing sheet code in brackets: e.g., "NEUTRON PRO (SL 10'10)"
- Technical specifications table (fields vary by product category)
- Configuration & pricing table with relevant columns per category
- Type/tier badges (colored for premium, grey for standard)
- Professional footnote about accessories/add-ons being extra cost

### Product Images

- Prefer front-facing shots on white/clean backgrounds
- Source from manufacturer website if user doesn't provide clean images
- Different variants/colors for each product (avoid repetition)
- Upload all images via `manus-upload-file --webdev` and use CDN URLs
- Confirm correct product image with user before inserting

## Step 4: Iterate

Common iteration requests:
- **Reorder products** — move sections in the data array
- **Update pricing** — always defer to the pricing sheet as source of truth unless user gives manual override
- **Change images** — get correct product from manufacturer website, confirm with user before inserting
- **Add/remove configurations** — update the options array for the specific product
- **Branding adjustments** — dealer is always hero, manufacturer always footnote
- **Add/remove products** — add new product sections or remove discontinued ones

## Checklist Before Delivery

- [ ] Dealer logo renders correctly (transparent PNG, large in cover)
- [ ] Manufacturer reduced to footnote only (no taglines)
- [ ] All pricing matches the source-of-truth sheet
- [ ] Manual overrides applied correctly
- [ ] Product codes shown in brackets next to product names
- [ ] Clean product images for all products
- [ ] Configuration/tier badges visible
- [ ] Accessories/add-on footnote on every product page (not cover/contact)
- [ ] Contact section has correct address, sales & service numbers
- [ ] Responsive layout works on mobile
