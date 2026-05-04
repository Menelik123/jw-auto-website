"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const hours = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Friday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Saturday", hours: "Closed", open: false },
  { day: "Sunday", hours: "Closed", open: false },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0A1628] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#C8102E] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-4">
              Contact
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Get In Touch</h1>
            <p className="text-white/60 text-lg max-w-xl">
              Questions about your vehicle or our services? Reach us by phone, or use the form below.
              Danielle handles all scheduling and inquiries.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#C8102E]" />
                </div>
                <h3 className="font-bold text-[#0A1628]">Phone</h3>
              </div>
              <a href="tel:+16783100267" className="text-2xl font-black text-[#0A1628] hover:text-[#C8102E] transition-colors block mb-1">
                (678) 310-0267
              </a>
              <p className="text-gray-500 text-sm">Mon–Fri · 8AM–5PM · Ask for Danielle</p>
              <div className="mt-3 text-[#C8102E] text-sm font-semibold">Hablamos español</div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C8102E]" />
                </div>
                <h3 className="font-bold text-[#0A1628]">Location</h3>
              </div>
              <div className="text-[#0A1628] font-semibold mb-1">1480 Veterans Memorial Hwy SW</div>
              <div className="text-gray-600 text-sm">Suite 100 · Mableton, GA 30126</div>
              <div className="text-gray-400 text-xs mt-1">Cobb County</div>
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="text-blue-700 text-xs font-medium">Service Radius</div>
                <div className="text-blue-600 text-sm">Serving Cobb County and surrounding 10–15 miles</div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#C8102E]" />
                </div>
                <h3 className="font-bold text-[#0A1628]">Hours</h3>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm py-1 border-b border-gray-100 last:border-0">
                    <span className={h.open ? "text-[#0A1628] font-medium" : "text-gray-400"}>{h.day}</span>
                    <span className={h.open ? "text-gray-600" : "text-[#C8102E] font-medium"}>{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-gray-500 text-xs">Vehicle pickup by 4:30 PM</div>
            </motion.div>
          </div>

          {/* Map + Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden"
              style={{ height: "300px" }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-100">
                <MapPin className="w-12 h-12 text-gray-300" />
                <div className="text-center">
                  <div className="font-semibold text-gray-400">Google Maps Embed</div>
                  <div className="text-gray-400 text-sm">Mableton, Georgia · JW Auto</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                  <code className="text-xs text-gray-400">{'<iframe src="google.com/maps/embed/..." />'}</code>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#C8102E]" />
                </div>
                <h2 className="text-xl font-bold text-[#0A1628]">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-2">Message Sent</h3>
                  <p className="text-gray-600">We&apos;ll get back to you within one business day. Mon–Fri only.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent"
                      placeholder="(770) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Vehicle (Year, Make, Model)</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent"
                      placeholder="2019 Toyota Camry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Describe the Issue</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent resize-none"
                      placeholder="What's going on with your vehicle?"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold py-3 h-auto flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                  <p className="text-gray-400 text-xs text-center">
                    We respond Mon–Fri within one business day. For faster service, call us directly.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
