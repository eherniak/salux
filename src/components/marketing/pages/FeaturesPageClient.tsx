"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  Users,
  BarChart3,
  Shield,
  Clock,
  CreditCard,
  MessageSquare,
  Bell,
  Cloud,
  Smartphone,
  Lock,
  KeyRound,
  FileUp,
  Network,
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Scheduling",
    description: "Intelligent appointment booking with reminders, conflict detection, and team-aware workflows.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Electronic Medical Records",
    description: "Structured patient histories with secure attachments—easy to find, easy to trust.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Patient Portal",
    description: "Self-service access for appointments, documents, and secure communication.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics & Reporting",
    description: "Practice insights and reporting to help your team make faster, better decisions.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Billing & Payments",
    description: "Streamlined invoicing and payments—designed to fit modern clinic workflows.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Secure Messaging",
    description: "Private, compliant communication between staff and patients.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Smart Notifications",
    description: "Automated alerts for appointments, tasks, and important updates.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Secure Cloud Storage",
    description: "Store documents and images safely with fast access and controlled permissions.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: <FileUp className="w-8 h-8" />,
    title: "Direct-to-Cloud Uploads",
    description: "Optimized uploads using presigned URLs—faster, safer, and scalable.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Role-Based Access",
    description: "Granular permissions and access controls for staff and providers.",
    color: "bg-slate-50 text-slate-600",
  },
  {
    icon: <KeyRound className="w-8 h-8" />,
    title: "Secure Authentication",
    description: "Modern session security with strong password hashing and optional multi-factor.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Compliance-Ready Security",
    description: "Security by design, encryption in transit, and strong safeguards for sensitive data.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "API Access",
    description: "Connect your tools with an API for custom integrations and workflows.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Operational Efficiency",
    description: "Fast, cloud-native performance designed for scalable teams and busy clinics.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-Friendly",
    description: "A clean, responsive experience that works beautifully on any device.",
    color: "bg-lime-50 text-lime-600",
  },
] as const;

export default function FeaturesPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-[#0066CC]"> Modern Practices</span>
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to run your practice efficiently—built on modern infrastructure, designed for secure workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0066CC] hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      
    </>
  );
}

