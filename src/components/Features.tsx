import { CardDemo } from "./CardMotion"

const Features = () => {
  return (
<div className="w-[75%] mx-auto grid gap-10">
  {/* Upper Section - 2 equal columns */}
  <div className="grid grid-cols-2 gap-6">
    <div className="border border-neutral-200 h-[370px] w-full rounded-3xl bg-white"></div>
    <div className="border border-neutral-300 h-[370px] w-full rounded-3xl bg-white"></div>
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
