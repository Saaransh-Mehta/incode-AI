
const Pricing = () => {
  return (
    <section className='pricing-page w-full flex justify-center items-center flex-col h-screen'>
      <div className="section-head flex justify-center items-center flex-col gap-4 mt-16">
        <button className='p-4 rounded-3xl w-32 shadow-2xl border border-neutral-300'>Pricing</button>
        <h1 className='text-5xl font-normal'>Pricing Like Never Before</h1>
        <p className='text-neutral-500 font-light'>Choose a plan that fits your needs. No hidden fees, no surprises.</p>
      </div>
      <div className="pricing-head w-full mx-auto flex-1 " >
            <div className="grid grid-cols-3 gap-2 place-content-center place-items-center mt-10">
                <div className="h-[550px]  w-[350px] border border-neutral-300 rounded-2xl">
                    <div className="card-top">
                        <h1 className="font-light pt-3 pl-3">Starter Pack</h1>
                        <p className="text-3xl pl-3 pt-2 font-semibold">$19 <span className="text-sm font-light">per month</span></p>
                        <p className="font-light pl-3 pt-2">Perfect for small teams</p>
                    </div>
                    <div className="card-mid flex justify-center items-center mt-6" >
                        <button className="font-light border border-neutral-300 rounded-2xl  p-3 w-full cursor-pointer hover:bg-neutral-200 transition-all mx-auto">Start Free Trial</button>
                    </div>
                </div>
                <div className="z-20 h-[550px] w-[350px] border border-neutral-300 rounded-2xl">Card 2</div>
                <div className="h-[550px] w-[350px] border border-neutral-300 rounded-2xl">Card 3</div>
            </div>
      </div>
    </section>
  )
}

export default Pricing
