import { useState, useEffect, useCallback } from 'react'
import { FiZap, FiLayers, FiPackage, FiHeadphones, FiTrendingUp, FiFileText, FiCpu, FiTarget, FiTool, FiShield, FiMaximize, FiSettings, FiStar, FiCheck, FiAward, FiArrowRight, FiArrowLeft } from 'react-icons/fi'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [showHint, setShowHint] = useState(true)
  const totalSlides = 8

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection('right')
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('left')
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape') {
        // Exit fullscreen if active
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  useEffect(() => {
    // Hide hint after 3 seconds
    const timer = setTimeout(() => setShowHint(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full gap-12 animate-fadeIn">
          <div className="text-center space-y-6">
            <img
              src="https://asset.lyzr.app/FWVZTTzT"
              alt="Lyzr Logo"
              className="h-24 mx-auto mb-8 animate-scaleIn"
              style={{ animationDelay: '0.2s', mixBlendMode: 'screen', filter: 'brightness(1.2)' }}
            />
            <h1 className="font-playfair text-7xl font-bold text-white leading-tight animate-fadeInUp">
              Build Enterprise AI Agents
            </h1>
            <p className="font-noto text-2xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              Transform your business with intelligent automation and agentic AI
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col justify-center h-full gap-12">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <img src="https://asset.lyzr.app/oP4CObkm" alt="Lyzr" className="h-10" style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
            <h2 className="font-playfair text-6xl font-bold text-white">Pre-built Agent Blueprints</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
                <FiZap className="text-indigo-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Lightning Fast Deployment</h3>
                <p className="font-noto text-xl text-gray-300">Deploy production-ready agents in minutes, not months</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
                <FiLayers className="text-indigo-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Industry-Specific Templates</h3>
                <p className="font-noto text-xl text-gray-300">Purpose-built blueprints for customer support, sales, HR, and more</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
                <FiPackage className="text-indigo-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Fully Customizable</h3>
                <p className="font-noto text-xl text-gray-300">Tailor every aspect to match your unique business needs</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col justify-center h-full gap-12">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <img src="https://asset.lyzr.app/oP4CObkm" alt="Lyzr" className="h-10" style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
            <h2 className="font-playfair text-6xl font-bold text-white">Production Use Cases</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                <FiHeadphones className="text-green-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Customer Support Automation</h3>
                <p className="font-noto text-xl text-gray-300">24/7 intelligent support agents that understand context and resolve issues</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                <FiTrendingUp className="text-green-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Sales Process Optimization</h3>
                <p className="font-noto text-xl text-gray-300">Automate lead qualification, follow-ups, and pipeline management</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                <FiFileText className="text-green-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Document Processing</h3>
                <p className="font-noto text-xl text-gray-300">Extract, analyze, and act on information from any document type</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className="flex flex-col justify-center h-full gap-12">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <img src="https://asset.lyzr.app/oP4CObkm" alt="Lyzr" className="h-10" style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
            <h2 className="font-playfair text-6xl font-bold text-white">Autonomous Super Agents</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse">
                <FiCpu className="text-purple-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Multi-Step Reasoning</h3>
                <p className="font-noto text-xl text-gray-300">Advanced agents that plan, execute, and adapt complex workflows autonomously</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse">
                <FiTool className="text-purple-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Intelligent Tool Usage</h3>
                <p className="font-noto text-xl text-gray-300">Seamlessly integrate with 200+ tools and APIs to accomplish any task</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse">
                <FiTarget className="text-purple-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Contextual Memory</h3>
                <p className="font-noto text-xl text-gray-300">Remember past interactions and learn from every conversation</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div className="flex flex-col justify-center h-full gap-12">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <img src="https://asset.lyzr.app/oP4CObkm" alt="Lyzr" className="h-10" style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
            <h2 className="font-playfair text-6xl font-bold text-white">Enterprise-Grade Platform</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                <FiShield className="text-blue-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="font-noto text-xl text-gray-300">SOC 2 compliant with end-to-end encryption and role-based access control</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                <FiMaximize className="text-blue-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Infinite Scalability</h3>
                <p className="font-noto text-xl text-gray-300">Handle millions of conversations without compromising performance</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                <FiSettings className="text-blue-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Full Customization</h3>
                <p className="font-noto text-xl text-gray-300">White-label solutions with complete control over branding and behavior</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      content: (
        <div className="flex flex-col justify-center h-full gap-12">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <img src="https://asset.lyzr.app/oP4CObkm" alt="Lyzr" className="h-10" style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
            <h2 className="font-playfair text-6xl font-bold text-white">Trusted By Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <FiStar className="text-yellow-400 text-3xl" />
                <p className="font-noto text-xl text-gray-300 italic">
                  "Lyzr helped us deploy an AI customer support agent in just 2 weeks. Our response time dropped by 80%."
                </p>
              </div>
              <p className="font-noto text-lg text-gray-400">— Fortune 500 Tech Company</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-4">
                <FiStar className="text-yellow-400 text-3xl" />
                <p className="font-noto text-xl text-gray-300 italic">
                  "The no-code builder made it possible for our team to build complex workflows without engineering resources."
                </p>
              </div>
              <p className="font-noto text-lg text-gray-400">— Leading Financial Services Firm</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-4 mb-4">
                <FiStar className="text-yellow-400 text-3xl" />
                <p className="font-noto text-xl text-gray-300 italic">
                  "Lyzr's platform security and compliance features gave us confidence to deploy AI at enterprise scale."
                </p>
              </div>
              <p className="font-noto text-lg text-gray-400">— Global Healthcare Provider</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      content: (
        <div className="flex flex-col justify-center h-full gap-12">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <img src="https://asset.lyzr.app/oP4CObkm" alt="Lyzr" className="h-10" style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
            <h2 className="font-playfair text-6xl font-bold text-white">Why Lyzr</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <FiCheck className="text-indigo-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">10x Faster Deployment</h3>
                <p className="font-noto text-xl text-gray-300">Go from concept to production in days with pre-built blueprints and intuitive tools</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <FiCheck className="text-indigo-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">No-Code Agent Builder</h3>
                <p className="font-noto text-xl text-gray-300">Empower business teams to create and manage agents without coding expertise</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <FiCheck className="text-indigo-400 text-3xl" />
              </div>
              <div>
                <h3 className="font-noto text-2xl font-semibold text-white mb-2">Enterprise Security First</h3>
                <p className="font-noto text-xl text-gray-300">Built for regulated industries with compliance, privacy, and security at the core</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      content: (
        <div className="flex flex-col items-center justify-center h-full gap-12 animate-fadeIn">
          <div className="text-center space-y-8">
            <FiAward className="text-indigo-400 text-8xl mx-auto mb-8 animate-scaleIn" />
            <h1 className="font-playfair text-7xl font-bold text-white leading-tight animate-fadeInUp">
              Start Building Today
            </h1>
            <p className="font-noto text-3xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              Join thousands of enterprises transforming their business with AI agents
            </p>
            <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://www.lyzr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-noto text-2xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Visit www.lyzr.ai
                <FiArrowRight className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans:wght@300;400;600;700&display=swap');

          .font-playfair {
            font-family: 'Playfair Display', serif;
          }

          .font-noto {
            font-family: 'Noto Sans', sans-serif;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.4s ease-out forwards;
            opacity: 0;
          }

          .animate-scaleIn {
            animation: scaleIn 0.5s ease-out forwards;
            opacity: 0;
          }

          .animate-slideInRight {
            animation: slideInRight 0.4s ease-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.4s ease-out forwards;
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }

          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .animate-fadeOut {
            animation: fadeOut 0.5s ease-out forwards;
          }
        `}
      </style>

      {/* Main Slide Container */}
      <div className="flex items-center justify-center min-h-screen p-12">
        <div className="w-full max-w-7xl aspect-video relative">
          {/* Slide Content */}
          <div
            key={currentSlide}
            className={`absolute inset-0 px-20 py-16 ${
              direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'
            }`}
          >
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 'right' : 'left')
              setCurrentSlide(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-indigo-500 w-12 shadow-lg shadow-indigo-500/50'
            : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Hint */}
      {showHint && (
        <div className={`fixed bottom-20 left-0 right-0 flex items-center justify-center gap-8 text-gray-400 font-noto text-sm ${showHint ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
          <div className="flex items-center gap-2">
            <FiArrowLeft className="text-xl" />
            <span>Previous</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <FiArrowRight className="text-xl" />
          </div>
          <span>•</span>
          <span>Press ESC to exit fullscreen</span>
        </div>
      )}

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 font-noto text-gray-400 text-lg">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}
