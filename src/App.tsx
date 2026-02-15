import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
