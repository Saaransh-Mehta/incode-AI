// import { FeaturesSection } from "../components/Features"

import { motion } from "motion/react"
import { HeroSectionOne } from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"


const Home = () => {

  
  
  return (
    <>
<div className="relative inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">    
    <div className="flex justify-center items-center top-50 ">
      <HeroSectionOne/>
      
    
    </div>
    </div>

    <div className="features-section mt-5">
      <motion.div 
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.2,ease:'linear'}}
      className="feature-head flex flex-col pt-10 justify-center items-center">
        <button className="border border-neutral-300 shadow-xl text-neutral-500 p-3 rounded-3xl">Solutions</button>
      <h1 className="header-text text-5xl font-normal mt-10 bebas">Solve Your Team's <br /> biggest challenges</h1>
      </motion.div>
   
    </div>
    <div className="feature-body w-full flex justify-center items-center ">
      <Features/>
    </div>
    <div className="testimonials">
      <Testimonials/>
    </div>
    </>
  )
}

export default Home
