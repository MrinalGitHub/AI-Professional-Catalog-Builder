/*
 * DESIGN: Lookbook Catalogue Style
 * - Living Vitals = HERO everywhere (Orange text)
 * - RajPraNim Enterprises = Green text
 * - Ryoto Electrix = tiny "Manufactured by" footnote ONLY
 * - NO "Ride the Dragon", NO Ryoto taglines
 * - Layout: Model name top-left, specs table left, large product image right
 * - Clean white background, thin line separators, minimal borders
 * - Product images are the visual hero of each model page
 */

import { Phone, Wrench, MapPin, ChevronDown } from "lucide-react";

// ─── CDN URLS ───────────────────────────────────────────────────────────────
const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/livingvitals_logo_b5cb648b.png";

// Clean product images from Ryoto website (white bg, full body)
const ELECTRO_ZL9_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/electro_zl9_clean_856c6afe.jpg";
const NEUTRON_PRO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/neutron_pro_clean_ad88c183.webp";
const POLO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/polo_clean_2f1da090.webp";
const ATOM_PRO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/atom_pro_clean_c480fdff.webp";

// ─── DATA ───────────────────────────────────────────────────────────────────

interface SpecRow { param: string; value: string; }
interface BatteryOption {
  config: string;
  type: "lithium" | "lead" | "base";
  range: string;
  price: string;
  charging: string;
  charger: string;
  warranty: string;
}

interface ModelData {
  name: string;
  image: string;
  specs: SpecRow[];
  batteries: BatteryOption[];
}

