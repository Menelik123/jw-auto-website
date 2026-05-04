"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/shop-exterior.jpg"
          alt="JW Auto Service — Mableton, Georgia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A1628]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
      </div>

      {/* Red accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C8102E]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#C8102E]/20 border border-[#C8102E]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#C8102E] rounded-full animate-pulse" />
            <span className="text-[#C8102E] text-sm font-medium tracking-wide">Mableton, Georgia · Since 2008</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Mableton&apos;s AC &amp;{" "}
            <span className="text-[#C8102E]">Electrical</span>
            <br />Specialist
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 font-medium mb-4 max-w-2xl mx-auto">
            When other mechanics can&apos;t figure it out, they call us.
          </p>

          <p className="text-base text-white/60 mb-10 max-w-xl mx-auto">
            18 years at this location · 4.7 stars · 100+ reviews · Japanese & domestic vehicles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-base px-8 py-4 h-auto shadow-lg shadow-[#C8102E]/25 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book &amp; Pre-Pay Diagnostic
            </Button>
            <Button
              render={<a href="tel:+16783100267" />}
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/70 font-bold text-base px-8 py-4 h-auto bg-transparent flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: (678) 310-0267
            </Button>
          </div>

          <p className="text-white/40 text-sm mt-6">
            $150 diagnostic fee required at booking · Mon–Fri 8AM–5PM only
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
