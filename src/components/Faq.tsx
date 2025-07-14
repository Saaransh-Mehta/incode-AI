import React from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { ChevronDown, HelpCircle, Star, Zap, Shield, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react'

const Faq = () => {
    const [activeTab, setActiveTab] = React.useState('General')
    const [openQuestion, setOpenQuestion] = React.useState<number | null>(null)
    const sectionRef = React.useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: false, margin: "-50px" })
    
    const categories = [
        { 
            name: 'General', 
            icon: <HelpCircle className="w-4 h-4" />, 
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50 dark:bg-blue-950',
            borderColor: 'border-blue-200 dark:border-blue-800'
        },
        { 
            name: 'Features', 
            icon: <Star className="w-4 h-4" />, 
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50 dark:bg-purple-950',
            borderColor: 'border-purple-200 dark:border-purple-800'
        },
        { 
            name: 'Pricing', 
            icon: <Zap className="w-4 h-4" />, 
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-50 dark:bg-yellow-950',
            borderColor: 'border-yellow-200 dark:border-yellow-800'
        },
        { 
            name: 'Support', 
            icon: <HeadphonesIcon className="w-4 h-4" />, 
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50 dark:bg-green-950',
            borderColor: 'border-green-200 dark:border-green-800'
        },
    ]

    const faqData = {
        General: [
            {
                question: "What is this AI platform about?",
                answer: "Our platform is an AI-powered no-code tool that helps you create professional websites in hours, not days. We provide intuitive drag-and-drop functionality with smart AI assistance."
            },
            {
                question: "Do I need coding experience?",
                answer: "No coding experience required! Our platform is designed for everyone, from complete beginners to experienced developers looking to speed up their workflow."
            },
            {
                question: "How long does it take to build a website?",
                answer: "Most users can create a fully functional website in 2-4 hours. Complex sites with custom features may take longer, but still significantly faster than traditional development."
            },
            {
                question: "Can I customize the design?",
                answer: "Absolutely! You have full control over colors, fonts, layouts, and components. Our AI suggests improvements while you maintain creative control."
            }
        ],
        Features: [
            {
                question: "What AI capabilities are included?",
                answer: "Our platform includes natural language processing, computer vision, predictive analytics, automated workflows, real-time data analysis, and custom AI model training capabilities."
            },
            {
                question: "Can I integrate with existing tools?",
                answer: "Yes! We offer robust APIs and pre-built integrations with popular tools like Slack, Google Workspace, Microsoft Office, Salesforce, and many more. Custom integrations are also available."
            },
            {
                question: "How accurate are the AI predictions?",
                answer: "Our AI models achieve 95%+ accuracy rates across most use cases. We continuously train and improve our models using real-world data to ensure the highest precision for your specific needs."
            },
            {
                question: "Can I train custom AI models?",
                answer: "Yes! Our platform allows you to train custom AI models using your own data. We provide user-friendly tools and guided workflows to help you create models tailored to your specific business needs."
            }
        ],
        Pricing: [
            {
                question: "What are your pricing plans?",
                answer: "We offer flexible pricing starting from a free tier for personal projects, with professional plans starting at $19/month and enterprise solutions available."
            },
            {
                question: "Is there a free trial available?",
                answer: "Yes! We offer a generous free tier that includes access to core AI features, up to 1,000 API calls per month, and community support. Perfect for trying out our platform."
            },
            {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will take effect at the end of your current billing cycle."
            },
            {
                question: "Do you offer custom enterprise pricing?",
                answer: "Yes, we provide tailored enterprise solutions with custom pricing, dedicated support, on-premise deployment options, and SLA guarantees. Contact our sales team for details."
            }
        ],
        Support: [
            {
                question: "What support options are available?",
                answer: "We offer 24/7 chat support, comprehensive documentation, video tutorials, community forums, and for premium users, priority phone support and dedicated account managers."
            },
            {
                question: "How quickly do you respond to issues?",
                answer: "Free tier users receive responses within 24 hours. Pro users get priority support within 4 hours, and Enterprise customers receive immediate support with guaranteed response times."
            },
            {
                question: "Do you provide training and onboarding?",
                answer: "Yes! We offer personalized onboarding sessions, team training workshops, and comprehensive documentation to ensure you get the most out of our platform."
            },
            {
                question: "Can you help migrate my existing data?",
                answer: "Our team can assist with data migrations and integrations. This service is included in enterprise plans and available as an add-on for other plans."
            }
        ]
    }

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index)
    }

    // Reset open question when switching tabs
    React.useEffect(() => {
        setOpenQuestion(null)
    }, [activeTab])

    const currentCategory = categories.find(cat => cat.name === activeTab)

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50 rounded-full mb-8 shadow-lg backdrop-blur-sm"
                    >
                        <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">Frequently Asked Questions</span>
                    </motion.div>
                    
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Got Questions?
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            We've Got Answers
                        </span>
                    </motion.h1>
                    
                    {/* Subtitle */}
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Everything you need to know about our AI platform, pricing, and support.
                        <br />
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                            Can't find what you're looking for? Our support team is ready to help!
                        </span>
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Instant Answers</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Expert Help</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            onClick={() => setActiveTab(category.name)}
                            className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeTab === category.name
                                    ? `text-white shadow-lg shadow-black/20 bg-gradient-to-r ${category.color}`
                                    : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.icon}
                            <span>{category.name}</span>
                            {activeTab === category.name && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {faqData[activeTab as keyof typeof faqData].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`group relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                                        openQuestion === index 
                                            ? `${currentCategory?.borderColor} ${currentCategory?.bgColor}` 
                                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="w-full p-6 text-left flex items-center justify-between group/button"
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                className={`p-2 rounded-full transition-all duration-300 ${
                                                    openQuestion === index 
                                                        ? `bg-gradient-to-r ${currentCategory?.color} text-white` 
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover/button:bg-gray-200 dark:group-hover/button:bg-gray-600'
                                                }`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                            </motion.div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover/button:text-blue-600 dark:group-hover/button:text-blue-400 transition-colors">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ 
                                                rotate: openQuestion === index ? 180 : 0,
                                                scale: openQuestion === index ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`p-2 rounded-full transition-colors ${
                                                openQuestion === index 
                                                    ? 'bg-white/20 text-white' 
                                                    : 'text-gray-400 group-hover/button:text-gray-600 dark:group-hover/button:text-gray-300'
                                            }`}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openQuestion === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6">
                                                    <div className="ml-12 p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                            className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:gap-3 transition-all duration-200"
                                                        >
                                                            <span>Need more help?</span>
                                                            <ArrowRight className="w-4 h-4" />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
                            <p className="text-gray-300">Our support team is here to help you succeed.</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                        >
                            <HeadphonesIcon className="w-4 h-4" />
                            Contact Support
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Faq