const models: ModelData[] = [
  {
    name: "ELECTRO ZL9",
    image: ELECTRO_ZL9_IMG,
    specs: [
      { param: "Net Weight", value: "80 Kg" },
      { param: "Gross Weight", value: "150 Kg" },
      { param: "Climbing Capacity", value: "7°" },
      { param: "Ground Clearance", value: "160 mm" },
      { param: "Front Suspension", value: "Telescopic Double" },
      { param: "Rear Suspension", value: "Shocker" },
      { param: "Carrying Capacity", value: "170 Kg" },
      { param: "Headlight", value: "LED" },
      { param: "Taillight", value: "Unique Design" },
      { param: "Motor Thickness", value: "2.3 mm" },
      { param: "Motor Height", value: "300 mm" },
      { param: "Tyre Type", value: "10/10 Tubeless, 12/10 Tubeless" },
      { param: "Speedometer", value: "Digital" },
      { param: "Wheel Type", value: "Alloy Wheels, Front Disc" },
      { param: "Top Speed", value: "25 Km/h" },
    ],
    batteries: [
      { config: "Without Battery", type: "base", range: "—", price: "₹25,000", charging: "—", charger: "—", warranty: "—" },
      { config: "Lead Acid 60V", type: "lead", range: "70 km", price: "₹38,000", charging: "5–6 Hours", charger: "4AMP Auto cut", warranty: "1 Year" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹45,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
      { config: "Lithium 60V / 45Ah", type: "lithium", range: "80 km", price: "₹51,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
    ],
  },
  {
    name: "NEUTRON PRO",
    image: NEUTRON_PRO_IMG,
    specs: [
      { param: "Net Weight", value: "75 Kg" },
      { param: "Gross Weight", value: "150 Kg" },
      { param: "Climbing Capacity", value: "7°" },
      { param: "Ground Clearance", value: "160 mm" },
      { param: "Front Suspension", value: "Telescopic Double" },
      { param: "Rear Suspension", value: "Shocker" },
      { param: "Carrying Capacity", value: "160 Kg" },
      { param: "Headlight", value: "LED" },
      { param: "Taillight", value: "Unique Design" },
      { param: "Motor Thickness", value: "2.3 mm" },
      { param: "Motor Height", value: "300 mm" },
      { param: "Tyre Type", value: "10/10 Tubeless, 12/10 Tubeless" },
      { param: "Speedometer", value: "Digital" },
      { param: "Wheel Type", value: "Alloy Wheels, Front Disc" },
      { param: "Top Speed", value: "25 Km/h" },
    ],
    batteries: [
      { config: "Without Battery", type: "base", range: "—", price: "₹21,500", charging: "—", charger: "—", warranty: "—" },
      { config: "Lead Acid 48V", type: "lead", range: "50 km", price: "₹32,500", charging: "5–6 Hours", charger: "4AMP Auto cut", warranty: "1 Year" },
      { config: "Lead Acid 60V", type: "lead", range: "70 km", price: "₹35,000", charging: "5–6 Hours", charger: "4AMP Auto cut", warranty: "1 Year" },
      { config: "Lithium 48V / 32Ah", type: "lithium", range: "50 km", price: "₹37,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹42,500", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
    ],
  },
  {
    name: "POLO",
    image: POLO_IMG,
    specs: [
      { param: "Net Weight", value: "95 Kg" },
      { param: "Gross Weight", value: "160 Kg" },
      { param: "Climbing Capacity", value: "7°" },
      { param: "Ground Clearance", value: "170 mm" },
      { param: "Front Suspension", value: "Telescopic Double" },
      { param: "Rear Suspension", value: "Shocker" },
      { param: "Carrying Capacity", value: "190 Kg" },
      { param: "Headlight", value: "LED" },
      { param: "Taillight", value: "Unique Design" },
      { param: "Motor Thickness", value: "2.3 mm" },
      { param: "Motor Height", value: "300 mm" },
      { param: "Tyre Type", value: "12/12 Tubeless" },
      { param: "Speedometer", value: "Digital" },
      { param: "Wheel Type", value: "Alloy Wheels, Dual Disc" },
      { param: "Top Speed", value: "25 Km/h" },
    ],
    batteries: [
      { config: "Without Battery", type: "base", range: "—", price: "₹32,000", charging: "—", charger: "—", warranty: "—" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹53,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
      { config: "Lithium 60V / 45Ah", type: "lithium", range: "80 km", price: "₹58,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
    ],
  },
  {
    name: "ATOM PRO",
    image: ATOM_PRO_IMG,
    specs: [
      { param: "Net Weight", value: "90 Kg" },
      { param: "Gross Weight", value: "160 Kg" },
      { param: "Climbing Capacity", value: "7°" },
      { param: "Ground Clearance", value: "170 mm" },
      { param: "Front Suspension", value: "Telescopic Double" },
      { param: "Rear Suspension", value: "Shocker" },
      { param: "Carrying Capacity", value: "180 Kg" },
      { param: "Headlight", value: "LED" },
      { param: "Taillight", value: "Unique Design" },
      { param: "Motor Thickness", value: "2.3 mm" },
      { param: "Motor Height", value: "300 mm" },
      { param: "Tyre Type", value: "12/12 Tubeless" },
      { param: "Speedometer", value: "Digital" },
      { param: "Wheel Type", value: "Alloy Wheels, Dual Disc" },
      { param: "Top Speed", value: "25 Km/h" },
    ],
    batteries: [
      { config: "Without Battery", type: "base", range: "—", price: "₹28,000", charging: "—", charger: "—", warranty: "—" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹48,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
      { config: "Lithium 60V / 45Ah", type: "lithium", range: "80 km", price: "₹54,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years" },
    ],
  },
];

// ─── COVER SECTION ──────────────────────────────────────────────────────────

function CoverSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative px-6">
      <div className="text-center max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* HERO: Living Vitals Logo — MASSIVE */}
        <img
          src={LOGO}
          alt="Living Vitals by RajPraNim Enterprises"
          className="h-32 sm:h-40 md:h-52 lg:h-60 mx-auto mb-10 object-contain"
        />

        {/* Catalogue Title */}
        <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl tracking-[0.15em] text-gray-900 leading-none mb-2">
          ELECTRIC SCOOTER
        </h1>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-lv-orange leading-none mb-8">
          CATALOGUE
        </h2>

        <div className="w-16 h-[2px] bg-lv-orange mx-auto mb-8" />

        <p className="font-body text-base sm:text-lg text-gray-600 mb-2">
          Your Trusted Electric Mobility Partner
        </p>
        <p className="font-body text-sm text-gray-400 mb-8">
          Maheshwaram, Hyderabad, Telangana
        </p>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-12">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-lv-orange" />
            <span className="font-body text-sm text-gray-700">Sales: <strong>902 901 9991</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-lv-green" />
            <span className="font-body text-sm text-gray-700">Service: <strong>83338 64001</strong></span>
          </div>
        </div>

        {/* Manufacturer — tiny footnote */}
        <p className="text-[11px] text-gray-400 font-body">
          Manufactured by Ryoto Electrix Pvt Ltd., Chevella, Hyderabad
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 flex flex-col items-center text-gray-400 animate-in fade-in duration-500 delay-1000">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-body">Explore Models</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

// ─── MODEL PAGE (Lookbook Style) ────────────────────────────────────────────

function ModelPage({ model, index }: { model: ModelData; index: number }) {
  return (
    <section
      id={model.name.toLowerCase().replace(/\s+/g, "-")}
      className="min-h-screen bg-white border-t border-gray-100 py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: Model Name + Image + Specs (Lookbook Layout) ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mb-12 lg:mb-16">

          {/* LEFT: Model Name + Specs Table (~40%) */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div>
              {/* Model Name — LARGE, Lookbook style */}
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-[0.08em] text-gray-900 leading-none mb-6 lg:mb-8">
                {model.name}
              </h2>

              {/* Technical Specifications heading */}
              <h3 className="font-body text-sm font-bold tracking-wider uppercase text-gray-500 mb-4 border-b-2 border-lv-orange pb-2 inline-block">
                Technical Specifications
              </h3>

              {/* Specs Table — Clean, minimal lines like the Lookbook */}
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 pr-4 font-bold text-gray-800 text-xs uppercase tracking-wide">Parameter</th>
                    <th className="text-left py-2 font-bold text-gray-800 text-xs uppercase tracking-wide">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {model.specs.map((spec) => (
                    <tr key={spec.param} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-semibold text-gray-700 whitespace-nowrap">{spec.param}</td>
                      <td className="py-2 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Bottom tagline */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Choose Your E-Scooter
                </p>
                <p className="font-body text-[11px] text-gray-400 mt-0.5">
                  <span className="text-lv-orange font-semibold">Living Vitals</span> — <span className="text-lv-green">RajPraNim Enterprises</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Image — HERO (~60%) */}
          <div className="w-full lg:w-[60%] flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <img
                src={model.image}
                alt={model.name}
                className="w-full max-h-[520px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom: Battery Options Table ── */}
        <div>
          <h3 className="font-body text-sm font-bold tracking-wider uppercase text-gray-500 mb-4 border-b-2 border-lv-orange pb-2 inline-block">
            Battery Options & Pricing
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 pr-4 font-bold text-gray-800 text-xs uppercase tracking-wide">Configuration</th>
                  <th className="text-left py-3 pr-4 font-bold text-gray-800 text-xs uppercase tracking-wide">Range</th>
                  <th className="text-left py-3 pr-4 font-bold text-gray-800 text-xs uppercase tracking-wide">Price</th>
                  <th className="text-left py-3 pr-4 font-bold text-gray-800 text-xs uppercase tracking-wide hidden sm:table-cell">Charging Time</th>
                  <th className="text-left py-3 pr-4 font-bold text-gray-800 text-xs uppercase tracking-wide hidden md:table-cell">Charger</th>
                  <th className="text-left py-3 font-bold text-gray-800 text-xs uppercase tracking-wide hidden md:table-cell">Warranty</th>
                </tr>
              </thead>
              <tbody>
                {model.batteries.map((bat) => (
                  <tr key={bat.config} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800">{bat.config}</span>
                        {bat.type === "lithium" && (
                          <span className="text-[9px] font-bold uppercase bg-orange-50 text-lv-orange px-1.5 py-0.5 rounded border border-orange-200">
                            Li-ion
                          </span>
                        )}
                        {bat.type === "lead" && (
                          <span className="text-[9px] font-bold uppercase bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">
                            Lead
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-gray-700 font-semibold">{bat.range}</td>
                    <td className="py-3 pr-4">
                      <span className="font-bold text-gray-900 text-base">{bat.price}</span>
                    </td>
                    <td className="py-3 pr-4 text-gray-600 hidden sm:table-cell">{bat.charging}</td>
                    <td className="py-3 pr-4 text-gray-600 text-xs hidden md:table-cell">{bat.charger}</td>
                    <td className="py-3 text-gray-600 hidden md:table-cell">{bat.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-gray-400 mt-4 font-body">
            All prices inclusive of GST. Transport charges extra. Lithium-ion batteries offer superior range, faster charging, and longer warranty.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section className="bg-white border-t border-gray-200 py-16 md:py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[0.12em] text-gray-900 mb-3">
            GET IN TOUCH
          </h2>
          <div className="w-14 h-[2px] bg-lv-orange mx-auto" />
        </div>

        <div className="flex flex-col items-center">
          {/* Living Vitals — HERO */}
          <img src={LOGO} alt="Living Vitals" className="h-20 md:h-24 mb-6 object-contain" />

          <p className="font-body text-base text-gray-600 mb-1">Your Trusted Electric Mobility Partner</p>
          <p className="font-body text-sm text-gray-400 mb-8">Sales, Service & Support for Electric Scooters</p>

          <div className="grid sm:grid-cols-2 gap-8 w-full max-w-xl mb-10">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-lv-orange mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Bawarchi Hotel, Mansanpally Rd, adjacent to Maheshwaram,
                opposite to Bharat Petrol Bunk, Maheshwaram,
                Hyderabad, Telangana 501359
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lv-orange flex-shrink-0" />
                <p className="font-body text-sm text-gray-700"><strong>Sales:</strong> 902 901 9991</p>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-lv-green flex-shrink-0" />
                <p className="font-body text-sm text-gray-700"><strong>Service:</strong> 83338 64001</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919029019991"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lv-orange text-white font-body font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm mb-10"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: +91 902 901 9991
          </a>

          {/* Manufacturer footnote */}
          <p className="text-[11px] text-gray-400 font-body">
            Manufactured by Ryoto Electrix Pvt Ltd., Chevella, Hyderabad &nbsp;|&nbsp;{" "}
            <a href="https://www.ryotoelectrix.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              www.ryotoelectrix.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Living Vitals" className="h-8 object-contain" />
            <div className="text-xs font-body">
              <span className="text-lv-orange font-bold">Living Vitals</span>
              <span className="text-gray-400 mx-2"> by </span>
              <span className="text-lv-green font-semibold">RajPraNim Enterprises</span>
            </div>
          </div>
          <div className="text-[11px] text-gray-400 font-body text-center md:text-right">
            <p>Manufactured by Ryoto Electrix Pvt Ltd., Chevella, Hyderabad</p>
            <p className="mt-0.5">All prices inclusive of GST. Specifications may change without prior notice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── STICKY NAV ─────────────────────────────────────────────────────────────

function StickyNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2.5">
        {/* Living Vitals logo — left, prominent */}
        <a href="#" className="flex-shrink-0">
          <img src={LOGO} alt="Living Vitals" className="h-8 sm:h-10 object-contain" />
        </a>

        {/* Model links */}
        <div className="flex items-center gap-1 overflow-x-auto">
          {models.map((m) => (
            <a
              key={m.name}
              href={`#${m.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-body text-xs sm:text-sm font-semibold text-gray-500 hover:text-lv-orange transition-colors px-2 sm:px-3 py-1.5 rounded whitespace-nowrap hover:bg-orange-50"
            >
              {m.name}
            </a>
          ))}
          <a
            href="#contact"
            className="font-body text-xs sm:text-sm font-semibold text-gray-500 hover:text-lv-green transition-colors px-2 sm:px-3 py-1.5 rounded whitespace-nowrap hover:bg-green-50"
          >
            Contact
          </a>
        </div>

        {/* Manufacturer — tiny right */}
        <div className="hidden lg:block text-right flex-shrink-0 ml-4">
          <p className="text-[10px] text-gray-400 font-body leading-tight">Manufactured by</p>
          <p className="text-[10px] text-gray-500 font-body leading-tight">Ryoto Electrix</p>
        </div>
      </div>
    </nav>
  );
}

// ─── MAIN ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <CoverSection />
      <StickyNav />
      {models.map((model, i) => (
        <ModelPage key={model.name} model={model} index={i} />
      ))}
      <ContactSection />
      <Footer />
    </div>
  );
}
