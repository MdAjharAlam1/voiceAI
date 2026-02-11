import type { LucideIcon } from "lucide-react"

interface FeatureCardInterface {
    title:string
    description: string
    Icon:LucideIcon
    iconBg:string
    iconColor:string
}

// const FeatureCard = ({
//     title,
//     description,
//     Icon,
//     iconBg,
//     iconColor
// }:FeatureCardInterface) => {
//   return (
//     <div className="relative group p-0.5 overflow-hidden rounded-2xl ">
//         {/* running border  */}
//         <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm animate-borderMove"></div>

//         {/* card content  */}
//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-103">
//             <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBg}`}>
//                 <Icon className={`w-5 h-6 ${iconColor}`}/>
//             </div>
//             <h3 className="mt-4 font-semibold">{title}</h3>
//             <p className="mt-2 text-gray-600 text-sm">{description}</p>
//         </div>
//     </div>


//   )
// }

// export default FeatureCard

export default function FeatureCard({
    Icon,
    title,
    description,
    iconBg,
    iconColor,
  }:FeatureCardInterface) {
    return (
      <div className="relative group w-full max-w-md rounded-2xl">
        
        {/* Running Border */}
        <div className="absolute inset-0 rounded-2xl p-px overflow-hidden">
          <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,#3b82f6,transparent_30%)]"></div>
        </div>
  
        {/* Inner Card */}
        <div className="relative bg-white rounded-2xl p-6 shadow-sm">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg}`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
  
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            {title}
          </h3>
  
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }
  