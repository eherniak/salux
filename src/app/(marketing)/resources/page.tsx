export default function ResourcesPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">

            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-900">Resources</h1>
            </header>

            {/* Intro */}
            <section className="text-center mb-12">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">Explore Our Resources</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Browse guides, articles, and helpful tools to get the most out of{" "}
                    <strong>Salux Systems</strong>.
                </p>
            </section>

            {/* Resource Cards */}
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
                {/* Card 1 */}
                <div className="bg-white shadow-sm border rounded-xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">📘 User Guides</h3>
                    <p className="text-sm text-gray-500 mb-2">Step-by-step walkthroughs</p>
                    <p className="text-gray-700 text-sm">
                        Learn how to get started, manage your records, and share securely.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-sm border rounded-xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">▶️ Video Tutorials</h3>
                    <p className="text-sm text-gray-500 mb-2">Watch and learn</p>
                    <p className="text-gray-700 text-sm">
                        Short demos that show you exactly how to use our app features.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-sm border rounded-xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">📥 Downloads</h3>
                    <p className="text-sm text-gray-500 mb-2">Helpful documents</p>
                    <p className="text-gray-700 text-sm">
                        Access printable checklists, FAQs, and quick-start PDFs.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-sm border rounded-xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">❓ FAQs</h3>
                    <p className="text-sm text-gray-500 mb-2">Answers at a glance</p>
                    <p className="text-gray-700 text-sm">
                        Find solutions to the most common questions from our users.
                    </p>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">📄 Featured Articles</h3>

                <ul className="space-y-6">
                    <li className="bg-white border shadow-sm rounded-xl p-5">
                        <strong className="block text-lg">5 Tips to Keep Your Health Data Organized</strong>
                        <p className="text-gray-600 text-sm mt-1">
                            Simple strategies for families and caregivers.
                        </p>
                    </li>

                    <li className="bg-white border shadow-sm rounded-xl p-5">
                        <strong className="block text-lg">How We Protect Your Privacy</strong>
                        <p className="text-gray-600 text-sm mt-1">
                            Learn about our encryption and data security measures.
                        </p>
                    </li>

                    <li className="bg-white border shadow-sm rounded-xl p-5">
                        <strong className="block text-lg">Connecting with Your Provider</strong>
                        <p className="text-gray-600 text-sm mt-1">
                            Steps to share records with doctors and specialists.
                        </p>
                    </li>
                </ul>
            </section>
        </main>
    );
}
