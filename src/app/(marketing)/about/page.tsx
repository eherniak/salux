import type { Metadata } from "next";
import AboutPageClient from "@/components/marketing/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Salux Systems and our mission to simplify healthcare management with secure, patient-first software.",
};

export default function Page() {
  return <AboutPageClient />;
}
