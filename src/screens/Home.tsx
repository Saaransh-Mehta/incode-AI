// import { FeaturesSection } from "../components/Features"
import { HeroSectionOne } from "../components/Hero"
import { NavbarDemo } from "../components/Navbar"
import Features from "../components/Features"
import Faq from "../components/Faq"
import Pricing from "../components/Pricing"
import Cta from "../components/Cta"
import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import { Element } from 'react-scroll';


const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });


  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  
  
  return (
    <>
<NavbarDemo toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
<Element name="home" className="element">
<div className="relative inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
">    
    <div className="flex justify-center items-center top-50 ">
      <HeroSectionOne/>
      
    
    </div>
    </div>
</Element>

    
    <Element name="features" className="element">
    <div id="features" className="feature-body w-full flex justify-center items-center ">
      <Features/>
    </div>
    </Element>
    
    <Element name="testimonials" className="element">
    <div id="testimonials" className="testimonials">
    </div>
    </Element>
    
    <Element name="faq" className="element">
    <div className="faq">
      <Faq/>
    </div>
    </Element>
    
    <Element name="pricing" className="element">
    <div id="pricing" className="pricing">
      <Pricing/>
    </div>
    </Element>
    
    <Element name="cta" className="element">
    <div className="cta">
      <Cta/>
    </div>
    </Element>
    
    <Element name="footer" className="element">
    <div className="footer">
      <Footer/>
    </div>
    </Element>
    </>
  )
}

export default Home
