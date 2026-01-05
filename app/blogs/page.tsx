"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Calendar, User, ArrowRight, Search, Filter } from "lucide-react"
import { HyperspeedBackground } from "@/components/hyperspeed-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const blogPosts = [
    {
      id: "ai-powered-grc-future",
      title: "The Future of GRC: How AI is Transforming Risk Management",
      excerpt:
        "Explore how artificial intelligence is revolutionizing governance, risk, and compliance processes, making them more efficient and predictive.",
      category: "AI",
      author: "Dr. Sarah Chen",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "/ai-cybersecurity-dashboard.png",
      tags: ["AI", "GRC", "Risk Management", "Automation"],
    },
    {
      id: "zero-trust-architecture-guide",
      title: "Implementing Zero Trust Architecture: A Comprehensive Guide",
      excerpt:
        "Learn the essential steps to implement a zero trust security model that protects your organization from modern cyber threats.",
      category: "Cybersecurity",
      author: "Michael Rodriguez",
      date: "2024-03-12",
      readTime: "12 min read",
      image: "/zero-trust-network-security.png",
      tags: ["Zero Trust", "Network Security", "Architecture", "Implementation"],
    },
    {
      id: "machine-learning-threat-detection",
      title: "Machine Learning in Cybersecurity: Advanced Threat Detection",
      excerpt:
        "Discover how machine learning algorithms are enhancing threat detection capabilities and reducing false positives in security operations.",
      category: "AI",
      author: "Dr. Alex Thompson",
      date: "2024-03-10",
      readTime: "10 min read",
      image: "/ml-threat-detection.png",
      tags: ["Machine Learning", "Threat Detection", "SOC", "Automation"],
    },
    {
      id: "compliance-automation-strategies",
      title: "Automating Compliance: Strategies for Modern Organizations",
      excerpt:
        "Streamline your compliance processes with automation strategies that reduce manual effort while ensuring regulatory adherence.",
      category: "Cybersecurity",
      author: "Jennifer Park",
      date: "2024-03-08",
      readTime: "7 min read",
      image: "/compliance-automation-dashboard.png",
      tags: ["Compliance", "Automation", "Regulatory", "Efficiency"],
    },
    {
      id: "ai-business-transformation",
      title: "AI-Driven Business Transformation: Real-World Case Studies",
      excerpt:
        "Examine successful AI implementations across various industries and learn how organizations achieved significant ROI through intelligent automation.",
      category: "AI",
      author: "David Kim",
      date: "2024-03-05",
      readTime: "15 min read",
      image: "/ai-business-transformation.png",
      tags: ["AI Transformation", "Case Studies", "ROI", "Business Intelligence"],
    },
    {
      id: "incident-response-best-practices",
      title: "Incident Response in the Age of Advanced Persistent Threats",
      excerpt:
        "Master the art of incident response with proven strategies to detect, contain, and recover from sophisticated cyber attacks.",
      category: "Cybersecurity",
      author: "Captain Lisa Wong",
      date: "2024-03-02",
      readTime: "11 min read",
      image: "/incident-response-cybersecurity.png",
      tags: ["Incident Response", "APT", "Forensics", "Recovery"],
    },
  ]

  const categories = ["all", "AI", "Cybersecurity"]

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI":
        return "bg-[#00D9FF]"
      case "Cybersecurity":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <HyperspeedBackground />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <Header />

      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Insights & Expertise</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on cybersecurity, AI, and governance. Our thought leaders
              share practical knowledge and industry trends.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-[#00D9FF] hover:bg-[#00B8D4] text-black border-0"
                        : "border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                    }
                  >
                    {category === "all" ? "All Posts" : category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Search className="w-4 h-4" />
              <span className="text-sm">{filteredPosts.length} articles found</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(post.category)} text-white border-0`}>{post.category}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white mb-2 line-clamp-2 group-hover:text-[#00D9FF] transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-gray-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/blogs/${post.id}`} className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:text-[#00D9FF] bg-transparent backdrop-blur-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <div className="w-16 h-16 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-[#00D9FF]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on cybersecurity trends, AI innovations, and GRC best
              practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]"
              />
              <Button className="bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold border-0 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
