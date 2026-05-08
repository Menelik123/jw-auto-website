import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AC Repair & Electrical Diagnostics | JW Auto Service",
  description:
    "AC repair, electrical diagnostics, and general repair for Japanese and domestic vehicles in Mableton, GA. $150 flat diagnostic fee.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
