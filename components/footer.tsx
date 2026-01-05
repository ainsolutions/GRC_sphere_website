"use client"
import Link from "next/link"
import { SocialMediaLinks } from "./social-media-links";
import { Logo } from "./ui/Logo/logo";

export const Footer = () => {
    return (
        <footer className="bg-white/5 backdrop-blur-sm py-12 px-6 border-t border-border" >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <Logo
                                width={50}
                                height={50}
                                name="GRC Sphere"
                            />
                        </Link>
                        <p className="text-white text-sm">
                            Comprehensive cybersecurity governance, risk, and compliance solutions
                        </p>
                        <SocialMediaLinks />
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products/cybersecurity-grc" className="text-white hover:text-primary text-sm">
                                    Cybersecurity GRC
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/regulatory-compliance"
                                    className="text-white hover:text-primary text-sm"
                                >
                                    Regulatory Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services/cybersecurity-services"
                                    className="text-white hover:text-primary text-sm"
                                >
                                    Cybersecurity Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white hover:text-primary text-sm">
                                    All Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blogs" className="text-white hover:text-primary text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-primary text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-white text-sm">
                    <p>&copy; 2025 GRC Sphere. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
}