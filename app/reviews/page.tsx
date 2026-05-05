"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/ReviewCard";

const reviews = [
  {
    name: "Hillary Jones",
    rating: 5,
    date: "7 months ago",
    text: "I have not had the best experience with auto mechanics in general, so I was very nervous about my car. From the very beginning, Danielle was extremely professional and very thorough about explaining the process. John was fantastic in fixing my 2016 Honda. The car was ready in 6 hours. I will definitely be returning and referring family and friends.",
  },
  {
    name: "James Maddox",
    rating: 5,
    date: "3 months ago",
    text: "My go-to mechanic. Danielle and John have been super for me and my family for many years. Never a problem!",
  },
  {
    name: "Aleesha Edwards-Williams",
    rating: 5,
    date: "2 years ago",
    text: "Truly the best auto mechanics I've ever been to. Highly recommend!",
  },
  {
    name: "Joseph Davenport",
    rating: 5,
    date: "10 months ago",
    text: "Very friendly and professional. When I had issues I was not sure about they thoroughly explained what happened, why it happened, and what they did to fix it. I will definitely be checking with them before I go to any other auto repair shop.",
  },
  {
    name: "Bo Smith",
    rating: 5,
    date: "a year ago",
    text: "I had an issue with my car and they got me in same day for a diagnostic and fixed it the following morning. They stayed in communication with me the whole time about what they found and the cost. The diagnostic fee was applied to the overall cost of the repair. Highly recommend.",
  },
  {
    name: "Demetrius Cook",
    rating: 5,
    date: "a year ago",
    text: "John at JW Auto was fantastic! They did a wonderful job on my 2012 Audi. I will be sending family and friends their way.",
  },
];

export default function ReviewsPage() {
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
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-8 h-8 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"}`} />
              ))}
            </div>
            <div className="text-6xl font-black text-white mb-2">4.8</div>
            <div className="text-white/60 text-lg mb-6">89 reviews on Google · Mableton, Georgia</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              What Our Customers Say
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} {...review} delay={i * 0.08} />
          ))}
        </div>

        {/* Live Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Live Reviews from Google</h2>
            <p className="text-gray-500 text-sm">Auto-updating widget pulls directly from our Google Business Profile</p>
          </div>
          {/* Elfsight Google Reviews Widget — replace data-elfsight-app-id with your real widget ID */}
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
            <div className="font-bold text-gray-500 text-lg mb-1">Google Reviews Widget</div>
            <div className="text-gray-400 text-sm max-w-sm mx-auto mb-4">
              Elfsight or EmbedSocial widget goes here — live-updating reviews straight from Google.
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 inline-block">
              <code className="text-xs text-gray-400">{'<script src="https://static.elfsight.com/platform/platform.js"></script>'}</code>
            </div>
          </div>
        </motion.div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center shadow-sm mb-10"
        >
          <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Read All Reviews on Google</h2>
          <p className="text-gray-600 mb-6">89 verified Google reviews from real JW Auto customers in Mableton, GA.</p>
          <Button render={<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" />} className="bg-[#0A1628] hover:bg-[#1a2a42] text-white font-semibold px-8 flex items-center gap-2">
            View on Google Maps <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* QR Code / Leave a Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1628] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center shrink-0">
            <div className="text-center">
              <QrCode className="w-16 h-16 text-[#0A1628] mx-auto mb-2" />
              <span className="text-xs text-gray-500 font-medium">QR Code</span>
              <span className="block text-xs text-gray-400">Placeholder</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Happy With Your Service?</h2>
            <p className="text-white/60 mb-6">
              Scan the QR code or click below to leave a review on Google. Your feedback helps other Mableton drivers find honest, expert repair.
            </p>
            <Button render={<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" />} className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold flex items-center gap-2">
              Leave a Google Review <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
