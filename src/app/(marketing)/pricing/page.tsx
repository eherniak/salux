import type { Metadata } from "next";
import PricingPageClient from "@/components/marketing/pages/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Elegant, transparent pricing for Salux Systems. Start with a 7-day free trial. Upgrade anytime as your practice grows.",
};

export default function Page() {
  return <PricingPageClient />;
}
