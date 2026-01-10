import type { Metadata } from "next";
import FeaturesPageClient from "@/components/marketing/pages/FeaturesPageClient";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the powerful features of Salux Systems designed for modern healthcare practices.",
};

export default function Page() {
  return <FeaturesPageClient />;
}
