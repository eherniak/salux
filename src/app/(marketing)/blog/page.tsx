"use client";

import React, { useState } from "react";

export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Product", "Guides", "Privacy", "News"];

    return (
        <main className="min-h-screen bg-[#fafafa] text-[#222]">
            <div className="max-w-3xl mx-auto mt-16 px-4">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-semibold">Blog</h1>
                </header>

                {/* Search */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search posts (e.g., privacy, records)"
                        className="w-full border border-gray-300 rounded-lg p-3 text-[1rem] bg-white"
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition ${
                                activeCategory === cat
                                    ? "bg-[#222] text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                <div className="bg-white rounded-xl shadow p-5 mb-10 hover:shadow-lg transition">
                    <img
                        src="/assets/img/blog-featured.jpg"
                        alt="Featured"
                        className="w-full rounded-lg mb-4"
                    />
                    <div className="text-sm text-gray-500 mb-1">
                        Product • Aug 15, 2025
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                        Introducing Secure Share Links
                    </h2>
                    <p className="mb-3">
                        Share records with providers using time-limited links and granular
                        access controls.
                    </p>

                    <div className="flex gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600">
              security
            </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600">
              product
            </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600">
              sharing
            </span>
                    </div>

                    <button className="border border-[#222] px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                        Read More
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    <BlogCard
                        img="/assets/img/blog-1.jpg"
                        meta="Guides • Aug 2, 2025"
                        title="How to Import Your Medical Records"
                        desc="Simple steps to bring PDFs, labs, and visit summaries into Salux."
                        tags={["guides", "onboarding"]}
                    />
                    <BlogCard
                        img="/assets/img/blog-2.jpg"
                        meta="Privacy • Jul 20, 2025"
                        title="Our Approach to Data Transparency"
                        desc="What data we store, how it’s encrypted, and how you control it."
                        tags={["privacy", "security"]}
                    />
                    <BlogCard
                        img="/assets/img/blog-3.jpg"
                        meta="News • Jul 5, 2025"
                        title="Salux Wins Patient Safety Award"
                        desc="Recognizing our work helping families manage complex care."
                        tags={["news", "awards"]}
                    />
                    <BlogCard
                        img="/assets/img/blog-4.jpg"
                        meta="Product • Jun 21, 2025"
                        title="Family Profiles: Care for Everyone"
                        desc="Create profiles for children and aging parents, and switch in a tap."
                        tags={["product", "families"]}
                    />
                </div>

                {/* Pager */}
                <div className="flex justify-center gap-4 my-14">
                    <button
                        disabled
                        className="border border-[#222] px-4 py-2 rounded-lg text-sm opacity-50 cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button className="bg-[#222] text-white px-4 py-2 rounded-lg text-sm hover:bg-black">
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
}

/* ----------------------------------------------
   Blog Card Component
---------------------------------------------- */

interface BlogCardProps {
    img: string;
    meta: string;
    title: string;
    desc: string;
    tags: string[];
}

function BlogCard({ img, meta, title, desc, tags }: BlogCardProps) {
    return (
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <img src={img} alt="Post cover" className="w-full rounded-lg mb-4" />

            <div className="text-sm text-gray-500 mb-1">{meta}</div>

            <h2 className="text-lg font-semibold mb-2">{title}</h2>

            <p className="mb-3 text-gray-700">{desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600"
                    >
            {tag}
          </span>
                ))}
            </div>

            <button className="border border-[#222] px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                Read More
            </button>
        </div>
    );
}
