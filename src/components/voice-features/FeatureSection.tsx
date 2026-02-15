import LayoutContainer from "../shared/LayoutContainer"

import {
    Mic,
    Languages,
    Headphones,
    Database,
    ShieldCheck,
    BarChart3,
  } from "lucide-react";
import FeatureCard from "./FeatureCard";
  
const featuresData = [
    {
      id: 1,
      title: "Real-time Voice Recognition",
      description:
        "Our advanced AI engine captures and processes voice commands instantly with high accuracy, ensuring smooth and natural conversations between users and your system.",
      icon: Mic,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Multi-Language Support",
      description:
        "VoiceAI supports multiple global languages and regional accents, allowing businesses to communicate effectively with customers worldwide without barriers.",
      icon: Languages,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      id: 3,
      title: "24/7 Automated Support",
      description:
        "Provide round-the-clock customer assistance with AI-powered voice automation that handles queries, bookings, and support requests without human intervention.",
      icon: Headphones,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: 4,
      title: "CRM & API Integration",
      description:
        "Seamlessly integrate with your existing CRM, ERP, and third-party tools through secure APIs to streamline workflows and centralize customer data.",
      icon: Database,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      id: 5,
      title: "Enterprise-Grade Security",
      description:
        "Built with encrypted cloud infrastructure and advanced data protection protocols to ensure your customer data remains safe and compliant.",
      icon: ShieldCheck,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 6,
      title: "Advanced Analytics Dashboard",
      description:
        "Track conversations, monitor performance metrics, and gain valuable insights through a powerful dashboard designed to optimize customer engagement.",
      icon: BarChart3,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
];
  
  

const FeatureSection = ({title}:any) => {
  return (
    <div>
        <LayoutContainer>
            <div className="space-y-10">
                <h2 className="text-4xl font-semibold text-center text-slate-600">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                    {
                        featuresData && featuresData.map((feature)=>(
                            <FeatureCard 
                                key={feature.id} 
                                title={feature.title} 
                                description={feature.description} 
                                Icon={feature.icon} 
                                iconBg={feature.iconBg}
                                iconColor={feature.iconColor}
                            />
                        ))
                    }
                </div>
            </div>
        </LayoutContainer>
    </div>
  )
}

export default FeatureSection