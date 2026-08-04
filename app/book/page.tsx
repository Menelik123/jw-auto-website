"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Clock, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Call Us to Schedule",
    description: "Call (678) 663-2455 during business hours. Danielle will walk you through the process and lock in your appointment.",
  },
  {
    step: "02",
    icon: CheckCircle,
    title: "Get Confirmed",
    description: "We'll confirm your appointment time and answer any questions before you come in.",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Bring Your Vehicle & Pay In Person",
    description: "The $150 diagnostic fee is collected at the shop — cash or card accepted. No online payment required.",
  },
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0A1628] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#C8102E] text-white font-black text-2xl px-6 py-2 mb-6">
              $150 DIAGNOSTIC FEE
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Schedule Your Appointment
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Call us to book your appointment. Danielle will get you set up, confirm your slot, and answer any questions — then bring your vehicle in and pay the $150 diagnostic fee at the shop.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-[#C8102E] font-black text-4xl mb-3">{s.step}</div>
                <div className="w-12 h-12 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#C8102E]" />
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main booking area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Call to Book */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-[#C8102E]" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3">Call to Schedule Your Appointment</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Danielle will get you set up quickly. Have your vehicle info ready and she&apos;ll lock in your appointment on the spot.
              </p>
              <Button render={<a href="tel:+16786632455" />} size="lg" className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-xl px-12 py-5 h-auto shadow-lg shadow-[#C8102E]/25 flex items-center gap-3 mx-auto w-full sm:w-auto justify-center">
                <Phone className="w-6 h-6" />
                (678) 663-2455
              </Button>
              <p className="text-gray-400 text-sm mt-5">Mon–Fri · 8:00 AM – 5:00 PM · Vehicle pickup by 4:30 PM</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-[#C8102E] font-semibold text-sm">Hablamos español</span>
              </div>
            </div>

            {/* In-Person Payment Notice */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628]">$150 Diagnostic Fee</h3>
                  <p className="text-gray-500 text-sm">Paid at the shop — cash or card accepted</p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Diagnostic Fee</span>
                  <span className="text-2xl font-black text-[#0A1628]">$150.00</span>
                </div>
                <p className="text-gray-500 text-xs">Non-refundable · Covers full diagnostic, not a code read</p>
              </div>
              <div className="bg-[#0A1628]/5 border border-[#0A1628]/10 rounded-xl p-5 text-center">
                <p className="text-[#0A1628] font-semibold text-sm mb-1">Collected at the shop when you arrive</p>
                <p className="text-gray-600 text-sm">
                  Call to confirm your appointment slot, then pay the $150 fee in person. We accept cash and card.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="bg-[#0A1628] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#C8102E]" />
                <h3 className="font-bold">Shop Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Tuesday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Wednesday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Thursday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Friday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span className="text-white/60">Saturday – Sunday</span>
                  <span className="text-[#C8102E] font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-white/60 text-xs">Vehicle pickup by 4:30 PM. Drop-offs accepted at open.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-[#C8102E]" />
                <h3 className="font-bold text-[#0A1628]">Call to Schedule</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Talk to Danielle, our scheduling coordinator. She&apos;ll get you locked in quickly.
              </p>
              <Button render={<a href="tel:+16786632455" />} className="w-full bg-[#0A1628] hover:bg-[#1a2a42] text-white font-semibold">
                (678) 663-2455
              </Button>
              <div className="mt-4 text-center">
                <span className="text-[#C8102E] font-semibold text-sm">Hablamos español</span>
              </div>
            </div>

            {/* Fee note */}
            <div className="bg-[#C8102E] rounded-xl p-6 text-white">
              <h3 className="font-black text-xl mb-2">$150 Fee Policy</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Required when you arrive — no exceptions</li>
                <li>• Non-refundable</li>
                <li>• Covers complete diagnostic, not a code read</li>
                <li>• Written diagnosis provided</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
