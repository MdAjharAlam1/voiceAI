import LayoutContainer from "../shared/LayoutContainer"

import { Mic, Brain, MessageSquare, ArrowLeft, ArrowDown, ArrowRight } from "lucide-react";
import WorkCard from "./WorkCard";

export const workStepsData = [
  {
    id: 1,
    title: "User Speaks",
    description:
      "The user interacts with the system using natural voice commands.",
    icon: Mic,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "AI Processes",
    description:
      "The AI analyzes speech, understands intent, and processes the request.",
    icon: Brain,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-500",
  },
  {
    id: 3,
    title: "Smart Response",
    description:
      "The system delivers an intelligent and context-aware response instantly.",
    icon: MessageSquare,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    badgeColor: "bg-green-500",
  },
];


const HowItWorksSection = () => {
  return (
    <section className="py-8 bg-linear-to-b from-white to-blue-50 ">
      <LayoutContainer>
        {/* section title */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
                How Its Works
            </h2> 
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>
        
        {/* bordered container  */}
        <div>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    workStepsData && workStepsData.map((item,index)=>(
                        <div className="relative flex flex-col items-center w-full">
                            
                            <WorkCard 
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                Icon={item.icon}
                                iconBg={item.bgColor}
                                iconColor={item.iconColor}
                                badgeColor={item.badgeColor}
                                stepNumber={item.id}
                            />

                            {/* mobile arrow down
                            {index !== workStepsData.length - 1 && (
                                <ArrowDown className="md:hidden my-6 text-blue-400 w-6 h-6" />
                            )} */}

                            {/* DESKTOP ARROW (Right) */}
                            {index !== workStepsData.length - 1 && (
                                <ArrowRight className="hidden md:block absolute right-8.75 top-1/2 -translate-y-1/2 text-blue-400 w-6 h-6" />
                            )}

                        </div>
                    ))
                }
            </div>
        </div>

      </LayoutContainer>
    </section>
  )
}

export default HowItWorksSection
