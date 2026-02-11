
import Description from "../components/Description"
import Hero from "../components/Hero"

import Navbar from "../components/Navbar"
import Features from "../components/voice-features/Features"

const Home = () => {
  return (
    <div className="h-full mb-20">
       <Navbar/>
       <Hero/>
       <Description/>
       <Features/>
    </div>
  )
}

export default Home