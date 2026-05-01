"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/ReviewCard";

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    date: "March 2024",
    text: "John figured out an electrical gremlin that two other shops couldn't identify in three weeks. Had it diagnosed in a day, fixed by the next morning. The $150 diagnostic fee is worth every penny — I spent $800 at another shop on the wrong fix before coming here.",
  },
  {
    name: "Sandra R.",
    rating: 5,
    date: "January 2024",
    text: "My AC stopped working in the middle of July — worst timing imaginable. JW Auto had it diagnosed and recharged the same week. Been blowing ice cold ever since. I've referred three people here already.",
  },
  {
    name: "Derek F.",
    rating: 5,
    date: "November 2023",
    text: "My own mechanic referred me here when he couldn't solve a no-start issue on my Tacoma. John found the problem in two hours. Straight shooter, no nonsense. Exactly the kind of shop I was looking for.",
  },
  {
    name: "Patricia M.",
    rating: 5,
    date: "September 2023",
    text: "Been bringing my Honda Accord here for three years now. Never once felt upsold on something I didn't need. John tells it to you straight, does the work right, and the price is fair. That's rare.",
  },
  {
    name: "Terrence B.",
    rating: 5,
    date: "July 2023",
    text: "Brought my F-150 in for an electrical issue that had been annoying me for months. Three other shops couldn't figure it out. JW Auto solved it in one visit. Highly recommend.",
  },
  {
    name: "Carmen V.",
    rating: 4,
    date: "May 2023",
    text: "Very professional and honest. The $150 diagnostic fee seemed high at first but they explained everything clearly and the diagnosis was thorough. Ended up saving me money in the long run. They also speak Spanish which made communication much easier.",
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
            <div className="text-6xl font-black text-white mb-2">4.7</div>
            <div className="text-white/60 text-lg mb-6">100+ reviews on Google · Mableton, Georgia</div>
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

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center shadow-sm mb-10"
        >
          <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Read All Reviews on Google</h2>
          <p className="text-gray-600 mb-6">100+ verified Google reviews from real JW Auto customers in Mableton, GA.</p>
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
