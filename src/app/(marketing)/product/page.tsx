export default function PricingPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-900">Pricing</h1>
            </header>

            {/* Intro */}
            <section className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Simple, predictable pricing
                </h2>
                <p className="text-gray-600">
                    Pick a base plan and add people as you grow. Every additional user is just{" "}
                    <strong>$4.99/month.</strong>
                </p>
            </section>

            {/* Base Plans */}
            <section className="grid gap-8 md:grid-cols-3 mb-16">
                {/* Basic */}
                <div className="bg-white shadow-sm p-6 rounded-xl border text-center">
                    <h3 className="text-xl font-semibold mb-2">Basic</h3>
                    <p className="text-2xl font-bold mb-1">$4.99 / month</p>
                    <p className="text-gray-600 mb-4">For one person.</p>
                    <ul className="text-gray-700 text-sm space-y-2 mb-6">
                        <li>1 included user</li>
                        <li>$4.99 per extra user</li>
                    </ul>
                    <button className="w-full bg-[#0070f3] text-white py-2 rounded-md font-medium hover:bg-[#0059c1] transition">
                        Choose Basic
                    </button>
                </div>

                {/* Couple */}
                <div className="bg-white shadow-sm p-6 rounded-xl border text-center">
                    <h3 className="text-xl font-semibold mb-2">Couple</h3>
                    <p className="text-2xl font-bold mb-1">$7.99 / month</p>
                    <p className="text-gray-600 mb-4">
                        For two people <strong>(save ~20%)</strong>.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-2 mb-6">
                        <li>2 included users</li>
                        <li>$4.99 per extra user</li>
                    </ul>
                    <button className="w-full border-2 border-[#0070f3] text-[#0070f3] py-2 rounded-md font-medium hover:bg-[#e6f0ff] transition">
                        Choose Couple
                    </button>
                </div>

                {/* Family */}
                <div className="bg-white shadow-sm p-6 rounded-xl border text-center">
                    <h3 className="text-xl font-semibold mb-2">Family</h3>
                    <p className="text-2xl font-bold mb-1">$14.99 / month</p>
                    <p className="text-gray-600 mb-4">Up to 4 users included.</p>
                    <ul className="text-gray-700 text-sm space-y-2 mb-6">
                        <li>4 included users</li>
                        <li>$4.99 per extra user</li>
                    </ul>
                    <button className="w-full bg-[#0070f3] text-white py-2 rounded-md font-medium hover:bg-[#0059c1] transition">
                        Choose Family
                    </button>
                </div>
            </section>

            {/* Summary */}
            <section className="mb-16">
                <div className="bg-white shadow-sm border p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-1">Summary of How It Works</h3>
                    <p className="text-gray-600 mb-4">Clear, scalable pricing</p>

                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li><strong>Basic</strong> = $4.99/month for a single person.</li>
                        <li><strong>Couple</strong> = $7.99/month for two people.</li>
                        <li><strong>Family</strong> = $14.99/month for up to 4 users.</li>
                        <li>Add unlimited users at <strong>$4.99 each</strong>.</li>
                        <li>Predictable and fair for any size household.</li>
                        <li>Designed for families & caregiving networks.</li>
                    </ul>
                </div>
            </section>

            {/* Estimator */}
            <section>
                <div className="bg-white shadow-sm border p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-1">Estimate Your Monthly Price</h3>
                    <p className="text-gray-600 mb-4">Choose a plan and adjust people</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Plan</label>
                            <select className="w-full border rounded-md px-3 py-2">
                                <option value="basic">Basic ($4.99)</option>
                                <option value="couple">Couple ($7.99)</option>
                                <option value="family">Family ($14.99)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">
                                People: <span id="people-count">1</span>
                            </label>

                            <input
                                id="people"
                                type="range"
                                min="1"
                                max="12"
                                defaultValue="1"
                                className="w-full"
                                onInput={(e) =>
                                    ((document.getElementById("people-count") as HTMLElement).innerText =
                                        (e.target as HTMLInputElement).value)
                                }
                            />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
