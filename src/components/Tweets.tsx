import React from "react"
import { Star, Building2 } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "motion/react"

// Company color mapping for visual variety
const companyColors = {
  "Stripe": "bg-purple-50 text-purple-700 border-purple-200",
  "Shopify": "bg-green-50 text-green-700 border-green-200", 
  "Discord": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Notion": "bg-gray-50 text-gray-700 border-gray-200",
  "Vercel": "bg-black text-white border-gray-800",
  "Linear": "bg-blue-50 text-blue-700 border-blue-200"
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    handle: "@sarahcode",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b734?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    text: "This AI platform completely transformed how I approach development. Code generation is incredibly accurate and saves me hours every day. Game changer!",
    role: "Senior Frontend Developer",
    company: "Stripe"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    handle: "@marcusdev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    text: "The intelligent code suggestions and automated testing features have reduced our deployment cycles by 40%. Our entire team adopted it within a week.",
    role: "Tech Lead",
    company: "Shopify"
  },
  {
    id: 3,
    name: "Emily Watson",
    handle: "@emilywatson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    text: "Finally, an AI tool that actually understands context! The code refactoring suggestions are spot-on and help maintain clean architecture.",
    role: "Full Stack Engineer",
    company: "Discord"
  },
  {
    id: 4,
    name: "David Park",
    handle: "@davidpark",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    text: "Incredible how it adapts to our coding standards. The learning curve was practically zero, and productivity gains were immediate.",
    role: "Backend Developer",
    company: "Notion"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    handle: "@lisabuilds",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    text: "The debugging assistance is phenomenal. It caught edge cases I completely missed and suggested optimal solutions. Essential tool for any developer.",
    role: "DevOps Engineer",
    company: "Vercel"
  },
  {
    id: 6,
    name: "Alex Kim",
    handle: "@alexkim",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    text: "Best investment our startup made. The AI-powered code reviews maintain quality while accelerating our development velocity significantly.",
    role: "CTO",
    company: "Linear"
  }
]

export default function TestimonialsGrid() {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, margin: "-100px" })
    
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    
  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto p-6">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {testimonials.map((testimonial, index) => {
            const y = useTransform(scrollYProgress, [0, 1], [index * 20, -index * 20]);
            return (
          <motion.div 
          key={testimonial.id} 
          style={{ y }}
          className={`bg-white border ${companyColors[testimonial.company as keyof typeof companyColors]} rounded-xl p-6 space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-neutral-300 group`}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50,
              scale: 0.9
            },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
          >
            {/* Rating at the top */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium text-gray-900 ml-1">{testimonial.rating}</span>
            </div>
            
            {/* Testimonial text */}
            <p className="text-gray-700 text-sm leading-relaxed font-medium mb-4">
              "{testimonial.text}"
            </p>
            
            {/* User info */}
            <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full flex-shrink-0 ring-2 ring-white shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Building2 className="w-3 h-3 text-gray-400" />
                  <span className={`text-xs px-2 py-1 rounded-full border ${companyColors[testimonial.company as keyof typeof companyColors] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
            );
        })}
      </motion.div>
    </div>
  )
}
