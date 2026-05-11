import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — John Wanarski & JW Auto Service | Mableton, GA",
  description:
    "35+ years in the industry. John Wanarski has built Mableton's most trusted auto repair shop on honesty, OEM parts, and solving problems other shops can't.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
