"use client";

import React from "react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-3xl font-bold mb-1">About Us</h1>
                <h2 className="text-gray-500 text-lg mb-6">Salux Systems</h2>

                <p className="mb-4">
                    At <strong>Salux Systems</strong>, we believe that managing your health should be
                    simple, secure, and truly yours.
                </p>

                <p className="mb-4">
                    Born from frustration with fragmented medical records and outdated systems, we
                    created a platform that puts people back in control of their health data. Whether
                    you're a patient, parent, caregiver, or provider, our solution bridges the gaps
                    between visits, doctors, and systems — helping you organize, access, and share
                    your medical history with ease.
                </p>

                <p className="mb-4">
                    We built this for families who juggle multiple providers. For chronic warriors
                    tracking every lab result. For parents caring for children and aging loved ones.
                    And for anyone who's ever had to repeat their story in a waiting room, wishing
                    their records just... followed them.
                </p>

                <p className="mb-0">
                    With advanced security, a beautifully simple interface, and a commitment to data
                    transparency, our mission is to turn confusion into clarity — and disconnected
                    files into connected care.
                </p>
            </div>
        </main>
    );
}
