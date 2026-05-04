import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import DiagnosticFee from "@/components/DiagnosticFee";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap, Snowflake, Settings, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AC Repair & Recharge",
    description:
      "This shop has been Mableton's AC specialist for 35+ years across two owners. We diagnose and repair everything from refrigerant leaks and compressor failures to evaporator core replacements. If your AC isn't blowing cold, we know exactly why — and we fix it right. No guessing, no parts-cannon approach.",
    icon: <Snowflake className="w-6 h-6" />,
    featured: true,
  },
  {
    title: "Electrical Diagnostics",
    description:
      "Mysterious warning lights, intermittent faults, no-start conditions. Electrical problems are where most shops give up — and where we specialize. We use professional-grade scan tools and real component testing to find the actual fault, not just clear the code.",
    icon: <Zap className="w-6 h-6" />,
    featured: false,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Oil changes, fluid flushes, belts, hoses, filters — done right with OEM-grade parts. We won't upsell you. If it doesn't need it, we'll tell you. If it does, we'll show you.",
    icon: <Settings className="w-6 h-6" />,
    featured: false,
  },
  {
    title: "General Repair",
    description:
      "Brakes, suspension, cooling systems, exhaust, and more. We service Japanese and domestic vehicles only. If another shop told you they can't figure it out — bring it to us.",
    icon: <Wrench className="w-6 h-6" />,
    featured: false,
  },
];

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    date: "March 2024",
    text: "John figured out an electrical gremlin that two other shops couldn't identify in three weeks. Had it diagnosed in a day, fixed by the next morning. The $150 diagnostic fee is worth every penny.",
  },
  {
    name: "Sandra R.",
    rating: 5,
    date: "January 2024",
    text: "My AC stopped working in July — worst timing. JW Auto had it diagnosed and recharged same week. Been blowing ice cold ever since. This is my shop now.",
  },
  {
    name: "Derek F.",
    rating: 5,
    date: "November 2023",
    text: "My mechanic actually referred me here when he couldn't solve a no-start issue on my Tacoma. John found the problem in two hours. Straight shooter, no nonsense.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">What We Fix</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert service on Japanese and domestic vehicles. We do not service newer European models (BMW, Mercedes, Jaguar).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>

          {/* Vehicle callout */}
          <div className="bg-[#0A1628] border border-[#C8102E]/30 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <div className="text-white font-bold text-lg mb-1">Vehicle Compatibility</div>
              <div className="text-white/60 text-sm">
                We specialize in Japanese (Toyota, Honda, Nissan, Subaru, Mazda) and domestic (Ford, Chevy, GMC, Dodge) vehicles.
                We do not service newer BMW, Mercedes, Jaguar, or other European models.
              </div>
            </div>
            <Button render={<Link href="/services" />} className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold shrink-0">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <DiagnosticFee />

      {/* About Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#C8102E]/10 text-[#C8102E] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-4">
                About JW Auto
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4 leading-tight">
                The Shop Cobb County Mechanics Trust
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This location has been Mableton&apos;s AC specialist for over 35 years across two owners. John Wanarski took over in 2008
                and built the shop&apos;s reputation on one thing: solving problems other shops can&apos;t.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Other mechanics send John their hardest diagnostic cases. No upsells. No shortcuts. OEM-grade parts only.
                When you bring your vehicle here, it gets John&apos;s full attention — not a rushed assembly line.
              </p>
              <Button render={<Link href="/about" />} variant="outline" className="border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white font-semibold flex items-center gap-2">
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-auto">
              <Image
                src="/images/john-working-2.jpg"
                alt="John Wanarski diagnosing a vehicle at JW Auto Service"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "35+", label: "Years at this location" },
                    { value: "4.7★", label: "Google rating" },
                    { value: "100+", label: "Verified reviews" },
                    { value: "$150", label: "Flat diagnostic fee" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#0A1628]/80 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10">
                      <div className="text-2xl font-black text-[#C8102E]">{stat.value}</div>
                      <div className="text-white/70 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-black text-yellow-400 mb-2">★ 4.7</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-2">What Our Customers Say</h2>
            <p className="text-gray-500">100+ reviews on Google · Mableton, Georgia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} {...r} delay={i * 0.1} />
            ))}
          </div>
          <div className="text-center">
            <Button render={<Link href="/reviews" />} variant="outline" className="border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white font-semibold flex items-center gap-2">
              See All Reviews <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#C8102E] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Get It Fixed Right?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book your appointment online and pre-pay the $150 diagnostic fee to confirm your slot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button render={<Link href="/book" />} size="lg" className="bg-white text-[#C8102E] hover:bg-gray-100 font-bold text-base px-10 py-4 h-auto">
              Book &amp; Pre-Pay Now
            </Button>
            <Button render={<a href="tel:+16783100267" />} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-base px-10 py-4 h-auto bg-transparent">
              Call (678) 310-0267
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
