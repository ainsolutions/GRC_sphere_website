"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Brain, Calendar, User, ArrowRight, Search, Filter } from "lucide-react"

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
            <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-cyan-400 font-semibold">
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
  )
}

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
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "Cybersecurity":
        return "bg-gradient-to-r from-cyan-500 to-blue-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Insights & Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on cybersecurity, AI, and governance. Our thought leaders
              share practical knowledge and industry trends.
            </p>
          </div>

          {/* Filter Section */}
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
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
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
                  <CardTitle className="text-xl text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-gray-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
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

                  {/* Read More Button */}
                  <Link href={`/blogs/${post.id}`} className="block">
                    <Button
                      variant="outline"
                      className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on cybersecurity trends, AI innovations, and GRC best
              practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
