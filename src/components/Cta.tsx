
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { ArrowRight, Sparkles, Users, Star } from "lucide-react"

const Cta = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" })

  return (
    <motion.section 
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          className="relative bg-black rounded-3xl overflow-hidden"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50,
              scale: 0.95
            },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
          
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <motion.div 
                className="space-y-8"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    x: -30
                  },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.2
                    }
                  }
                }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-white/90">Start Building Today</span>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white bebas leading-tight">
                    Ready to Transform Your Development?
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Join thousands of developers who are already building faster, smarter, and more efficiently with our AI-powered platform.
                  </p>
                </div>

                <div className="flex flex-wrap gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1M+</div>
                    <div className="text-sm text-gray-400">Lines Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                  
                  <motion.button 
                    className="flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Users className="w-5 h-5" />
                    <span>Talk to Sales</span>
                  </motion.button>
                </div>

                <p className="text-sm text-gray-400">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </motion.div>

              <motion.div 
                className="relative"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    x: 30
                  },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.4
                    }
                  }
                }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-2xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-5 h-5" />
                      <span className="font-semibold">AI Powered</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-0 left-0 bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-2xl"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="flex items-center gap-2 text-white">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-semibold">Fast Deploy</span>
                    </div>
                  </motion.div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                        <div className="h-4 bg-blue-500 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  )
}

export default Cta
