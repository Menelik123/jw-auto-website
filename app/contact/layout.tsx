import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — JW Auto Service | Mableton, GA (678) 310-0267",
  description:
    "Call or text (678) 310-0267, or send a message. Located at 1480 Veterans Memorial Hwy SW, Suite 100, Mableton, GA 30126. Mon–Fri 8AM–5PM.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
