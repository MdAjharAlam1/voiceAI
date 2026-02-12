
import ContactUs from "../components/ContactUs"
import Description from "../components/Description"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HowItWorksSection from "../components/howItWorks/HowItWorksSection"
// import HowItWorks from "../components/HowItWorks"

import Navbar from "../components/Navbar"
import PricingSection from "../components/pricing/PricingSection"
import Features from "../components/voice-features/Features"

const Home = () => {
  return (
    <div className="h-full">
       <Navbar/>
       <Hero/>
       <Description/>
       <Features/>
       <HowItWorksSection/>
       <PricingSection/>
       <ContactUs/>
       <Footer/>
    </div>
  )
}

export default Home