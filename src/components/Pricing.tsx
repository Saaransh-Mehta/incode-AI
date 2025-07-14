
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Check, X, Star } from "lucide-react"

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals getting started",
      popular: false,
      features: [
        { name: "Up to 3 websites", included: true },
        { name: "Basic templates", included: true },
        { name: "Community support", included: true },
        { name: "SSL certificate", included: true },
        { name: "Custom domain", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "White-label options", included: false }
      ]
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Best for growing businesses",
      popular: true,
      features: [
        { name: "Up to 10 websites", included: true },
        { name: "Premium templates", included: true },
        { name: "Priority support", included: true },
        { name: "SSL certificate", included: true },
        { name: "Custom domain", included: true },
        { name: "Advanced analytics", included: true },
        { name: "SEO optimization", included: true },
        { name: "White-label options", included: false }
      ]
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams and organizations",
      popular: false,
      features: [
        { name: "Unlimited websites", included: true },
        { name: "Custom templates", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "SSL certificate", included: true },
        { name: "Custom domain", included: true },
        { name: "Advanced analytics", included: true },
        { name: "SEO optimization", included: true },
        { name: "White-label options", included: true }
      ]
    }
  ]
  return (
      <div className="bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
       
    <section className='pricing-page w-full flex justify-center items-center flex-col h-screen'>
      <div className="section-head flex justify-center items-center flex-col gap-4 mt-16">
        <button className='p-4 rounded-3xl w-32 shadow-2xl border border-black/70  font-semibold'>Pricing</button>
        <h1 className='text-5xl font-normal'>Pricing Like Never Before</h1>
        <p className='text-neutral-500 font-light'>Choose a plan that fits your needs. No hidden fees, no surprises.</p>
      </div>
      <div className="pricing-head w-full mx-auto flex-1 max-w-7xl px-6" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center mt-20">
                
               {pricingPlans.map((plan, index) => (
                <div key={plan.name} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <Card className={`w-full h-auto shadow-xl transition-all duration-300 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-2 border-black bg-gradient-to-b from-gray-50 to-white' 
                      : 'border border-gray-200 bg-white hover:border-gray-300'
                  }`}>
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <CardAction>
                        <button className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}>
                          {plan.popular ? 'Get Started Now' : 'Start Free Trial'}
                        </button>
                      </CardAction>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-center">Everything included:</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                feature.included 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-red-100 text-red-500'
                              }`}>
                                {feature.included ? (
                                  <Check className="w-3 h-3" />
                                ) : (
                                  <X className="w-3 h-3" />
                                )}
                              </div>
                              <span className={`text-sm ${
                                feature.included ? 'text-gray-700' : 'text-gray-400'
                              }`}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
               </div>
               ))}
            </div>
      </div>
    </section>
    </div>
  )
}

export default Pricing
