"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, featured = false, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-xl border flex flex-col ${
        featured
          ? "bg-[#0A1628] border-[#C8102E] shadow-xl shadow-[#C8102E]/10 col-span-full lg:col-span-2"
          : "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
      }`}
    >
      <div className={`p-8 flex flex-col gap-4 flex-1 ${featured ? "lg:flex-row lg:items-start lg:gap-8" : ""}`}>
        <div className={`flex-shrink-0 ${featured ? "w-16 h-16" : "w-12 h-12"} bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-xl flex items-center justify-center`}>
          <div className={`text-[#C8102E] ${featured ? "scale-125" : ""}`}>{icon}</div>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          {featured && (
            <span className="inline-block bg-[#C8102E] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded w-fit">
              Signature Service
            </span>
          )}
          <h3 className={`font-bold leading-tight ${featured ? "text-white text-2xl sm:text-3xl" : "text-[#0A1628] text-xl"}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${featured ? "text-white/70" : "text-gray-600"}`}>
            {description}
          </p>
          <div className="mt-auto pt-2">
            <Button
              render={<Link href="/book" />}
              variant={featured ? "default" : "outline"}
              className={`flex items-center gap-2 w-fit ${
                featured
                  ? "bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold"
                  : "border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold"
              }`}
            >
              Book This Service <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
