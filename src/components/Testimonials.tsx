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
        className="testimonials mt-16 flex flex-col gap-5"
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
            <button className="p-3 rounded-4xl shadow-2xl border border-neutral-200 "> Testimonials</button>
        </motion.div>
        <motion.div 
          className="head-text flex justify-center items-center flex-col gap-4"
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
            <h1 className="text-3xl">More than 1000+ Happy customers.</h1>
            <p className="font-light text-neutral-500">We provide best class solutions for our clients who trust us </p>
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
