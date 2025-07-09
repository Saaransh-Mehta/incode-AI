import { CardDemo } from "./CardMotion"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
const Features = () => {
  return (
<div className="w-[75%] mx-auto grid gap-10">
  {/* Upper Section - 2 equal columns */}
  <div className="grid grid-cols-2 gap-6">
    <div className="border border-neutral-200 h-[370px] flex flex-col justify-start  w-full rounded-3xl bg-white">
      <DotLottieReact
      className="h-[60%] w-[60%] "
      src="../../public/animations/animate.json"
      loop
      autoplay
     
      />
      <div className="card-text font-semibold bebas text-3xl ml-10">
        Precision Code Generation
      </div>
      <p className="ml-10 mt-2 font-light text-neutral-500">Forget the misrage of incorrect output. With Incode Ai <br /> code is crafted right in the very first time</p>
      </div>
    <div className="border border-neutral-300 h-[370px] w-full rounded-3xl bg-white">
      <div className="card-top">
        <h1 className="text-3xl pl-10 pt-5 bebas">Handle Files Seamlessly</h1>
        <p className="pt-2 pl-10 font-light ">Easily generate import files . Watch your workflows <br /> flow like dunks in gentle desert</p>
      </div>
      <div className="card-img flex justify-center items-center bg-white">
        <img className="h-[250px]" src="../../public/docs.png" alt="png " />
      </div>
    </div>
  </div>

  {/* Lower Section - 8/4 column split */}
  <div className="grid grid-cols-12 gap-6 h-auto">
    <div className="col-span-8 border border-neutral-200 h-auto w-full rounded-3xl bg-white">
    
    </div>
    <div className="col-span-4 h-auto w-full rounded-3xl bg-white">
        <CardDemo/>
    </div>
  </div>
</div>


  )
}

export default Features
