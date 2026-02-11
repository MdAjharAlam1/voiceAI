import { Mic, Brain, MessageSquare } from "lucide-react";
import LayoutContainer from "./shared/LayoutContainer";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <LayoutContainer>
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Bordered Container */}
        <div className="border border-blue-100 rounded-2xl shadow-lg bg-white p-8">
          
          <div className="grid md:grid-cols-3 gap-10 items-center text-center relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-5 rounded-full mb-4">
                <Mic className="text-blue-600 w-8 h-8" />
              </div>
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-2">
                1
              </span>
              <h3 className="text-lg font-semibold text-gray-800">
                User Speaks
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                The user interacts with the system using natural voice commands.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block absolute left-1/3 top-1/2 transform -translate-y-1/2 text-blue-300 text-3xl">
              →
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-5 rounded-full mb-4">
                <Brain className="text-purple-600 w-8 h-8" />
              </div>
              <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full mb-2">
                2
              </span>
              <h3 className="text-lg font-semibold text-gray-800">
                AI Processes
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                The AI analyzes speech, understands intent, and processes the request.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block absolute right-1/3 top-1/2 transform -translate-y-1/2 text-blue-300 text-3xl">
              →
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-5 rounded-full mb-4">
                <MessageSquare className="text-green-600 w-8 h-8" />
              </div>
              <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full mb-2">
                3
              </span>
              <h3 className="text-lg font-semibold text-gray-800">
                Smart Response
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                The system delivers an intelligent and context-aware response instantly.
              </p>
            </div>

          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
