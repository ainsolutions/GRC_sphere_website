"use client"

import { Linkedin, Twitter, Globe, Youtube } from "lucide-react"

export const SocialMediaLinks = () => {
    return (
        <div className="pt-4 border-t border-white/10">
            <p className="text-white font-semibold mb-3">Follow Us</p>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/observeri-technologies" target="_blank" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/observeritech" target="_blank" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@ObserveriTechnologies" target="_blank" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                    <Youtube className="w-5 h-5" />
                </a>
                {/* <a href="/" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                    <Globe className="w-5 h-5" />
                </a> */}
            </div>
        </div>
    );
}