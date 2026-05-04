"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Users, Award, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "OEM-Grade Parts Only",
    description:
      "We don't cut corners on parts. Every component we install meets or exceeds original manufacturer specifications. No cheap aftermarket parts that fail in 18 months.",
  },
  {
    icon: Wrench,
    title: "Diagnose First, Always",
    description:
      "We never start replacing parts based on a guess. Every repair starts with a thorough, documented diagnosis. The $150 fee exists to make this possible.",
  },
  {
    icon: Users,
    title: "Trusted by Other Mechanics",
    description:
      "When other shops can't solve a problem, they send it here. That's the highest compliment in this business — and it's happened hundreds of times since 2008.",
  },
  {
    icon: Award,
    title: "No Upsells. Ever.",
    description:
      "If your vehicle doesn't need a service, we'll tell you. We make our money fixing what's actually broken — not adding unnecessary items to your invoice.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0A1628] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#C8102E] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-6">
              About JW Auto
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              The Shop Cobb County<br />
              <span className="text-[#C8102E]">Mechanics Trust</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl">
              This isn&apos;t a franchise. It&apos;s a shop with 35+ years of AC history in one location and a reputation built on solving the problems other shops can&apos;t.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">35+ Years. One Location. Two Owners.</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  This building in Mableton has been an AC specialist shop for over 35 years. The previous owner operated here for 17 years, building deep expertise in automotive AC systems before John Wanarski took over in 2008.
                </p>
                <p>
                  John didn&apos;t just inherit a location — he inherited a standard. He&apos;s continued and expanded the shop&apos;s reputation, adding complex electrical diagnostics to the specialty work and turning JW Auto Service into the shop that other mechanics in Cobb County call when they&apos;re stuck.
                </p>
                <p>
                  In 18 years at the helm, John has built a Google rating of 4.7 stars with over 100 reviews — nearly all of them unprompted, from customers who came in skeptical and left believers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "2008", label: "John took over" },
                  { value: "35+", label: "Years, this location" },
                  { value: "4.7★", label: "Google rating" },
                  { value: "100+", label: "Verified reviews" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-[#C8102E] mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/john-working-1.jpg"
                alt="John Wanarski performing electrical diagnostics at JW Auto Service"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1628] to-transparent p-6">
                <div className="text-white font-bold">John Wanarski</div>
                <div className="text-white/60 text-sm">Owner & Master Technician · Since 2008</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Diagnostic Fee section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1628] rounded-2xl p-8 sm:p-12 mb-16"
        >
          <div className="flex items-start gap-6 flex-col sm:flex-row">
            <div className="bg-[#C8102E] text-white font-black text-2xl px-5 py-3 rounded shrink-0">
              $150
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Why We Charge a Diagnostic Fee</h2>
              <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                <p>
                  A lot of shops offer &quot;free diagnostics&quot; — which really means they hook up a code reader and guess. You end up paying for parts and labor on the wrong fix, and the real problem remains.
                </p>
                <p>
                  Our $150 fee covers a real diagnostic: component testing under real conditions, full system inspection, and a written explanation of exactly what&apos;s wrong and why. It&apos;s what makes our repairs correct the first time.
                </p>
                <p>
                  The fee applies toward your repair if you proceed with us. If you decide not to, you still have a document that tells you exactly what&apos;s wrong — which is worth far more than $150 in avoided wrong repairs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0A1628] mb-8 text-center">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex gap-4"
                >
                  <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C8102E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1628] mb-2">{val.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Spanish Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#C8102E] rounded-2xl p-8 text-white mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Hablamos Español</h2>
          <p className="text-white/80 leading-relaxed">
            En JW Auto, atendemos a nuestra comunidad hispanohablante con el mismo nivel de experiencia y honestidad.
            Nuestro equipo puede comunicarse en español para asegurarse de que entienda exactamente qué está pasando
            con su vehículo y qué necesita. Llámenos — estamos aquí para ayudar.
          </p>
          <div className="mt-4 text-white/60 text-sm italic">
            At JW Auto, we serve our Spanish-speaking community with the same level of expertise and honesty.
            Our team can communicate in Spanish to ensure you understand exactly what&apos;s happening with your vehicle.
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button render={<Link href="/book" />} size="lg" className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold px-10 py-4 h-auto text-base flex items-center gap-2">
            Book Your Appointment <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
