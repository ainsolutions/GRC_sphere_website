"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowLeft,
  CheckCircle,
  Zap,
  BarChart3,
  Users,
  Globe,
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  Activity,
  Cpu,
  Bot,
  Radar,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * NOTE: Place your screenshots here:
 *   public/products/cybersecurity-grc/
 * Files: image.png, image2.png, image3.png, image4.png, image5.png,
 *        image6.png, image7.png, image8.png, image9.png, imagea.png
 */

// ----------------------- Top navigation (kept styling) -----------------------
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              GRC Sphere
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-cyan-400 font-semibold">
              Products
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

// ---------------------------- Types & data model -----------------------------
type Section = { heading: string; bullets?: string[]; body?: string[] };

type Module = {
  key: string;
  title: string;
  intro: string;
  sections: Section[];
  icon: LucideIcon;
  gradient?: string;
  images?: string[]; // filenames under /public/products/cybersecurity-grc/
};

// ---------------------------- Module descriptions ----------------------------
const MODULES: Module[] = [
  {
    key: "tprm",
    title: "Third-Party Risk Management (TPRM)",
    icon: Users,
    gradient: "from-cyan-400 to-blue-500",
    intro:
      "Identify, assess, monitor and mitigate risks from vendors, suppliers, partners and contractors across their lifecycle.",
    images: ["image.png"],
    sections: [
      {
        heading: "Why TPRM is Important",
        bullets: [
          "Increased exposure to breaches, cyber threats and non-compliance",
          "Regulators hold you accountable for third-party failures",
          "Reputational damage when vendors fail",
          "Operational disruption from supply-chain issues",
        ],
      },
      {
        heading: "Key Components",
        bullets: [
          "Identification of all third parties and inherent risks",
          "Assessment of security posture and risk level",
          "Continuous monitoring for changes and new risks",
          "Mitigation and control implementation",
          "Up-front due diligence",
          "Secure off-boarding without introducing new risks",
        ],
      },
      {
        heading: "Benefits",
        bullets: ["Protects sensitive data", "Ensures regulatory compliance", "Enhances resilience", "Improves vendor performance"],
      },
    ],
  },
  {
    key: "cyber-risk",
    title: "Cybersecurity Risk Management",
    icon: Lock,
    gradient: "from-blue-500 to-indigo-500",
    intro: "ISO 27001, NIST and FAIR-aligned, AI-assisted engine to identify, analyze, evaluate and treat cyber risks.",
    images: ["image2.png"],
    sections: [
      {
        heading: "Key Stages",
        bullets: [
          "Identify assets (hardware, software, data, networks, apps)",
          "Identify risks (threats & vulnerabilities)",
          "Analyze & evaluate likelihood and impact",
          "Mitigate via controls (access, data protection, hardening, IR plans, patching, training)",
          "Monitor & review continuously",
        ],
      },
      {
        heading: "Why It Matters",
        bullets: ["Business continuity", "Reduced financial/reputation impact", "Regulatory compliance", "Proactive defense & smarter investment"],
      },
    ],
  },
  {
    key: "assessment",
    title: "Cybersecurity Assessment",
    icon: Eye,
    gradient: "from-indigo-500 to-purple-500",
    intro:
      "Systematic evaluation of IT systems, controls and user practices to surface vulnerabilities, threats and risks.",
    images: ["image3.png"],
    sections: [
      {
        heading: "Key Aspects",
        bullets: [
          "Vulnerability identification",
          "Threat analysis (e.g., ransomware, phishing)",
          "Risk prioritization",
          "Control effectiveness review",
          "Data & asset focus",
          "Actionable recommendations",
        ],
      },
      {
        heading: "Methods",
        bullets: ["Vulnerability scans", "Penetration testing", "Policy & procedure reviews", "Compliance checks (e.g., NIST, ISO 27001)"],
      },
    ],
  },
  {
    key: "is-compliance",
    title: "Information Security Compliance",
    icon: FileText,
    gradient: "from-purple-500 to-pink-500",
    intro: "Policies, controls and monitoring to ensure systems and data adhere to laws, regulations, standards and internal policy.",
    images: ["image4.png"],
    sections: [
      {
        heading: "Why It’s Crucial",
        bullets: ["Avoid legal/financial penalties", "Protect reputation and trust", "Safeguard sensitive data", "Improve efficiency", "Maintain market access"],
      },
    ],
  },
  {
    key: "policy",
    title: "Policy Management",
    icon: Activity,
    gradient: "from-emerald-500 to-teal-500",
    intro: "Create, approve, distribute, update and track policies with ownership, versioning and attestation.",
    images: ["image5.png"],
    sections: [
      {
        heading: "Key Components",
        bullets: [
          "Creation & approval workflows with clear ownership",
          "Central, searchable policy library",
          "Tags/categories for discoverability",
          "Scheduled reviews, updates and version control",
          "Read-and-understand tracking & reporting",
        ],
      },
      {
        heading: "Why It Matters",
        bullets: ["Ensures compliance", "Mitigates risk", "Boosts efficiency & clarity", "Improves adaptability and transparency"],
      },
    ],
  },
  {
    key: "vuln-tracking",
    title: "Vulnerability Tracking",
    icon: Radar,
    gradient: "from-amber-500 to-red-500",
    intro: "Continuous identification, prioritization, remediation and verification of weaknesses across the estate.",
    images: ["image6.png"],
    sections: [
      {
        heading: "What It Entails",
        bullets: [
          "Identification via scans and assessments",
          "Assessment & prioritization using severity and threat intel",
          "Remediation (patching, configuration, controls)",
          "Verification through re-scans",
          "Reporting on risk posture and program effectiveness",
        ],
      },
      {
        heading: "Why It’s Important",
        bullets: ["Reduces breach likelihood", "Improves security posture", "Supports compliance", "Drives operational efficiency"],
      },
    ],
  },
  {
    key: "incidents",
    title: "Risk & Incident Management",
    icon: AlertTriangle,
    gradient: "from-rose-500 to-fuchsia-500",
    intro: "Identify, log, investigate, resolve and learn from events that impact operations, safety or IT services.",
    images: ["image7.png"],
    sections: [
      {
        heading: "Key Components & Goals",
        bullets: [
          "Identification & reporting of incidents",
          "Right-sized investigations and root cause analysis",
          "Resolution & service restoration",
          "Corrective & preventive actions",
          "Trend analysis and continual improvement",
        ],
      },
    ],
  },
  {
    key: "tech-risk",
    title: "Technology Risk Management",
    icon: Cpu,
    gradient: "from-sky-500 to-cyan-500",
    intro: "Identify, assess, mitigate and monitor risks across IT systems, digital assets and tech-dependent operations.",
    images: ["image8.png"],
    sections: [
      { heading: "Key Aspects", bullets: ["Identification", "Assessment", "Mitigation", "Monitoring"] },
      {
        heading: "Examples of Risks",
        bullets: [
          "Cybersecurity threats (breach, ransomware)",
          "System failures and outages",
          "Data loss or corruption",
          "Compliance violations (e.g., GDPR/CCPA)",
          "Third-party/legacy system risks",
        ],
      },
    ],
  },
  {
    key: "ai",
    title: "AI Predictive Analysis & GRC Assistant",
    icon: Bot,
    gradient: "from-cyan-400 to-purple-500",
    intro: "ML-powered predictions to prioritize remediation and an always-on assistant for cyber teams with expert prompts.",
    images: ["image9.png", "imagea.png"],
    sections: [
      {
        heading: "What It Delivers",
        bullets: [
          "Prioritization based on risk, findings, vulnerability & incident performance",
          "Confidence indicators on governance, risk and compliance",
          "24/7 AI GRC assistant tailored to your organization",
        ],
      },
    ],
  },
];

