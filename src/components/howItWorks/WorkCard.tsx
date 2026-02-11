import type { LucideIcon } from "lucide-react"

interface WorkCardInterface {
    title:string
    stepNumber:number
    description:string
    Icon:LucideIcon
    iconBg: string
    iconColor : string
    badgeColor: string
}

const WorkCard = ({
    stepNumber,
    title,
    description,
    Icon,
    iconBg,
    iconColor,
    badgeColor
}:WorkCardInterface) => {
  return (
   
    <div className="flex flex-col text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition duration-300 bg-white">
        
        {/* icon color  */}
        <div className={`${iconBg} p-5 w-15 h-15 mx-auto flex items-center justify-center rounded-full mb-4`}>
            <Icon className={`${iconColor} w-8 h-8`}/>
        </div>

        {/* step number  */}

        <div className="flex items-center justify-center gap-4">
            <span className={`${badgeColor} text-white flex items-center justify-center text-sm w-8 h-8 rounded-full mb-3`}>
                {stepNumber}
            </span>

            {/* title  */}
            <h3 className="text-lg font-semibold -mt-3 text-gray-800">
                {title}
            </h3>   
        </div>

        {/* description  */}
        <p className="text-gray-500 text-sm mt-2">
            {description}
        </p>

    </div>

  )
}

export default WorkCard
