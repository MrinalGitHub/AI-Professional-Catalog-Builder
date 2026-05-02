# Build Guide — Catalog Implementation

## Tech Stack

- React 19 + Tailwind CSS 4 (web-static project via `webdev_init_project`)
- Google Fonts: Oswald (display) + Source Sans 3 (body)
- Lucide React for icons
- No framer-motion (causes whileInView rendering issues)

## Design Tokens

```css
/* Dealer brand colors — customize per project */
--color-brand-primary: oklch(0.58 0.22 28);   /* e.g., orange #E63600 */
--color-brand-secondary: oklch(0.35 0.07 260); /* e.g., navy #1B3A6B */

/* Typography */
font-display: 'Oswald', sans-serif;
font-body: 'Source Sans 3', sans-serif;

/* Layout */
White background, subtle gray borders, orange accents for section headings
```

## Data Structure

```typescript
interface ProductData {
  name: string;           // "NEUTRON PRO (SL 10'10)" or "SolarCam Pro (SC-200)"
  image: string;          // CDN URL
  specs: { param: string; value: string }[];
  configurations: ConfigOption[];
}

interface ConfigOption {
  config: string;         // "Lithium 60V / 36Ah" or "4G + 128GB Storage"
  type: string;           // "lithium" | "lead" | "premium" | "standard" | "none"
  keyMetric: string;      // "70 km" or "30 days backup" — the main differentiator
  price: string;          // "₹45,000"
  additionalCols: { label: string; value: string }[];  // flexible extra columns
  warranty: string;       // "2 Years" or "—"
}
```

## Category-Specific Specs

### EV Scooters
Net Weight, Gross Weight, Climbing Capacity, Ground Clearance, Front Suspension, Rear Suspension, Carrying Capacity, Headlight, Taillight, Motor Thickness, Motor Height, Tyre Type, Speedometer, Wheel Type, Top Speed

### Solar Cameras
Resolution, Night Vision Range, Storage Type, Connectivity, Solar Panel Wattage, Battery Backup, Weather Rating, Motion Detection Range, Field of View

### Solar Rooftops
Panel Wattage, Panel Type, Efficiency, Inverter Capacity, Area Required, Annual Generation, Grid Connectivity, Mounting Type, Wind Rating

## EV-Specific Reference Data

### Standard Battery Specs
| Battery Type | Charging Time | Charger | Warranty | Features |
|---|---|---|---|---|
| Lead Acid (any) | 5–6 Hours | 4AMP Auto cut | 1 Year | Water/Fire Proof |
| Lithium (any) | 3–4 Hours | 6AMP Auto cut | 2 Years | Smart BMS |

### Standard Range Table
| Battery | Range |
|---|---|
| Lead Acid 48V | 50 km |
| Lead Acid 60V | 70 km |
| Lithium 48V/32Ah | 50 km |
| Lithium 60V/36Ah | 70 km |
| Lithium 60V/45Ah | 80 km |
| Lithium 60V/100Ah | 130 km |

## Layout Specifications

### Cover Section
- Dealer logo: `max-w-md` centered, large
- Title: "[PRODUCT CATEGORY]" in display font, 6xl-8xl, tracking-[0.15em]
- Subtitle: "CATALOGUE" in dealer brand color, 4xl-5xl
- Contact: Sales & Service numbers with phone/wrench icons
- Manufacturer: tiny text at bottom, `text-xs text-gray-400`

### Product Section
- Full viewport height (`min-h-screen`)
- Flex row: specs left (40%), image right (60%)
- Product name: `text-5xl sm:text-6xl md:text-7xl tracking-[0.08em]`
- Specs table: clean rows, subtle `border-b border-gray-100`
- Image: `max-h-[520px] object-contain drop-shadow-lg`
- Configuration table: full width below, with type badges
- Alternating backgrounds: white / `bg-gray-50/30`

### Configuration Table Badges
```jsx
{/* Premium/Primary badge */}
<span className="text-[9px] font-bold uppercase bg-orange-50 text-brand-primary px-1.5 py-0.5 rounded border border-orange-200">
  Premium
</span>

{/* Standard badge */}
<span className="text-[9px] font-bold uppercase bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">
  Standard
</span>
```

### Footer
- Dealer name in brand colors
- "Manufactured by: [Name], [City]" or "Supplied by: [Name]" in `text-xs text-gray-400`

### Footnotes (Product pages only, not cover/contact)
```
All prices inclusive of GST. Transport/installation charges extra.
* Accessories displayed in product images are not included in the listed price and are available at an additional cost.
```

## Image Handling

1. Copy user-provided images to `/home/ubuntu/webdev-static-assets/`
2. Upload via `manus-upload-file --webdev <path>`
3. Use returned CDN URL directly in `<img src="...">`
4. For manufacturer website images: download, save to static-assets, upload

## Common Pitfalls

- **Never use framer-motion whileInView** — causes invisible content
- **Always validate product-to-code mapping** — users often correct initial assumptions
- **Pricing sheet is source of truth** — override only when user explicitly says so
- **Confirm images before inserting** — wrong product images are a frequent issue
- **Dealer = hero, always** — never let manufacturer/supplier branding dominate
- **Ask product category early** — determines specs fields and configuration structure
