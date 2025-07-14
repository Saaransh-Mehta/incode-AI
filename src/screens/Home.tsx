// import { FeaturesSection } from "../components/Features"

import { motion } from "motion/react"
import { HeroSectionOne } from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Faq from "../components/Faq"
import Pricing from "../components/Pricing"


const Home = () => {

  
  
  return (
    <>
<div className="relative inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">    
    <div className="flex justify-center items-center top-50 ">
      <HeroSectionOne/>
      
    
    </div>
    </div>

    
    <div className="feature-body w-full flex justify-center items-center ">
      <Features/>
    </div>
    <div className="testimonials">
      <Testimonials/>
    </div>
    <div className="faq">
      <Faq/>
    </div>
    <div className="pricing">
      <Pricing/>
    </div>
    </>
  )
}

export default Home
