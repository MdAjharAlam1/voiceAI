import { Link } from "react-router-dom";
import phone from "../assets/images/phone.png"
import Button from "./shared/Button";
import LayoutContainer from "./shared/LayoutContainer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <LayoutContainer>
        {/* Glow Effect */}
        <div className="absolute right-20 top-20 w-90 h-72 bg-blue-80 rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-7xl mx-auto  py-10 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="md:w-1/2 md:text-left z-90">
            <h1 className="text-4xl md:text-4xl lg:5xl font-bold text-gray-800 leading-tight">
              Revolutionize Your Business <span className="text-blue-600">With Smart Voice AI</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              VoiceAI helps businesses automate customer conversations, 
              reduce support costs, and enhance engagement using 
              advanced voice-based artificial intelligence.
            </p>
            <p className="mt-2 text-gray-500 text-lg">
              Our AI-powered voice system understands natural language,
              responds instantly, and integrates seamlessly with your
              existing tools and CRM systems.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/voice-translator">
                <Button label="Get Started" className="mt-6 px-6 py-2.5 bg-indigo-500 font-medium text-white rounded-lg shadow hover:bg-indigo-600 transition"/>
              </Link>
              <Button label="Request Demo" className="mt-6 px-6 py-2.5 bg-white text-slate-800 rounded-lg shadow hover:shadow-md transition"/>
            </div>
              
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">

            <img
              src={phone}
              alt="Voice App"
              className=" w-120 relative z-10"
            />
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

