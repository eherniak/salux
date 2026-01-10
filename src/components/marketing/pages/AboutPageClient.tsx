"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Award, Users2 } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Patient First",
    description: "Every decision we make prioritizes patient care, privacy, and outcomes.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation",
    description: "Modern architecture and intuitive workflows that reduce administrative overhead.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "A relentless focus on reliability, performance, and quality across the platform.",
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Collaboration",
    description: "Built for teams—providers, staff, and patients—working together with clarity.",
  },
] as const;

export default function AboutPageClient() {
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
              Building the Future of
              <span className="text-[#0066CC]"> Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600">
              We help modern practices deliver better care with secure records, streamlined workflows, and elegant patient experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Salux was created with a simple goal: reduce the time healthcare teams spend on administrative work, so they can spend more time with patients.
              </p>
              <p className="text-gray-600 mb-4">
                We built a modern platform designed for speed, clarity, and security—combining medical records, scheduling, secure file storage, and practice workflows in one place.
              </p>
              <p className="text-gray-600">
                Our roadmap continues to expand: record sharing, family history tools, and insurance verification—built with the same security-first approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                className="rounded-2xl shadow-xl"
                alt="Medical team collaborating in a modern office"
                src="https://images.unsplash.com/photo-1573165231977-3f0e27806045"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we build</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-[#0066CC] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

