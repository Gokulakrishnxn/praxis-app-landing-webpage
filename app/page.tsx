"use client"

import { Button } from "@/components/ui/button"
import {
  Star,
  Brain,
  Zap,
  Shield,
  Users,
  Sparkles,
  Play,
  CheckCircle,
  TrendingUp,
  Globe,
  Bell,
  Menu,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { WaitlistForm } from "@/components/waitlist-form"
import { ReviewsSection } from "@/components/reviews-section"
import Image from "next/image"

export default function PraxisLandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleFeatureScroll = () => {
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
        )
        const newActiveFeature = Math.floor(scrollProgress * 6)
        setActiveFeature(Math.min(5, Math.max(0, newActiveFeature)))
      }
    }

    window.addEventListener("scroll", handleFeatureScroll)
    return () => window.removeEventListener("scroll", handleFeatureScroll)
  }, [])

  const featureScreens = [
    {
      title: "Neural Processing",
      screen: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-accent" />
            <span className="font-semibold">AI Brain Active</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Processing workflow patterns...</span>
            </div>
            <div className="bg-accent/10 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-2">Neural Network Activity</div>
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-accent rounded-full animate-pulse"
                    style={{ height: `${Math.random() * 20 + 10}px`, animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Lightning Speed",
      screen: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span className="font-semibold">Speed Optimization</span>
          </div>
          <div className="space-y-3">
            <div className="bg-yellow-500/10 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-2">Processing Speed</div>
              <div className="text-2xl font-bold text-yellow-500">0.003s</div>
              <div className="text-xs text-green-500">↑ 99.7% faster</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-card rounded p-2 text-center">
                <div className="text-lg font-bold">1.2M</div>
                <div className="text-xs text-muted-foreground">Operations/sec</div>
              </div>
              <div className="bg-card rounded p-2 text-center">
                <div className="text-lg font-bold">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Privacy First",
      screen: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-green-500" />
            <span className="font-semibold">Security Status</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-green-500/10 rounded">
              <span className="text-sm">End-to-End Encryption</span>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-2 bg-green-500/10 rounded">
              <span className="text-sm">Zero-Knowledge Architecture</span>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-2 bg-green-500/10 rounded">
              <span className="text-sm">GDPR Compliant</span>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Smart Collaboration",
      screen: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-blue-500" />
            <span className="font-semibold">Team Activity</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2 bg-card rounded">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                JD
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">John shared a document</div>
                <div className="text-xs text-muted-foreground">2 minutes ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-card rounded">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                AI
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">AI suggested improvements</div>
                <div className="text-xs text-muted-foreground">5 minutes ago</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Global Intelligence",
      screen: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="w-6 h-6 text-purple-500" />
            <span className="font-semibold">Global Insights</span>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-2">Knowledge Sources</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>📚 Research Papers: 2.3M</div>
                <div>🌐 Web Sources: 45M</div>
                <div>📊 Data Points: 1.2B</div>
                <div>🔄 Real-time Updates</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Adaptive Learning",
      screen: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="font-semibold">Learning Progress</span>
          </div>
          <div className="space-y-3">
            <div className="bg-pink-500/10 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-2">Adaptation Level</div>
              <div className="w-full bg-card rounded-full h-2 mb-2">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "87%" }}></div>
              </div>
              <div className="text-sm font-semibold text-pink-500">87% Personalized</div>
            </div>
            <div className="text-xs text-muted-foreground">
              AI has learned from 1,247 interactions and adapted to your workflow preferences.
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/praxis-logo.png" alt="Praxis Logo" width={32} height={32} className="w-8 h-8" />
              </div>
              <span className="text-xl font-semibold text-foreground">Praxis</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </a>
              <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Download
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <WaitlistForm />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
              <div className="px-4 py-6 space-y-4">
                <a
                  href="#features"
                  className="block text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="block text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#download"
                  className="block text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download
                </a>
                <div className="pt-4 border-t border-border/50">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section ref={heroRef} className="pt-20 pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={`space-y-8 lg:space-y-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-accent/10 to-blue-500/10 border border-accent/20 text-accent px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium animate-fade-in-up animate-delay-200 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Coming Soon • Early Access</span>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-foreground leading-[0.9] tracking-tight animate-fade-in-up animate-delay-300">
                    Meet
                    <span className="block bg-gradient-to-r from-accent via-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Praxis
                    </span>
                  </h1>

                  <div className="space-y-3 lg:space-y-4 animate-fade-in-up animate-delay-400">
                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-foreground leading-tight max-w-2xl">
                      Revolutionary AI that transforms how you <span className="text-accent">work</span>,{" "}
                      <span className="text-blue-500">think</span>, and <span className="text-purple-500">create</span>.
                    </p>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                      Experience intelligent automation that adapts to your workflow and amplifies your potential with
                      cutting-edge artificial intelligence.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up animate-delay-500">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Brain className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">Neural Processing</div>
                      <div className="text-xs text-muted-foreground">Advanced AI</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">Lightning Speed</div>
                      <div className="text-xs text-muted-foreground">0.003s Response</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 sm:col-span-2 lg:col-span-1">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">Privacy First</div>
                      <div className="text-xs text-muted-foreground">End-to-End Encrypted</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6 animate-fade-in-up animate-delay-600">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <WaitlistForm />
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-sm sm:text-base rounded-xl sm:rounded-2xl px-6 sm:px-8 border-border hover:bg-muted bg-transparent backdrop-blur-sm group"
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Preview
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="font-medium text-foreground">4.9/5</span>
                    <span className="hidden sm:inline">Rating</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                    <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
                    <span className="font-medium text-foreground">50K+</span>
                    <span className="hidden sm:inline">Waitlist</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                    <span className="font-medium text-foreground">Early Access</span>
                    <span className="hidden sm:inline">Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative order-first lg:order-last ${isVisible ? "animate-scale-in animate-delay-400" : "opacity-0"}`}
            >
              <div
                className="relative mx-auto w-64 sm:w-72 lg:w-80 h-[520px] sm:h-[580px] lg:h-[650px] bg-black rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.5rem] shadow-2xl transform transition-all duration-500"
                style={{ transform: `translateY(${scrollY * -0.1}px) scale(${isVisible ? 1 : 0.95})` }}
              >
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 sm:h-7 lg:h-8 bg-black rounded-b-2xl sm:rounded-b-3xl z-10"></div>
                <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-18 lg:w-20 h-1 sm:h-1.5 bg-gray-800 rounded-full"></div>

                {/* Screen Content */}
                <div className="absolute inset-2 sm:inset-3 bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden">
                  {/* iOS Status Bar */}
                  <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-black text-xs sm:text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="w-5 sm:w-6 h-2.5 sm:h-3 border border-black rounded-sm">
                        <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-green-500 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 sm:p-6 lg:p-8 h-full bg-gradient-to-br from-gray-50 to-white">
                    {/* iOS App Header */}
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-gray-100">
                          <Image
                            src="/praxis-logo.png"
                            alt="Praxis Logo"
                            width={24}
                            height={24}
                            className="w-6 sm:w-7 h-6 sm:h-7"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Praxis</h3>
                          <p className="text-xs sm:text-sm text-gray-500">AI Assistant</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-center mb-3 sm:mb-4">
                          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full flex items-center justify-center">
                            <Bell className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
                          </div>
                        </div>
                        <div className="text-center space-y-1 sm:space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Coming Soon</h4>
                          <p className="text-xs sm:text-sm text-gray-500">Revolutionary AI experience</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full flex-1"></div>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full flex-1"></div>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full flex-1"></div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-center">
                          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg border border-gray-100 animate-pulse">
                            <Image
                              src="/praxis-logo.png"
                              alt="Praxis Logo"
                              width={28}
                              height={28}
                              className="w-6 sm:w-8 h-6 sm:h-8"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* iOS Home Indicator */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-0.5 sm:h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} id="features" className="py-16 lg:py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Powerful Features
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how Praxis revolutionizes productivity with cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Brain,
                  title: "Neural Processing",
                  description:
                    "Advanced AI algorithms that learn from your patterns and optimize workflows automatically.",
                  color: "bg-accent",
                },
                {
                  icon: Zap,
                  title: "Lightning Speed",
                  description: "Process complex tasks in milliseconds with our optimized AI infrastructure.",
                  color: "bg-yellow-500",
                },
                {
                  icon: Shield,
                  title: "Privacy First",
                  description: "End-to-end encryption ensures your data remains private and secure at all times.",
                  color: "bg-green-500",
                },
                {
                  icon: Users,
                  title: "Smart Collaboration",
                  description: "AI-enhanced team workflows that predict needs and streamline communication.",
                  color: "bg-blue-500",
                },
                {
                  icon: Globe,
                  title: "Global Intelligence",
                  description: "Access worldwide knowledge bases and real-time insights powered by AI.",
                  color: "bg-purple-500",
                },
                {
                  icon: Sparkles,
                  title: "Adaptive Learning",
                  description: "Continuously evolving AI that becomes smarter with every interaction.",
                  color: "bg-pink-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? "bg-white shadow-lg scale-105 border border-border"
                      : "bg-white/50 hover:bg-white hover:shadow-md"
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`w-12 sm:w-14 h-12 sm:h-14 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 ${
                      activeFeature === index ? "scale-110" : ""
                    }`}
                  >
                    <feature.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <h3
                      className={`text-lg sm:text-xl font-semibold transition-colors ${
                        activeFeature === index ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
              <div className="lg:sticky lg:top-32">
                <div className="relative w-72 sm:w-80 h-[580px] sm:h-[650px] bg-black rounded-[3rem] sm:rounded-[3.5rem] shadow-2xl">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-36 h-7 sm:h-8 bg-black rounded-b-3xl z-10"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-18 sm:w-20 h-1.5 bg-gray-800 rounded-full"></div>

                  {/* Screen Content */}
                  <div className="absolute inset-3 bg-white rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden">
                    {/* iOS Status Bar */}
                    <div className="bg-white px-6 sm:px-8 py-3 sm:py-4 flex justify-between items-center text-black text-sm font-medium">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-black rounded-sm">
                          <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="p-6 sm:p-8 h-full bg-gradient-to-br from-gray-50 to-white">
                      {/* iOS App Header */}
                      <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100">
                            <Image
                              src="/praxis-logo.png"
                              alt="Praxis Logo"
                              width={28}
                              height={28}
                              className="w-7 h-7"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">Praxis</h3>
                            <p className="text-sm text-gray-500">AI Assistant</p>
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Screen Content */}
                      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 h-80 sm:h-96 overflow-hidden">
                        <div className="h-full transition-all duration-700 ease-in-out text-gray-900">
                          {featureScreens[activeFeature].screen}
                        </div>
                      </div>

                      {/* iOS Home Indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section id="download" className="py-16 lg:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              Join thousands of innovators who are waiting for Praxis. Be the first to experience revolutionary AI that
              transforms how you work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div className="flex justify-center">
                <WaitlistForm />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base border-white text-white hover:bg-white hover:text-black rounded-full px-6 sm:px-8 bg-transparent"
              >
                <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Watch Preview
              </Button>
            </div>
            <p className="text-sm opacity-75">Coming Soon • Early access available • Be the first to know</p>
          </div>
        </div>
      </section>

      <footer className="py-12 lg:py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/praxis-logo.png" alt="Praxis Logo" width={32} height={32} className="w-8 h-8" />
              </div>
              <span className="font-semibold text-foreground text-xl">Praxis</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                API
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 Praxis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