// ------------------------------ UI Components -------------------------------
function ModuleCard({ module, isOpen, onToggle }: { module: Module; isOpen: boolean; onToggle: () => void }) {
  const preview = module.images?.[0];

  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
      <CardHeader className="pb-3">
        {/* Preview screenshot */}
        {preview && (
          <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={`/products/cybersecurirty-grc/${preview}`}
              alt={`${module.title} preview screenshot`}
              width={1280}
              height={720}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        )}

        {/* Icon + titles */}
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-r ${
            module.gradient ?? "from-cyan-400 to-blue-500"
          } flex items-center justify-center mb-4`}
        >
          <module.icon className="w-7 h-7 text-white" />
        </div>
        <CardTitle className="text-2xl text-white">{module.title}</CardTitle>
        <CardDescription className="text-gray-300">{module.intro}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Expanded details */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[2000px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {/* Additional screenshots (if any) */}
            {module.images && module.images.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {module.images.slice(1).map((img, i) => (
                  <a
                    key={img}
                    href={`/products/cybersecurirty-grc/${img}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Image
                      src={`/products/cybersecurirty-grc/${img}`}
                      alt={`${module.title} screenshot ${i + 2}`}
                      width={1024}
                      height={640}
                      className="w-full h-auto rounded-lg border border-white/10 group-hover:opacity-90 transition"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </a>
                ))}
              </div>
            )}

            {/* Sections */}
            {module.sections.map((s, idx) => (
              <div key={idx} className="rounded-lg border border-white/10 p-4">
                <h4 className="text-white font-semibold mb-2">{s.heading}</h4>
                {s.body?.map((p, j) => (
                  <p key={j} className="text-gray-300">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-2 space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onToggle}
          className={`w-full bg-gradient-to-r ${
            module.gradient ?? "from-cyan-500 to-blue-500"
          } hover:opacity-90 text-white border-0`}
        >
          {isOpen ? "Hide details" : "View full module details"}
        </Button>
      </CardContent>
    </Card>
  );
}

// --------------------------------- Page -------------------------------------
export default function CybersecurityGRCPage() {
  // stabilize animated dots to avoid hydration flicker
  const [dots] = useState(() =>
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 2}s`,
    }))
  );

  const [openModuleKey, setOpenModuleKey] = useState<string | null>(null);

  const capabilities = [
    {
      icon: Lock,
      title: "Risk Assessment",
      description: "Comprehensive risk identification, analysis, and mitigation strategies",
    },
    {
      icon: Eye,
      title: "Compliance Monitoring",
      description: "Real-time monitoring of compliance status across all frameworks",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Automated incident detection, response, and recovery workflows",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics with customizable dashboards and reports",
    },
  ];

  const impact = [
    { label: "Faster Compliance", value: "↑ 70%", icon: BarChart3 },
    { label: "Risk Reduction", value: "↓ 85%", icon: Zap },
    { label: "Coverage", value: "24/7", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          {dots.map((d, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"
              style={{
                left: d.left,
                top: d.top,
                width: `${d.size}px`,
                height: `${d.size}px`,
                animationDelay: d.delay,
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          {/* Hero */}
          <div className="text-center mb-14">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybersecurity GRC
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive governance, risk and compliance platform built for the modern threat landscape —
              combining frameworks like ISO 27001/NIST/FAIR with automation and AI-powered insights across risk,
              compliance, assessments, policies, vulnerabilities, incidents and technology risk.
            </p>
          </div>

          {/* Impact metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {impact.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center gap-4"
                >
                  <Icon className="w-7 h-7 text-cyan-400" />
                  <div>
                    <div className="text-2xl font-semibold text-white">{m.value}</div>
                    <div className="text-sm text-gray-300">{m.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Capabilities (kept) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {cap.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Modules */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="w-8 h-8 text-cyan-400 mr-3" />
              Modules
            </h2>

            <div className="columns-1 lg:columns-2 gap-8">
              {MODULES.map((m) => (
                <div key={m.key} className="break-inside-avoid mb-8">
                  <ModuleCard
                    module={m}
                    isOpen={openModuleKey === m.key}
                    onToggle={() =>
                      setOpenModuleKey((prev) => (prev === m.key ? null : m.key))
                    }
                  />
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12 mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to strengthen your security posture?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              See how GRC Sphere transforms risk and compliance with automation and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              >
                <Globe className="w-5 h-5 mr-2" />
                Request Trial
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
