"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  text: string;
  delay?: number;
}

export default function ReviewCard({ name, rating, date, text, delay = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
        <span className="text-xs font-bold tracking-wide" style={{ color: "#4285F4" }}>G</span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="font-semibold text-[#0A1628] text-sm">{name}</span>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
    </motion.div>
  );
}
