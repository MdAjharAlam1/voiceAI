import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Features from "./pages/Features"
import VoiceTranslator from "./pages/VoiceTranslator"
import BookAppointment from "./pages/BookAppointment"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/voice-translator" element={<VoiceTranslator/>}/>
        <Route path="/book-appointment" element={<BookAppointment/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App