import React from "react"
import { Star } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "motion/react"

const testimonials = [
  {
    id: 1,
    name: "Devon Lane",
    handle: "@devonla",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro",
  },
  {
    id: 2,
    name: "Jane Cooper",
    handle: "@janecooper",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    handle: "@eleanorp",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem",
  },
  {
    id: 4,
    name: "Robert Fox",
    handle: "@robfox",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem sed ut perspiciatis unde omnis iste natus",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    handle: "@lesliealex",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem sed ut perspiciatis unde omnis iste natus",
  },
  {
    id: 6,
    name: "Jerome Bell",
    handle: "@jerbell",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },
  {
    id: 7,
    name: "Devon Lane",
    handle: "@devonla",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro",
  },
  {
    id: 8,
    name: "Jane Cooper",
    handle: "@janecooper",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },
  {
    id: 9,
    name: "Eleanor Pena",
    handle: "@eleanorp",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem",
  },
  {
    id: 10,
    name: "Robert Fox",
    handle: "@robfox",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem sed ut perspiciatis",
  },
  {
    id: 11,
    name: "Jerome Bell",
    handle: "@jerbell",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },{
    id: 12,
    name: "Jerome Bell",
    handle: "@jerbell",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },{
    id: 13,
    name: "Jerome Bell",
    handle: "@jerbell",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },{
    id: 14,
    name: "Jerome Bell",
    handle: "@jerbell",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5.0,
    text: "Sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium doloremque zouo totam erro sed ut perspiciatis unde omnis iste natus erro sit voluptatem accusantium dolore zouo totam erro sed ut perspiciatis unde omn iste natus erro sit",
  },
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
        {testimonials.slice(0, 6).map((testimonial, index) => {
            const y = useTransform(scrollYProgress, [0, 1], [index * 20, -index * 20]);
            return (
          <motion.div 
          key={testimonial.id} 
          style={{ y }}
          className="bg-white border border-neutral-300 rounded-lg p-6 space-y-4"
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
            <div className="flex items-start gap-3">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{testimonial.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
          </motion.div>
            );
        })}
      </motion.div>
    </div>
  )
}
