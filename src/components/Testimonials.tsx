import TestimonialsGrid from "./Tweets"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" })

  return (
    <>
     <motion.section 
        ref={sectionRef}
        className="testimonials mt-16 flex flex-col gap-5 bg-gradient-to-b from-white to-gray-50/50 py-16 -mx-6 px-6"
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
          className="head flex justify-center items-center"
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
            <button className="p-3 rounded-3xl w-32 shadow-2xl border border-neutral-300 bg-white font-semibold text-gray-700 hover:shadow-lg transition-shadow duration-300">
              Testimonials
            </button>
        </motion.div>
        <motion.div 
          className="head-text flex justify-center items-center flex-col gap-4 max-w-4xl mx-auto px-6"
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center bebas">
              Trusted by Leading Developers & Teams
            </h1>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Join thousands of developers from top companies who are building faster and smarter with our AI platform
            </p>
        </motion.div>
        <motion.div 
          className="tweets"
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
            <TestimonialsGrid/>
        </motion.div>
        </motion.section> 
    </>
  )
}

export default Testimonials
