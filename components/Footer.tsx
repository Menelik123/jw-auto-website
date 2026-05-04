import Link from "next/link";
import { Wrench, Phone, MapPin, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C8102E] rounded flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">JW AUTO</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">Mableton, GA</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Mableton&apos;s trusted AC and electrical specialist since 2008. When other shops can&apos;t figure it out, they call us.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-[#C8102E] rounded flex items-center justify-center transition-colors text-white text-xs font-bold">
                f
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-[#C8102E] rounded flex items-center justify-center transition-colors text-white text-xs font-bold">
                ig
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-white/50 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-white/50 mb-4">Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C8102E] mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium">Monday – Friday</div>
                  <div className="text-white/60">8:00 AM – 5:00 PM</div>
                  <div className="text-white/40 text-xs mt-1">Vehicle pickup by 4:30 PM</div>
                </div>
              </div>
              <div className="text-white/40 text-xs mt-3">Closed Saturday & Sunday</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-white/50 mb-4">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C8102E] mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/60 text-xs">Call or Text</div>
                  <a href="tel:+16783100267" className="text-white hover:text-[#C8102E] font-medium transition-colors">
                    (678) 310-0267
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8102E] mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/60 text-xs">Location</div>
                  <div className="text-white">1480 Veterans Memorial Hwy SW</div>
                  <div className="text-white/60 text-xs">Suite 100 · Mableton, GA 30126</div>
                </div>
              </div>
              <div className="mt-4 bg-[#C8102E]/20 border border-[#C8102E]/30 rounded p-3">
                <div className="text-[#C8102E] font-bold text-sm">$150 Diagnostic Fee</div>
                <div className="text-white/60 text-xs mt-1">Required at booking. Non-negotiable.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} JW Auto — Mableton, GA. All rights reserved.</p>
          <p>Japanese & Domestic Vehicles Only · No European Models</p>
        </div>
      </div>
    </footer>
  );
}
