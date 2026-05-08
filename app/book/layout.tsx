import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment — $150 Diagnostic Fee | JW Auto Service",
  description:
    "Schedule your diagnostic appointment and pre-pay the $150 fee online. Confirms your slot. Mon–Fri 8AM–4:30PM. Japanese and domestic vehicles only.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
