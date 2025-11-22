export default function SolutionsPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-900">Solutions</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                    Connected, secure, and patient-first. Explore how Salux Systems helps you and your
                    care team work from one source of truth.
                </p>
            </header>

            {/* Solutions Grid */}
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Family Tree */}
                <article className="bg-white border shadow-sm rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-4 text-[#2E9AD2]">
                        <svg viewBox="0 0 48 48" width="40" height="40">
                            <circle cx="24" cy="10" r="5" fill="currentColor" />
                            <circle cx="12" cy="32" r="5" fill="currentColor" opacity=".9" />
                            <circle cx="36" cy="32" r="5" fill="currentColor" opacity=".9" />
                            <path
                                d="M24 15v6M24 21L12 27M24 21l12 6"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">Family Tree</h2>
                    <p className="text-gray-600">
                        Generational health view, helps identify patterns and risks.
                    </p>
                </article>

                {/* Insurance Checker */}
                <article className="bg-white border shadow-sm rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-4 text-[#2E9AD2]">
                        <svg viewBox="0 0 48 48" width="40" height="40">
                            <path
                                d="M24 6l14 6v10c0 9-6.5 14.5-14 18-7.5-3.5-14-9-14-18V12l14-6z"
                                fill="currentColor"
                                opacity=".9"
                            />
                            <path
                                d="M17 24l5 5 9-10"
                                stroke="#fff"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">Insurance Checker</h2>
                    <p className="text-gray-600">
                        Automated verification of coverage and billing accuracy.
                    </p>
                </article>

                {/* Provider Ecosystem */}
                <article className="bg-white border shadow-sm rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-4 text-[#2E9AD2]">
                        <svg viewBox="0 0 48 48" width="40" height="40">
                            <circle cx="24" cy="24" r="6" fill="currentColor" />
                            <circle cx="8" cy="16" r="4" fill="currentColor" opacity=".9" />
                            <circle cx="40" cy="16" r="4" fill="currentColor" opacity=".9" />
                            <circle cx="12" cy="38" r="4" fill="currentColor" opacity=".9" />
                            <circle cx="36" cy="38" r="4" fill="currentColor" opacity=".9" />
                            <path
                                d="M24 24L8 16M24 24l16-8M24 24l-12 14M24 24l12 14"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">Provider Ecosystem</h2>
                    <p className="text-gray-600">
                        Connects all doctors involved in a patient’s journey.
                    </p>
                </article>

                {/* Secure Cloud Infrastructure */}
                <article className="bg-white border shadow-sm rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-4 text-[#2E9AD2]">
                        <svg viewBox="0 0 48 48" width="40" height="40">
                            <path
                                d="M18 20a8 8 0 0115.6-1.6A7 7 0 0142 25a7 7 0 01-7 7H16a6 6 0 110-12h2z"
                                fill="currentColor"
                                opacity=".9"
                            />
                            <rect
                                x="19"
                                y="26"
                                width="16"
                                height="12"
                                rx="3"
                                fill="currentColor"
                            />
                            <path
                                d="M24 26v-2a4 4 0 118 0v2"
                                stroke="#fff"
                                strokeWidth="2.2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">Secure Cloud Infrastructure</h2>
                    <p className="text-gray-600">
                        Top-tier encryption, patient-controlled data sharing.
                    </p>
                </article>

                {/* Patient Empowerment */}
                <article className="bg-white border shadow-sm rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-4 text-[#2E9AD2]">
                        <svg viewBox="0 0 48 48" width="40" height="40">
                            <line
                                x1="10"
                                y1="14"
                                x2="38"
                                y2="14"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <circle cx="22" cy="14" r="4" fill="currentColor" />
                            <line
                                x1="10"
                                y1="24"
                                x2="38"
                                y2="24"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <circle cx="30" cy="24" r="4" fill="currentColor" />
                            <line
                                x1="10"
                                y1="34"
                                x2="38"
                                y2="34"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <circle cx="16" cy="34" r="4" fill="currentColor" />
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">Patient Empowerment</h2>
                    <p className="text-gray-600">
                        User-friendly dashboards, ability to control who sees what.
                    </p>
                </article>

            </section>
        </main>
    );
}
