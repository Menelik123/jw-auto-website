"use client";

import { motion } from "framer-motion";
import { Building2, Star, Users, Shield, Car, Clock } from "lucide-react";

const items = [
  {
    icon: Building2,
    label: "18 Years at This Location",
    sub: "Same address since 2006",
  },
  {
    icon: Star,
    label: "4.7 Stars · 100+ Reviews",
    sub: "Google verified",
  },
  {
    icon: Users,
    label: "Trusted by Other Mechanics",
    sub: "Shops send us their hardest jobs",
  },
  {
    icon: Shield,
    label: "OEM-Grade Parts Only",
    sub: "No aftermarket shortcuts",
  },
  {
    icon: Car,
    label: "Japanese & Domestic",
    sub: "Specialists, not generalists",
  },
  {
    icon: Clock,
    label: "Mon–Fri · Full Attention",
    sub: "No weekend rush jobs",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0A1628] py-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 bg-[#C8102E]/15 border border-[#C8102E]/30 rounded-lg flex items-center justify-center mb-1">
                <item.icon className="w-6 h-6 text-[#C8102E]" />
              </div>
              <div className="text-white font-semibold text-sm leading-tight">{item.label}</div>
              <div className="text-white/50 text-xs">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
