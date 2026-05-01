"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  "We run a full scan — not just a code reader",
  "We test components under real conditions, not assumptions",
  "Accurate diagnosis prevents $1,000+ in wrong repairs",
  "We stand behind our findings — in writing",
];

export default function DiagnosticFee() {
  return (
    <section className="bg-[#0A1628] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-[#C8102E] text-white font-black text-3xl sm:text-4xl px-6 py-3 mb-6 tracking-tight">
            $150 DIAGNOSTIC FEE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            We Charge $150 to Diagnose Your Vehicle.
            <br />
            <span className="text-[#C8102E]">Here&apos;s Why That&apos;s Good For You.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A lot of shops pretend to diagnose for free — then charge you for the wrong fix.
            We do it right the first time, and we charge for the expertise that makes that possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm">{reason}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm mb-6">
            The $150 fee is non-negotiable and required at booking. It applies toward your repair if you proceed with us.
          </p>
          <Button
            render={<Link href="/book" />}
            size="lg"
            className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold px-10 py-4 h-auto text-base flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book &amp; Pre-Pay the $150 Diagnostic
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
