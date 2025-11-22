export default function FAQPage() {
    const sections = [
        {
            q: "What is Salux Systems?",
            a: "Salux Systems is a patient-centric health records platform that securely unifies your lifetime medical history in one place. It connects your doctors, verifies billing transparently, and gives you the tools to understand and control your health journey.",
        },
        {
            q: "Who can use Salux Systems — patients, providers, or both?",
            a: "Both. Patients use Salux Systems to access, manage, and share their records, while providers benefit from a connected ecosystem that reduces paperwork, improves collaboration, and ensures accurate health data across the care team.",
        },
        {
            q: "How is Salux different from other patient portals or EMR systems?",
            a: "Unlike traditional portals tied to a single clinic, Salux Systems follows the patient. It consolidates records from all providers, adds features like the Family Tree, and supports insurance transparency — creating a complete, patient-controlled record.",
        },
        {
            q: "Is Salux Systems HIPAA compliant?",
            a: "Yes. Salux Systems is designed to meet HIPAA requirements and uses enterprise-grade encryption. Your information is stored and transmitted under strict security standards aligned with healthcare best practices.",
        },
        {
            q: "Who owns the health records in Salux Systems?",
            a: "You do. Salux Systems is built on the principle of patient empowerment. You control who can access your information, and you can revoke access at any time.",
        },
        {
            q: "How does the Family Tree feature help me?",
            a: "The Family Tree provides a generational view of health data, helping identify hereditary risks and preventive opportunities. It’s especially useful for conditions with known genetic components.",
        },
        {
            q: "How does Salux empower patients to control their data?",
            a: "Salux puts patients in control. You decide who can view your records, for how long, and what they can see. You can share specific documents or full histories, set expirations, and revoke access anytime. Every exchange is logged for transparency.",
        },
        {
            q: "Can Salux connect with my existing doctors?",
            a: "Yes. Salux Systems integrates across providers, creating a shared ecosystem where your doctors can securely access and update your records — improving communication and reducing duplicate tests.",
        },
        {
            q: "How secure is my data?",
            a: "All records are encrypted in transit and at rest on a HIPAA-aligned cloud infrastructure. Patients control access permissions, and every data exchange is logged for transparency.",
        },
        {
            q: "How much does Salux Systems cost?",
            a: "Salux Systems will be available via a subscription model for individuals, families, and providers. Employer or insurance coverage may be available depending on your plan. Pricing details will be shared at launch.",
        },
    ];

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            {/* Heading */}
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-[#155E8C] mb-2">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-2xl">
                    Clear answers for patients and providers about how Salux Systems works, how your data is protected, and how we add value to your care.
                </p>
            </header>

            {/* FAQ */}
            <section className="space-y-4">
                {sections.map((item, i) => (
                    <details
                        key={i}
                        className="bg-white border border-[#e8edf3] rounded-xl shadow-sm overflow-hidden"
                        open={i === 0}
                    >
                        <summary className="cursor-pointer px-5 py-4 grid grid-cols-[1fr_auto] items-center">
                            <h2 className="text-lg font-medium text-[#155E8C]">{item.q}</h2>

                            {/* Chevron */}
                            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-[#2E9AD2] to-[#155E8C] flex items-center justify-center text-white">
                ▼
              </span>
                        </summary>

                        <div className="px-5 pb-4 border-t border-dashed border-[#e8edf3]">
                            <p className="text-gray-700 mt-3">{item.a}</p>
                        </div>
                    </details>
                ))}
            </section>

            <footer className="text-gray-500 text-sm mt-12">
                © 2025 Salux Systems. All rights reserved.
            </footer>
        </main>
    );
}
