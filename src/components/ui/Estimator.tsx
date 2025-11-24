"use client";

import { useState } from "react";

export default function Estimator() {
    const [plan, setPlan] = useState("basic");
    const [people, setPeople] = useState(1);

    return (
        <div className="bg-white shadow-sm border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-1">Estimate Your Monthly Price</h3>
            <p className="text-gray-600 mb-4">Choose a plan and adjust people</p>

            <form className="space-y-4">
                {/* Plan Selector */}
                <div>
                    <label className="block font-medium mb-1">Plan</label>
                    <select
                        className="w-full border rounded-md px-3 py-2"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                    >
                        <option value="basic">Basic ($4.99)</option>
                        <option value="couple">Couple ($7.99)</option>
                        <option value="family">Family ($14.99)</option>
                    </select>
                </div>

                {/* People Slider */}
                <div>
                    <label className="block font-medium mb-1">
                        People: <span>{people}</span>
                    </label>

                    <input
                        type="range"
                        min="1"
                        max="12"
                        value={people}
                        onChange={(e) => setPeople(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
            </form>
        </div>
    );
}
