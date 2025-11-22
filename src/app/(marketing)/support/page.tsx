export default function SupportPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-3xl font-semibold text-gray-900">Support</h1>
            </header>

            <section className="bg-white border shadow-sm rounded-xl p-8">
                {/* Contact Header */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">Contact Us</h2>
                <p className="text-gray-600 mb-6">We’re here to help</p>

                {/* Support Form */}
                <form className="space-y-6">
                    {/* Name */}
                    <label className="block">
                        <span className="font-medium text-gray-800">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Jane Doe"
                            required
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </label>

                    {/* Email */}
                    <label className="block">
                        <span className="font-medium text-gray-800">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </label>

                    {/* Subject */}
                    <label className="block">
                        <span className="font-medium text-gray-800">Subject</span>
                        <input
                            type="text"
                            name="subject"
                            placeholder="e.g., Billing question"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </label>

                    {/* Message */}
                    <label className="block">
                        <span className="font-medium text-gray-800">Message</span>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Type your message here..."
                            required
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#0070f3] text-white py-3 rounded-md font-medium hover:bg-[#0059c1] transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Other Contact Methods */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-2">Other ways to reach us</h3>

                    <p className="text-gray-700 mb-1">
                        Email:{" "}
                        <a
                            href="mailto:support@example.com"
                            className="text-blue-600 hover:underline"
                        >
                            support@example.com
                        </a>
                    </p>

                    <p className="text-gray-700 mb-1">
                        Phone:{" "}
                        <a href="tel:+18001234567" className="text-blue-600 hover:underline">
                            +1 (800) 123-4567
                        </a>
                    </p>

                    <p className="text-gray-700">Address: 123 Main Street, Boulder, CO</p>
                </div>
            </section>
        </main>
    );
}
