"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { Calendar, CreditCard, Clock, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    icon: Calendar,
    title: "Choose Your Date & Time",
    description: "Select an available slot from our calendar. Monday–Friday, 8AM–5PM. Vehicle pickup by 4:30PM.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Pre-Pay the $150 Diagnostic Fee",
    description: "Secure your appointment by pre-paying the flat $150 diagnostic fee. This confirms your booking.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Bring Your Vehicle In",
    description: "Danielle will follow up to confirm your appointment details and answer any questions.",
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
              Book Your Appointment &amp; Pre-Pay Diagnostic Fee
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The $150 diagnostic fee is required at booking. Pre-payment confirms your appointment.
              It applies toward your repair if you proceed with us.
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
            {/* Cal.com Embed */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div style={{ width: "100%", height: "700px", overflow: "scroll" }} id="my-cal-inline-diagnostic-appointment" />
              <Script
                id="cal-embed"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "diagnostic-appointment", {origin:"https://app.cal.com"});
Cal.ns["diagnostic-appointment"]("inline", {
  elementOrSelector:"#my-cal-inline-diagnostic-appointment",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
  calLink: "jw-auto-gal8qd/diagnostic-appointment",
});
Cal.ns["diagnostic-appointment"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`,
                }}
              />
            </div>

            {/* Stripe Payment */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628]">Pre-Pay Diagnostic Fee</h3>
                  <p className="text-gray-500 text-sm">Confirms your appointment slot</p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Diagnostic Fee</span>
                  <span className="text-2xl font-black text-[#0A1628]">$150.00</span>
                </div>
                <p className="text-gray-500 text-xs">Applied toward your repair if you proceed with us</p>
              </div>
              <Button
                render={<a href="STRIPE_PAYMENT_LINK" target="_blank" rel="noopener noreferrer" />}
                className="w-full bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold py-4 h-auto text-base"
              >
                Pay $150.00 — Confirm Appointment
              </Button>
              <p className="text-gray-400 text-xs text-center mt-3">Secured by Stripe · No card stored after payment</p>
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
                <h3 className="font-bold text-[#0A1628]">Prefer to Call?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Talk to Danielle, our scheduling coordinator. She&apos;ll get you set up quickly.
              </p>
              <Button render={<a href="tel:+16783100267" />} className="w-full bg-[#0A1628] hover:bg-[#1a2a42] text-white font-semibold">
                (678) 310-0267
              </Button>
              <div className="mt-4 text-center">
                <span className="text-[#C8102E] font-semibold text-sm">Hablamos español</span>
              </div>
            </div>

            {/* Fee note */}
            <div className="bg-[#C8102E] rounded-xl p-6 text-white">
              <h3 className="font-black text-xl mb-2">$150 Fee Policy</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Required at booking — no exceptions</li>
                <li>• Applies toward repair if you proceed</li>
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
