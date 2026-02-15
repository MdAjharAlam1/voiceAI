
import ContactUs from "../components/ContactUs"
import Description from "../components/Description"

import Hero from "../components/Hero"
import HowItWorksSection from "../components/howItWorks/HowItWorksSection"


import PricingSection from "../components/pricing/PricingSection"
import FeatureSection from "../components/voice-features/FeatureSection"

const Home = () => {
  return (
    <div className="h-full">
       <Hero/>
       <Description/>
       <FeatureSection title="Key Features"/>
       <HowItWorksSection/>
       <PricingSection/>
       <ContactUs/>
    </div>
  )
}

export default Home