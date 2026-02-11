
import Description from "../components/Description"
import Hero from "../components/Hero"
import HowItWorksSection from "../components/howItWorks/HowItWorksSection"
// import HowItWorks from "../components/HowItWorks"

import Navbar from "../components/Navbar"
import PricingSection from "../components/pricing/PricingSection"
import Features from "../components/voice-features/Features"

const Home = () => {
  return (
    <div className="h-full mb-20">
       <Navbar/>
       <Hero/>
       <Description/>
       <Features/>
       <HowItWorksSection/>
       <PricingSection/>
    </div>
  )
}

export default Home