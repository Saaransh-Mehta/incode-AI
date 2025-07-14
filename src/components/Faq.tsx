import React from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Faq = () => {
    const [activeTab, setActiveTab] = React.useState('General')
    const [openQuestion, setOpenQuestion] = React.useState<number | null>(null)
    const sectionRef = React.useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: false, margin: "-50px" })
    
    const faqCategories = [
        { id: 'general', label: 'General' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'support', label: 'Support' },
        { id: 'technical', label: 'Technical' }
    ]

    const faqData = {
        General: [
            {
                id: 1,
                question: "What is this platform about?",
                answer: "Our platform is an AI-powered no-code tool that helps you create professional websites in hours, not days. We provide intuitive drag-and-drop functionality with smart AI assistance."
            },
            {
                id: 2,
                question: "Do I need coding experience?",
                answer: "No coding experience required! Our platform is designed for everyone, from complete beginners to experienced developers looking to speed up their workflow."
            },
            {
                id: 3,
                question: "How long does it take to build a website?",
                answer: "Most users can create a fully functional website in 2-4 hours. Complex sites with custom features may take longer, but still significantly faster than traditional development."
            },
            {
                id: 4,
                question: "Can I customize the design?",
                answer: "Absolutely! You have full control over colors, fonts, layouts, and components. Our AI suggests improvements while you maintain creative control."
            }
        ],
        Pricing: [
            {
                id: 1,
                question: "What are your pricing plans?",
                answer: "We offer flexible pricing starting from a free tier for personal projects, with professional plans starting at $19/month and enterprise solutions available."
            },
            {
                id: 2,
                question: "Is there a free trial?",
                answer: "Yes! You can start with our free plan that includes basic features and allows you to create up to 2 websites. No credit card required."
            },
            {
                id: 3,
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will take effect at the end of your current billing cycle."
            },
            {
                id: 4,
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
            }
        ],
        Support: [
            {
                id: 1,
                question: "How can I contact support?",
                answer: "You can reach our support team 24/7 through live chat, email at support@example.com, or by submitting a ticket through your dashboard."
            },
            {
                id: 2,
                question: "What's your response time?",
                answer: "We typically respond to support tickets within 2-4 hours during business hours, and within 24 hours on weekends and holidays."
            },
            {
                id: 3,
                question: "Do you provide training resources?",
                answer: "Yes! We offer comprehensive video tutorials, documentation, webinars, and one-on-one onboarding sessions for enterprise customers."
            },
            {
                id: 4,
                question: "Can you help migrate my existing website?",
                answer: "Our team can assist with website migrations. This service is included in enterprise plans and available as an add-on for other plans."
            }
        ],
        Technical: [
            {
                id: 1,
                question: "What browsers are supported?",
                answer: "Our platform works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience."
            },
            {
                id: 2,
                question: "Is my website mobile-responsive?",
                answer: "Yes! All websites created on our platform are automatically mobile-responsive and optimized for all device sizes."
            },
            {
                id: 3,
                question: "Can I export my website?",
                answer: "Yes, you can export your website as clean HTML, CSS, and JavaScript code. This ensures you're never locked into our platform."
            },
            {
                id: 4,
                question: "What about SEO optimization?",
                answer: "Our platform includes built-in SEO tools, meta tag management, sitemap generation, and performance optimization to help your site rank better."
            }
        ]
    }

    const toggleQuestion = (questionId: number) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId)
    }
  return (
    <motion.section 
      ref={sectionRef}
      className='faq-page mt-16 mb-10 h-screen'
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
      <motion.div 
        className="faq-head flex justify-center items-center"
        variants={{
          hidden: { 
            opacity: 0, 
            y: 30,
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
        <button className='rounded-3xl w-24 shadow-2xl p-3 border border-neutral-300'>FAQ's</button>
      </motion.div>
      <motion.div 
        className="faq-header flex justify-center flex-col items-center gap-10"
        variants={{
          hidden: { 
            opacity: 0, 
            y: 40,
            scale: 0.9
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
        <h1 className='text-5xl font-normal mt-10 text-center'>Frequently Asked Questions</h1>
        <div>
            
        <p className='text-md p-2'>These are the most common questions asked by the customers</p>
        <p className='font-light text-md'>If your query is not there kindly , <a href="#" className='underline'>chat with our support team</a></p>
        </div>
      </motion.div>
      <motion.div 
        className="faq-option mt-4"
        variants={{
          hidden: { 
            opacity: 0, 
            y: 30
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          }
        }}
      >
        <ul className="flex justify-center items-center gap-6">
            {faqCategories.map((category) => (
                <li key={category.id}>
                    <button 
                        className={`font-medium p-4 rounded-3xl w-32 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                            activeTab === category.label
                                ? 'bg-black text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:shadow-md'
                        }`}
                        onClick={() => setActiveTab(category.label)}
                    >
                        {category.label}
                    </button>
                </li>
            ))}
        </ul>
      </motion.div>

      {/* FAQ Questions Section */}
      <motion.div 
        className="faq-questions mt-12 max-w-4xl mx-auto px-6"
        variants={{
          hidden: { 
            opacity: 0, 
            y: 50
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1
            }
          }
        }}
      >
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {faqData[activeTab as keyof typeof faqData].map((faq) => (
            <motion.div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
              layout
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-medium text-gray-900 text-lg">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </motion.section>
  )
}

export default Faq


