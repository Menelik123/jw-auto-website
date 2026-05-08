import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews — 4.8 Stars on Google | JW Auto Service Mableton",
  description:
    "89 verified Google reviews from real customers. See what Mableton drivers say about JW Auto Service's AC repair and electrical diagnostics.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
