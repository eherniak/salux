import Image from "next/image";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] text-[#333]">
            {/* Header */}
            <header className="bg-white py-6 shadow-sm text-center">
                <h1 className="text-3xl font-semibold">Community</h1>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-10">
                {/* Intro */}
                <section className="text-center mb-14">
                    <h2 className="text-2xl font-semibold mb-2">Our Community</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Salux Systems is trusted by thousands of patients, families,
                        and providers worldwide. Here’s a quick look at our growing community.
                    </p>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                    <div className="bg-white rounded-lg p-6 shadow text-center">
                        <h3 className="text-2xl font-semibold text-blue-600">25,000+</h3>
                        <p className="text-gray-500 text-sm mb-2">Active Users</p>
                        <p className="text-gray-600">
                            Patients and caregivers organizing their health daily.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow text-center">
                        <h3 className="text-2xl font-semibold text-blue-600">3,200+</h3>
                        <p className="text-gray-500 text-sm mb-2">Providers Connected</p>
                        <p className="text-gray-600">
                            Hospitals, clinics, and private practices across specialties.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow text-center">
                        <h3 className="text-2xl font-semibold text-blue-600">95%</h3>
                        <p className="text-gray-500 text-sm mb-2">Satisfaction Rate</p>
                        <p className="text-gray-600">
                            Our users report easier, faster, and safer access to their records.
                        </p>
                    </div>
                </section>

                {/* Trending Providers */}
                <section className="mb-14">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h3 className="text-xl font-semibold">Trending Providers</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Most active on Salux this month
                        </p>

                        <ul className="space-y-6">
                            {/* Provider 1 */}
                            <li className="flex items-center gap-4">
                                <Image
                                    src="/assets/img/provider1.jpg"
                                    width={60}
                                    height={60}
                                    alt="Provider"
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold">Boulder Family Medicine</h4>
                                    <p className="text-gray-500 text-sm">
                                        General Practice • 1,200+ shared records
                                    </p>
                                </div>
                            </li>

                            {/* Provider 2 */}
                            <li className="flex items-center gap-4">
                                <Image
                                    src="/assets/img/provider2.jpg"
                                    width={60}
                                    height={60}
                                    alt="Provider"
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold">Denver Children’s Hospital</h4>
                                    <p className="text-gray-500 text-sm">
                                        Pediatrics • 980+ shared records
                                    </p>
                                </div>
                            </li>

                            {/* Provider 3 */}
                            <li className="flex items-center gap-4">
                                <Image
                                    src="/assets/img/provider3.jpg"
                                    width={60}
                                    height={60}
                                    alt="Provider"
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold">Rocky Mountain Oncology</h4>
                                    <p className="text-gray-500 text-sm">
                                        Oncology • 870+ shared records
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center mt-10">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg shadow transition">
                        Join Our Community
                    </button>
                </section>
            </main>
        </div>
    );
}
