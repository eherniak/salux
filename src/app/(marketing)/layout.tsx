import * as React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: {
    default: "Salux Systems",
    template: "%s | Salux Systems",
  },
  description:
    "Salux is a secure, cloud-based platform that helps healthcare teams manage records, streamline scheduling, and reduce administrative work.",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
