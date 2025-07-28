import { CardDemo } from "./CardMotion"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Code, Zap, Shield, Rocket, Users, Globe } from "lucide-react"

const Features = () => {
  return (
<div className="w-full py-16 bg-gradient-to-b from-gray-50 to-white relative  dark:from-gray-900 dark:to-black">
 
  <div className="absolute inset-0 bg-gradient-to-b from-black blur-2xl h-10  to-gray-900   -top-2"></div>

  <div className="w-[90%] max-w-7xl mx-auto space-y-12">
    
    
    <div className="text-center space-y-4 mb-16">
      <div className="flex justify-center items-center mb-6">
        <button className="p-3 rounded-3xl w-32 shadow-2xl border border-neutral-300 bg-white font-semibold text-gray-700 hover:shadow-lg transition-shadow duration-300">
          Solutions
        </button>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 bebas dark:text-white">
        Powerful Features for Modern Development
      </h2>
      <p className="text-lg text-gray-600 dark:text-white/50 max-w-2xl mx-auto">
        Experience the next generation of AI-powered development tools designed to accelerate your workflow
      </p>
    </div>

   
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="border border-gray-200 h-[400px] flex flex-col justify-between w-full rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8  dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-center">
          <DotLottieReact
            className="h-48 w-48"
            src="/animations/animate.json"
            loop
            autoplay
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold bebas text-2xl text-gray-900 dark:text-white/90">
              Precision Code Generation
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed dark:text-white/50">
            Forget the misrage of incorrect output. With Incode AI, code is crafted right the very first time with unmatched accuracy and efficiency.
          </p>
        </div>
      </div>

      <div className="border border-gray-200 h-[400px] w-full rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl bebas font-bold text-gray-900 dark:text-white/90">Handle Files Seamlessly</h3>
          </div>
          <p className="text-gray-600 leading-relaxed dark:text-white/50">
            Easily generate and import files. Watch your workflows flow like dunes in gentle desert breeze.
          </p>
        </div>
        <div className="flex justify-center items-center bg-gradient-to-b h-60">
          <img className="h-52 object-contain" src="../../public/docs.png" alt="Document management" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      <div className="xl:col-span-8 border border-gray-200 min-h-[450px] w-full rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="h-full flex flex-col">
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl bebas font-bold text-gray-900 dark:text-white/90">
                Advanced Development Suite
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed dark:text-white/50">
              Comprehensive tools and features designed to supercharge your development process from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-gradient-to-b from-blue-50 to-white dark:from-blue-800 dark:to-gray-800 border border-blue-100 dark:border-none">
              <div className="p-3 bg-blue-500 rounded-full">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Lightning Fast</h4>
              <p className="text-sm text-gray-600 dark:text-white/50">Generate code in milliseconds</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-gradient-to-b from-green-50 to-white border dark:from-green-800 dark:to-gray-800  border-green-100  dark:border-none">
              <div className="p-3 bg-green-500 rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Secure & Reliable</h4>
              <p className="text-sm text-gray-600 dark:text-white/50">Enterprise-grade security</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 dark:border-none dark:from-orange-800 dark:to-gray-800">
              <div className="p-3 bg-orange-500 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Team Collaboration</h4>
              <p className="text-sm text-gray-600 dark:text-white/50">Work together seamlessly</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="xl:col-span-4 min-h-[450px] w-full rounded-3xl bg-white shadow-lg">
        <CardDemo/>
      </div>
    </div>
  </div>
</div>


  )
}

export default Features
