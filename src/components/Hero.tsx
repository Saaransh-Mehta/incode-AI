
import { motion, useScroll, useTransform } from "motion/react"
import {IconArrowRight, IconChevronDown, IconSparkles} from'@tabler/icons-react'
export function HeroSectionOne() {

  const {scrollYProgress} = useScroll();
  const opacityControll = useTransform(scrollYProgress,[0,0.2,0.5],[0,0.4,1])
  return (
    <div className="relative mx-auto my-10 flex max-w-[980px] flex-col items-center justify-center top-20">
     
       <div className="inline-flex  items-center space-x-2 bg-black/90 rounded-full px-4 py-2 mb-8 border border-gray-700">
              <IconSparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/70">AI-Powered Landing Pages</span>
            </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10  mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Create your website in hours, not days with smart AI"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 bebas  inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          With AI, you can create your website in hours, not days. Try our best
          in class, state of the art, cutting edge AI tools to get your website
          up.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button 
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="w-60 flex gap-5 items-center justify-center flex-row transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
    >
      <span>Create Now</span>

      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 20, transition: { duration: 0.3 } },
        }}
      >
        <IconArrowRight />
      </motion.span>
    </motion.button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        <div className="small-features flex justify-center gap-10 mt-10 w-full">
          <div className="smal-one flex items-center gap-4">
          <div className="bg-red-300 rounded-full flex h-[10px] w-[10px] "></div>
        <span>No Credit Cards required</span>
          </div>
           <div className="smal-one flex items-center gap-4">
          <div className="bg-purple-300 rounded-full flex h-[10px] w-[10px] "></div>
        <span>Build In Minutes</span>
          </div>
           <div className="smal-one flex items-center gap-4">
          <div className="bg-red-300 rounded-full flex h-[10px] w-[10px] "></div>
        <span>AI Powered</span>
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 flex justify-center rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <motion.div
          initial={{y:0}}
          animate={{y:20}}
          transition={{duration:1.5,delay:1.5,repeat:Infinity,repeatType:"reverse"}}

          className="icon absolute "><IconChevronDown size={30}/></motion.div>
          <div className="w-full  overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
      <motion.div 
      initial={{opacity:0,y:-20}}
      transition={{duration:0.5}}
      style={{ opacity: opacityControll }}
      className="trusted-by flex flex-col justify-center items-center ">
        <h1 className="text-gray-600 text-4xl bebas">Trusted By</h1>
        <div className="logo">
          Logo
        </div>
      </motion.div>
    </div>
  );
}


