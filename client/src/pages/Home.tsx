/*
 * DESIGN: Clean Automotive Catalogue — Ryoto Lookbook style
 * Layout: Model name top-left, specs table left, large product image right,
 * battery options table below. NO diagonal cuts. EV images are hero.
 * 
 * BRANDING: Living Vitals (Orange) | RajPraNim (Green) | Ryoto (Charcoal)
 */

import { motion } from "framer-motion";
import { Battery, Zap, Phone, MapPin, Wrench, Globe, ChevronDown } from "lucide-react";

// CDN URLs
const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/livingvitals_logo_b5cb648b.png";
const ATOM_PRO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/AtomPro_e53dc960.jpeg";
const ELECTRO_ZL9 = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/ElectroZL9_406f32bc.jpeg";
const NEUTRON_PRO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/NeutronPro_69785747.jpeg";
const POLO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029485756/gXaTpG7hJqp9ZjTjhbtCNX/Polo_a5c6ed8d.jpeg";

// ─── DATA ────────────────────────────────────────────────────────────────────

interface SpecRow {
  param: string;
  value: string;
}

interface BatteryOption {
  config: string;
  type: "lithium" | "lead" | "base";
  range: string;
  price: string;
  charging: string;
  charger: string;
  warranty: string;
  features: string;
}

interface ModelData {
  name: string;
  subtitle: string;
  image: string;
  specs: SpecRow[];
  batteries: BatteryOption[];
}

