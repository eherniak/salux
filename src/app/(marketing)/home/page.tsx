// src/app/(marketing)/home/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-20 flex flex-col lg:flex-row items-center gap-20">
                {/* Text */}
                <section>
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 mb-4">
            Salux Systems · Patient-first health records
          </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                        One record. For life.
                        <br />
                        <span className="text-sky-700">
              Own your health journey.
            </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8">
                        Connect your records, build your family health tree, and verify coverage
                        in one secure, patient-first platform built for families and providers.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        >
                            Get started
                        </Link>
                        <Link
                            href="/waitlist"
                            className="inline-flex items-center justify-center rounded-lg border border-sky-200 bg-white px-5 py-2.5 text-sm font-medium text-sky-800 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        >
                            Join the waitlist
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <ul className="mt-10 flex flex-wrap gap-4 text-sm text-slate-500">
                        <li className="inline-flex items-center gap-2">
                            <span className="text-xl">🛡️</span> HIPAA-aligned security
                        </li>
                        <li className="inline-flex items-center gap-2">
                            <span className="text-xl">🔒</span> End-to-end encryption
                        </li>
                        <li className="inline-flex items-center gap-2">
                            <span className="text-xl">🎖️</span> Built with clinicians
                        </li>
                    </ul>
                </section>

                {/* Visual */}
                <section className="relative">
                    <div className="relative mx-auto max-w-md">
                        <div className="rounded-3xl border border-slate-200 bg-white/90 shadow-xl shadow-slate-900/5 p-4 sm:p-6 backdrop-blur">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-sky-700">
                                        Connected care
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        Providers, pharmacies, family — all in one view.
                                    </p>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                  Live sync
                </span>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                                    <div>
                                        <p className="font-medium text-slate-900">Family Tree</p>
                                        <p className="text-xs text-slate-500">3 generations linked</p>
                                    </div>
                                    <span className="text-xs font-medium text-emerald-700">
                    Risk insights
                  </span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                                    <div>
                                        <p className="font-medium text-slate-900">Insurance checker</p>
                                        <p className="text-xs text-slate-500">
                                            Coverage confirmed · 12 providers
                                        </p>
                                    </div>
                                    <span className="text-xs font-medium text-sky-700">
                    Real-time
                  </span>
                                </div>

                                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 py-3">
                                    <p className="text-xs font-medium text-slate-500 mb-1">
                                        Upcoming
                                    </p>
                                    <p className="text-sm text-slate-700">
                                        AI-assisted visit prep and eligibility verification.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* background shape */}
                        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-white to-emerald-50" />
                    </div>
                </section>
            </div>
        </main>
    );
}
