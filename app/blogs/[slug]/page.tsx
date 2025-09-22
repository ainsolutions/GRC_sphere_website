"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from "lucide-react"

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Sample blog post data - in a real app, this would be fetched based on the slug
  const blogPost = {
    title: "The Future of GRC: How AI is Transforming Risk Management",
    excerpt:
      "Explore how artificial intelligence is revolutionizing governance, risk, and compliance processes, making them more efficient and predictive.",
    category: "AI",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/ai-cybersecurity-dashboard.png",
    tags: ["AI", "GRC", "Risk Management", "Automation"],
    content: `
      <p>The landscape of Governance, Risk, and Compliance (GRC) is undergoing a revolutionary transformation, driven by the rapid advancement of artificial intelligence technologies. As organizations face increasingly complex regulatory environments and sophisticated cyber threats, traditional GRC approaches are proving insufficient to meet modern challenges.</p>

      <h2>The Current State of GRC</h2>
      <p>Traditional GRC processes have long been characterized by manual workflows, reactive approaches, and siloed operations. Organizations typically rely on periodic assessments, manual data collection, and human interpretation of complex regulatory requirements. This approach, while functional, presents several limitations:</p>

      <ul>
        <li>Time-intensive manual processes that delay critical decision-making</li>
        <li>Reactive rather than proactive risk identification</li>
        <li>Limited ability to process and analyze vast amounts of data</li>
        <li>Inconsistent application of policies across different departments</li>
        <li>Difficulty in maintaining real-time compliance visibility</li>
      </ul>

      <h2>AI-Powered GRC: A Paradigm Shift</h2>
      <p>Artificial intelligence is fundamentally changing how organizations approach GRC by introducing capabilities that were previously impossible with traditional methods. AI-powered GRC solutions offer:</p>

      <h3>Predictive Risk Analytics</h3>
      <p>Machine learning algorithms can analyze historical data, current trends, and external factors to predict potential risks before they materialize. This shift from reactive to predictive risk management enables organizations to implement preventive measures rather than merely responding to incidents.</p>

      <h3>Automated Compliance Monitoring</h3>
      <p>AI systems can continuously monitor organizational activities, automatically flagging potential compliance violations and ensuring adherence to regulatory requirements in real-time. This continuous monitoring approach significantly reduces the risk of compliance gaps.</p>

      <h3>Intelligent Policy Management</h3>
      <p>Natural language processing capabilities enable AI systems to interpret complex regulatory documents, automatically updating internal policies and procedures as regulations evolve. This ensures that organizations remain compliant with the latest requirements without manual intervention.</p>

      <h2>Real-World Applications</h2>
      <p>Leading organizations are already implementing AI-powered GRC solutions with remarkable results:</p>

      <blockquote>
        "Our AI-driven risk assessment platform has reduced our risk identification time by 75% while improving accuracy by 40%. We can now predict and prevent issues that would have previously gone unnoticed until it was too late." - Chief Risk Officer, Fortune 500 Financial Services Company
      </blockquote>

      <h3>Financial Services</h3>
      <p>Banks and financial institutions are using AI to monitor transactions for suspicious activities, automatically generate regulatory reports, and assess credit risks with unprecedented accuracy.</p>

      <h3>Healthcare</h3>
      <p>Healthcare organizations leverage AI to ensure HIPAA compliance, monitor patient data access, and predict potential security breaches before they occur.</p>

      <h3>Manufacturing</h3>
      <p>Manufacturing companies use AI-powered GRC systems to monitor supply chain risks, ensure environmental compliance, and predict equipment failures that could lead to safety incidents.</p>

      <h2>Implementation Strategies</h2>
      <p>Successfully implementing AI-powered GRC requires a strategic approach:</p>

      <ol>
        <li><strong>Start with Data Quality:</strong> Ensure your organization has clean, structured data that AI systems can effectively analyze.</li>
        <li><strong>Identify High-Impact Use Cases:</strong> Begin with GRC processes that would benefit most from automation and predictive capabilities.</li>
        <li><strong>Invest in Training:</strong> Ensure your team understands how to work with AI-powered tools and interpret their outputs.</li>
        <li><strong>Maintain Human Oversight:</strong> While AI can automate many processes, human judgment remains crucial for complex decision-making.</li>
        <li><strong>Continuous Improvement:</strong> Regularly assess and refine your AI models to improve accuracy and effectiveness.</li>
      </ol>

      <h2>The Road Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated GRC capabilities. Future developments may include:</p>

      <ul>
        <li>Advanced natural language processing for regulatory interpretation</li>
        <li>Predictive modeling for emerging risk scenarios</li>
        <li>Automated incident response and remediation</li>
        <li>Integration with IoT devices for real-time monitoring</li>
        <li>Enhanced visualization and reporting capabilities</li>
      </ul>

      <p>The transformation of GRC through AI is not just a technological upgrade—it's a fundamental shift toward more intelligent, proactive, and effective risk management. Organizations that embrace this transformation will be better positioned to navigate the complex regulatory landscape while maintaining operational efficiency and competitive advantage.</p>

      <h2>Conclusion</h2>
      <p>The future of GRC lies in the intelligent integration of artificial intelligence with traditional governance, risk, and compliance processes. By leveraging AI's predictive capabilities, automation potential, and analytical power, organizations can transform their GRC functions from reactive cost centers into proactive value drivers that enhance decision-making and protect organizational assets.</p>

      <p>As we move forward, the question is not whether AI will transform GRC, but how quickly organizations can adapt to harness its full potential. Those who act now will gain a significant competitive advantage in an increasingly complex and regulated business environment.</p>
    `,
  }

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
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17583674550"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17583674550');
</script>
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>

          {/* Article Header */}
          <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-6 left-6">
                <Badge className={`${getCategoryColor(blogPost.category)} text-white border-0`}>
                  {blogPost.category}
                </Badge>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12">
              {/* Title and Meta */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{blogPost.title}</h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-white/20 text-gray-400">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  color: "#d1d5db",
                }}
              />

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{blogPost.author}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Dr. Sarah Chen is a leading expert in AI-powered cybersecurity and governance systems. With over
                      15 years of experience in enterprise security architecture, she specializes in helping
                      organizations implement intelligent GRC solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blogs/zero-trust-architecture-guide" className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 mb-3">
                    Cybersecurity
                  </Badge>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Implementing Zero Trust Architecture: A Comprehensive Guide
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Learn the essential steps to implement a zero trust security model...
                  </p>
                </div>
              </Link>

              <Link href="/blogs/machine-learning-threat-detection" className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-3">AI</Badge>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Machine Learning in Cybersecurity: Advanced Threat Detection
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Discover how machine learning algorithms are enhancing threat detection...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .prose h2 {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .prose ul, .prose ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose blockquote {
          border-left: 4px solid #06b6d4;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          background: rgba(6, 182, 212, 0.1);
          padding: 1rem;
          border-radius: 0.5rem;
        }
        .prose strong {
          color: #ffffff;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
