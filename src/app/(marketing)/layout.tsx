"use client";
import { useEffect } from "react";
import Link from "next/link";
import "./marketing.css"; // ← we'll put all the provided CSS here

export default function MarketingLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // Mobile menu toggle logic (ported from your original script)
        const mobileToggle = document.querySelector(".mobile-menu-toggle");
        const navbar = document.querySelector(".navbar");

        const toggleMenu = () => navbar?.classList.toggle("mobile-menu-active");
        const closeMenu = (e: MouseEvent) => {
            if (navbar && !navbar.contains(e.target as Node)) {
                navbar.classList.remove("mobile-menu-active");
            }
        };

        mobileToggle?.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu);
        return () => {
            mobileToggle?.removeEventListener("click", toggleMenu);
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* ---------- NAVBAR ---------- */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link href="/" className="logo-link">
                            Salux Systems
                        </Link>
                    </div>

                    <ul className="nav-menu">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle">Product</span>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/features" className="dropdown-link">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/apps-integration" className="dropdown-link">
                                        Apps &amp; Integrations
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle">Solutions</span>
                            <ul className="dropdown-menu">
                                <li className="dropdown-submenu">
                                    <Link href="/solutions-by-user" className="dropdown-link">
                                        Solutions By User
                                    </Link>
                                    <ul className="dropdown-submenu-content">
                                        <li>
                                            <Link href="/patients" className="dropdown-link">
                                                Patients
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/providers" className="dropdown-link">
                                                Providers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/caregivers" className="dropdown-link">
                                                Caregivers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/veterans-families" className="dropdown-link">
                                                Veterans &amp; Families
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu">
                                    <Link href="/solutions-by-use-case" className="dropdown-link">
                                        Solutions By Use Case
                                    </Link>
                                    <ul className="dropdown-submenu-content">
                                        <li>
                                            <Link href="/chronic-conditions" className="dropdown-link">
                                                Managing Chronic Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/multi-provider-care" className="dropdown-link">
                                                Coordinating Multi-Provider Care
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/family-health" className="dropdown-link">
                                                Family Health Planning
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/insurance-dispute" className="dropdown-link">
                                                Insurance Dispute Resolution
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link href="/pricing" className="nav-link">
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle">Resources</span>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/blog" className="dropdown-link">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="dropdown-link">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides" className="dropdown-link">
                                        Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className="dropdown-link">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/templates" className="dropdown-link">
                                        Templates
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/community" className="dropdown-link">
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/support" className="dropdown-link">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle">Other Pages</span>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/about" className="dropdown-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/enterprise" className="dropdown-link">
                                        Enterprise
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="nav-auth">
                        <Link href="/login" className="auth-link login-btn">
                            Log In
                        </Link>
                        <Link href="/register" className="auth-link signup-btn">
                            Sign Up
                        </Link>
                    </div>

                    <div className="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* ---------- MAIN CONTENT ---------- */}
            <main className="flex-1">{children}</main>

            {/* ---------- FOOTER ---------- */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="footer-column">
                            <h4 className="footer-title">Salux Systems</h4>
                            <p className="footer-description">
                                Simplifying healthcare coordination for patients, providers, and
                                families.
                            </p>
                            <div className="footer-social">
                                <Link href="#" className="social-link">
                                    LinkedIn
                                </Link>
                                <Link href="#" className="social-link">
                                    Twitter
                                </Link>
                                <Link href="#" className="social-link">
                                    Facebook
                                </Link>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Product</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link href="/features" className="footer-link">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/apps-integration" className="footer-link">
                                        Apps &amp; Integrations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing" className="footer-link">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/enterprise" className="footer-link">
                                        Enterprise
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Solutions</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link href="/patients" className="footer-link">
                                        For Patients
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers" className="footer-link">
                                        For Providers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/caregivers" className="footer-link">
                                        For Caregivers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/veterans-families" className="footer-link">
                                        Veterans &amp; Families
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Resources</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link href="/blog" className="footer-link">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides" className="footer-link">
                                        Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className="footer-link">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/support" className="footer-link">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Company</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link href="/about" className="footer-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="footer-link">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="footer-link">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/community" className="footer-link">
                                        Community
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                            <p>© 2025 Salux Systems. All rights reserved.</p>
                        </div>
                        <div className="footer-bottom-right">
                            <Link href="/privacy" className="footer-legal-link">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="footer-legal-link">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="footer-legal-link">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
