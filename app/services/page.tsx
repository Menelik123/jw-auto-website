"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Snowflake, Zap, Settings, Wrench, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ac-repair",
    title: "AC Repair & Recharge",
    badge: "Signature Service",
    icon: Snowflake,
    featured: true,
    description: `This location has been Mableton's dedicated AC specialist for over 35 years across two owners. John took over in 2008 and continued that legacy of excellence.

We handle the full spectrum of AC problems: refrigerant leaks, compressor failures, condenser and evaporator replacement, blend door actuators, electrical faults in the climate control system, and complete system recharges.

Our diagnostic process doesn't just hook up a gauge set — we test every component of the system to understand the root cause. We use OEM-grade parts only. No cheap aftermarket compressors that fail in 18 months.

If your AC isn't blowing cold, we know why. And we fix it right.`,
    items: [
      "Refrigerant leak detection & repair",
      "Compressor replacement",
      "Condenser & evaporator service",
      "AC recharge (R-134a & R-1234yf)",
      "Electrical faults & blend door actuators",
      "Climate control system diagnostics",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Diagnostics",
    badge: "High Complexity",
    icon: Zap,
    featured: false,
    description: `Electrical problems are where most shops hit a wall. Intermittent faults, no-start conditions, mysterious warning lights, parasitic battery drain — these require a different level of diagnostic skill.

John specializes in complex electrical work that other shops turn away. We use professional-grade scan tools and perform real component testing — not just code reading. When other mechanics can't find the problem, they call us.

Every electrical diagnosis includes a written explanation of exactly what was found, why it happened, and what was done to fix it.`,
    items: [
      "Check engine light diagnosis",
      "No-start & intermittent fault diagnosis",
      "Parasitic battery drain testing",
      "BCM & module communication faults",
      "Wiring harness inspection & repair",
      "ABS, TPMS, and airbag system diagnosis",
    ],
  },
  {
    id: "maintenance",
    title: "Preventive Maintenance",
    badge: null,
    icon: Settings,
    featured: false,
    description: `Preventive maintenance done right, with OEM-grade parts. We won't upsell you on services you don't need — if something can wait, we'll tell you. If it can't, we'll show you why.

Scheduled maintenance keeps your vehicle running longer and prevents the expensive repairs that come from neglect. We keep records of your service history and remind you when intervals are approaching.`,
    items: [
      "Oil & filter changes",
      "Coolant, brake, and transmission fluid flushes",
      "Spark plugs & ignition service",
      "Belt & hose inspection and replacement",
      "Battery testing & replacement",
      "Tire rotation & brake inspection",
    ],
  },
  {
    id: "general-repair",
    title: "General Repair",
    badge: null,
    icon: Wrench,
    featured: false,
    description: `Beyond our specialties, we handle a full range of mechanical repairs on Japanese and domestic vehicles. If you've been told a problem is too complicated or you've gotten conflicting diagnoses, bring it here.

We take on jobs other shops pass on. Our rule: we don't start a repair until we know exactly what we're fixing and why.`,
    items: [
      "Brake system repair & replacement",
      "Suspension & steering service",
      "Cooling system repair",
      "Exhaust system service",
      "Engine & transmission diagnostics",
      "Pre-purchase inspections",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#0A1628] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#C8102E] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-4">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              What We Do — And What We Don&apos;t
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              We specialize in AC repair, electrical diagnostics, and complex mechanical work on Japanese and domestic vehicles.
              All services require a $150 diagnostic fee at booking.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vehicle Callout */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-amber-800 text-sm">
            <strong>Vehicle Compatibility:</strong> We service Japanese (Toyota, Honda, Nissan, Subaru, Mazda) and domestic (Ford, Chevrolet, GMC, Dodge, RAM) vehicles only.
            We do not service newer BMW, Mercedes, Jaguar, or other European models.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`rounded-2xl border overflow-hidden ${
                service.featured
                  ? "bg-[#0A1628] border-[#C8102E] shadow-2xl shadow-[#C8102E]/10"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#C8102E]/15 border border-[#C8102E]/30 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#C8102E]" />
                      </div>
                      {service.badge && (
                        <span className="bg-[#C8102E] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h2 className={`text-3xl font-bold mb-4 ${service.featured ? "text-white" : "text-[#0A1628]"}`}>
                      {service.title}
                    </h2>
                    <div className={`text-sm leading-relaxed space-y-3 ${service.featured ? "text-white/70" : "text-gray-600"}`}>
                      {service.description.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                    <Button
                      render={<Link href="/book" />}
                      className={`mt-8 font-semibold flex items-center gap-2 ${
                        service.featured
                          ? "bg-[#C8102E] hover:bg-[#a00d24] text-white"
                          : "bg-[#0A1628] hover:bg-[#1a2a42] text-white"
                      }`}
                    >
                      Book This Service <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${service.featured ? "text-white/50" : "text-gray-400"}`}>
                      What&apos;s Included
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#C8102E] rounded-full shrink-0" />
                          <span className={`text-sm ${service.featured ? "text-white/80" : "text-gray-700"}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-[#C8102E] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Book?</h2>
        <p className="text-white/80 mb-8">$150 diagnostic fee required at booking. Mon–Fri 8AM–5PM only.</p>
        <Button render={<Link href="/book" />} size="lg" className="bg-white text-[#C8102E] hover:bg-gray-100 font-bold px-10 py-4 h-auto">
          Book &amp; Pre-Pay Now
        </Button>
      </div>
    </div>
  );
}