const models: ModelData[] = [
  {
    name: "ELECTRO ZL9",
    subtitle: "Sport",
    image: ELECTRO_ZL9,
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
      { config: "Without Battery", type: "base", range: "—", price: "₹25,000", charging: "—", charger: "—", warranty: "—", features: "Base Frame" },
      { config: "Lead Acid 60V", type: "lead", range: "70 km", price: "₹38,000", charging: "5–6 Hours", charger: "4AMP Auto cut", warranty: "1 Year", features: "Water/Fire Proof" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹45,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
      { config: "Lithium 60V / 45Ah", type: "lithium", range: "80 km", price: "₹51,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
    ],
  },
  {
    name: "NEUTRON PRO",
    subtitle: "Standard",
    image: NEUTRON_PRO,
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
      { config: "Without Battery", type: "base", range: "—", price: "₹21,500", charging: "—", charger: "—", warranty: "—", features: "Base Frame" },
      { config: "Lead Acid 48V", type: "lead", range: "50 km", price: "₹32,500", charging: "5–6 Hours", charger: "4AMP Auto cut", warranty: "1 Year", features: "Water/Fire Proof" },
      { config: "Lead Acid 60V", type: "lead", range: "70 km", price: "₹35,000", charging: "5–6 Hours", charger: "4AMP Auto cut", warranty: "1 Year", features: "Water/Fire Proof" },
      { config: "Lithium 48V / 32Ah", type: "lithium", range: "50 km", price: "₹37,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹42,500", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
    ],
  },
  {
    name: "POLO",
    subtitle: "Scout 2",
    image: POLO,
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
      { config: "Without Battery", type: "base", range: "—", price: "₹32,000", charging: "—", charger: "—", warranty: "—", features: "Base Frame" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹53,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
      { config: "Lithium 60V / 45Ah", type: "lithium", range: "80 km", price: "₹58,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
    ],
  },
  {
    name: "ATOM PRO",
    subtitle: "City",
    image: ATOM_PRO,
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
      { config: "Without Battery", type: "base", range: "—", price: "₹28,000", charging: "—", charger: "—", warranty: "—", features: "Base Frame" },
      { config: "Lithium 60V / 36Ah", type: "lithium", range: "70 km", price: "₹48,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
      { config: "Lithium 60V / 45Ah", type: "lithium", range: "80 km", price: "₹54,000", charging: "3–4 Hours", charger: "6AMP Auto cut", warranty: "2 Years", features: "Smart BMS" },
    ],
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-wide text-gray-900">RYOTO</span>
          <span className="text-xs text-gray-400 font-body uppercase tracking-widest">Electrix</span>
        </div>
        <img src={LOGO} alt="Living Vitals - RajPraNim Enterprises" className="h-10 md:h-14 object-contain" />
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm font-body leading-relaxed">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Manufactured by:</span>{" "}
              Ryoto Electrix Pvt Ltd., Chevella, Hyderabad{" "}
              <span className="mx-1">|</span>
              <a href="https://www.ryotoelectrix.com" target="_blank" rel="noopener noreferrer" className="text-ryoto-blue hover:underline">
                www.ryotoelectrix.com
              </a>
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-semibold text-gray-800">Sales & Service by:</span>{" "}
              <span className="text-lv-orange font-bold">Living Vitals</span>,{" "}
              <span className="text-lv-green font-semibold">RajPraNim Enterprises</span>
            </p>
          </div>
          <div className="text-sm text-gray-500 font-body text-right">
            <p>Prices inclusive of GST. Transport charges extra.</p>
            <p>Specifications may change without prior notice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyFooterBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-2 no-print">
      <div className="container flex items-center justify-between text-xs font-body">
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Manufactured by:</span>
          <span className="font-semibold text-gray-700">Ryoto Electrix</span>
          <span className="text-gray-400 mx-1">|</span>
          <a href="https://www.ryotoelectrix.com" target="_blank" rel="noopener noreferrer" className="text-ryoto-blue hover:underline">
            ryotoelectrix.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Sales & Service:</span>
          <span className="text-lv-orange font-bold">Living Vitals</span>
          <span className="text-gray-400">,</span>
          <span className="text-lv-green font-semibold">RajPraNim Enterprises</span>
        </div>
      </div>
    </div>
  );
}

// ─── COVER SECTION ───────────────────────────────────────────────────────────

function CoverSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <img src={LOGO} alt="Living Vitals" className="h-20 md:h-28 mx-auto mb-8 object-contain" />

        <h1 className="font-display text-6xl md:text-8xl tracking-wider text-gray-900 mb-2">
          RYOTO <span className="text-gray-400">ELECTRIX</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-500 tracking-widest uppercase mb-2">
          Ride the Dragon
        </p>

        <div className="w-24 h-0.5 bg-lv-orange mx-auto my-8" />

        <p className="font-display text-3xl md:text-4xl tracking-wide text-gray-700 mb-4">
          Electric Scooter Catalogue
        </p>

        <div className="mt-6 font-body text-sm text-gray-500">
          <p>
            <span className="font-semibold text-gray-700">Sales & Service by</span>
          </p>
          <p className="mt-1">
            <span className="text-lv-orange font-bold text-base">Living Vitals</span>
            <span className="text-gray-400 mx-2">—</span>
            <span className="text-lv-green font-semibold text-base">RajPraNim Enterprises</span>
          </p>
          <p className="mt-3 text-gray-400">Maheshwaram, Hyderabad, Telangana</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-body">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}

// ─── MODEL SECTION ───────────────────────────────────────────────────────────

function ModelSection({ model, index }: { model: ModelData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-16 md:py-24 border-t border-gray-100" id={model.name.toLowerCase().replace(/\s+/g, "-")}>
      <div className="container">
        {/* Model Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display text-5xl md:text-7xl tracking-wider text-gray-900 leading-none">
            {model.name}
          </h2>
          <p className="font-body text-sm uppercase tracking-widest text-lv-orange mt-2 font-semibold">
            {model.subtitle}
          </p>
        </motion.div>

        {/* Image + Specs Layout */}
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-start`}>
          {/* Product Image — HERO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[55%] flex-shrink-0"
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm max-h-[550px] flex items-center justify-center">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-contain max-h-[550px]"
              />
            </div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[45%]"
          >
            <h3 className="font-display text-2xl tracking-wide text-gray-800 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-lv-orange" />
              Technical Specifications
            </h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left py-2.5 px-4 font-semibold tracking-wide text-xs uppercase">Parameter</th>
                    <th className="text-left py-2.5 px-4 font-semibold tracking-wide text-xs uppercase">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {model.specs.map((spec, i) => (
                    <tr key={spec.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-2 px-4 font-semibold text-gray-700 border-b border-gray-100">
                        {spec.param}
                      </td>
                      <td className="py-2 px-4 text-gray-600 font-mono text-xs border-b border-gray-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs text-gray-400 font-body">
              <p>CHOOSE YOUR E-SCOOTER &nbsp;|&nbsp; www.ryotoelectrix.com</p>
            </div>
          </motion.div>
        </div>

        {/* Battery Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="font-display text-2xl tracking-wide text-gray-800 mb-4 flex items-center gap-2">
            <Battery className="w-5 h-5 text-lv-orange" />
            Battery Options & Pricing
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide">Configuration</th>
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide">Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide hidden md:table-cell">Charging</th>
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide hidden md:table-cell">Charger</th>
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide hidden lg:table-cell">Warranty</th>
                  <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wide hidden lg:table-cell">Features</th>
                </tr>
              </thead>
              <tbody>
                {model.batteries.map((bat, i) => (
                  <tr
                    key={bat.config}
                    className={`
                      ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      ${bat.type === "lithium" ? "border-l-4 border-l-lv-orange" : ""}
                      ${bat.type === "lead" ? "border-l-4 border-l-gray-400" : ""}
                      ${bat.type === "base" ? "border-l-4 border-l-gray-200" : ""}
                    `}
                  >
                    <td className="py-3 px-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800">{bat.config}</span>
                        {bat.type === "lithium" && (
                          <span className="text-[10px] font-bold uppercase bg-orange-100 text-lv-orange px-1.5 py-0.5 rounded">
                            Li-ion
                          </span>
                        )}
                        {bat.type === "lead" && (
                          <span className="text-[10px] font-bold uppercase bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                            Lead
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-gray-700 border-b border-gray-100 font-semibold">
                      {bat.range}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-100">
                      <span className="font-mono text-sm font-bold text-gray-900">{bat.price}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 hidden md:table-cell">
                      {bat.charging}
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 hidden md:table-cell text-xs">
                      {bat.charger}
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 hidden lg:table-cell">
                      {bat.warranty}
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 hidden lg:table-cell text-xs">
                      {bat.features}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-3 font-body">
            Prices inclusive of GST. Transport charges extra. Lithium batteries offer superior range & longevity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-gray-900 mb-2">
            GET IN TOUCH
          </h2>
          <div className="w-16 h-0.5 bg-lv-orange mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Sales & Service */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
          >
            <img src={LOGO} alt="Living Vitals" className="h-14 mb-6 object-contain" />
            <h3 className="font-display text-xl tracking-wide text-gray-800 mb-4">
              Sales & Service Partner
            </h3>

            <div className="space-y-4 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lv-orange mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Bawarchi Hotel, Mansanpally Rd, adjacent to Maheshwaram,
                  opposite to Bharat Petrol Bunk, Maheshwaram,
                  Hyderabad, Telangana 501359
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lv-orange flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-semibold">Sales: 902 901 9991</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-lv-green flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-semibold">Service: 83338 64001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Manufacturer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
          >
            <h3 className="font-display text-3xl tracking-wider text-gray-900 mb-1">
              RYOTO <span className="text-gray-400">ELECTRIX</span>
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-body mb-6">Ride the Dragon</p>

            <h4 className="font-display text-xl tracking-wide text-gray-800 mb-4">
              Manufacturer
            </h4>

            <div className="space-y-4 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ryoto-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Assembly Factory, Chevella, Hyderabad
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-ryoto-blue flex-shrink-0" />
                <a
                  href="https://www.ryotoelectrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ryoto-blue hover:underline font-semibold"
                >
                  www.ryotoelectrix.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919029019991"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lv-orange text-white font-body font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: +91 902 901 9991
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function ModelNav() {
  return (
    <nav className="sticky top-[57px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 no-print">
      <div className="container flex items-center gap-1 py-2 overflow-x-auto">
        {models.map((m) => (
          <a
            key={m.name}
            href={`#${m.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="font-display text-sm tracking-wider text-gray-500 hover:text-lv-orange transition-colors px-3 py-1.5 rounded whitespace-nowrap hover:bg-orange-50"
          >
            {m.name}
          </a>
        ))}
        <a
          href="#contact"
          className="font-display text-sm tracking-wider text-gray-500 hover:text-lv-green transition-colors px-3 py-1.5 rounded whitespace-nowrap hover:bg-green-50 ml-auto"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-10">
      <PageHeader />

      <CoverSection />

      <ModelNav />

      {models.map((model, i) => (
        <ModelSection key={model.name} model={model} index={i} />
      ))}

      <ContactSection />

      <PageFooter />

      <StickyFooterBar />
    </div>
  );
}
