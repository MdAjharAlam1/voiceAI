import { Check } from "lucide-react";
import Button from "../shared/Button";

interface PricingPlanInterface {
  name: string;
  price: number | null;
  currency: string;
  duration: string | null;
  description: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
}

const PricingCard = ({
    name,
    price,
    currency,
    duration,
    description,
    features,
    isPopular,
    buttonText
}:PricingPlanInterface) => {
  return (
    <div className={`relative flex flex-col justify-between rounded-2xl border p-8 
        transition-all duration-300 hover:shadow-2xl hover:translate-y-2 ${
            isPopular 
            ? "border-blue-500 shadow-xl scale-105 bg-white"
            : "border-gray-200 bg-white"
        }`}
    >
        {/* popular badge  */}

        {
            isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500
                    text-white text-sm px-4 py-1 rounded-full shadow-md"
                >
                    Most Popular
                </div>
            )
        }

        {/* plan Name */}
        <div className="text-center mb-3 ">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-500 text-sm mt-2">
                {description}
            </p>
        </div>

        {/* price */}
        <div className="my-2">
            { 
                price ? (
                    <div className="flex justify-center">
                        <span className="text-2xl font-medium text-gray-700">
                            {currency}
                        </span>
                        <span className="text-4xl font-bold text-gray-900">
                            {price} 
                        </span>
                        <span className="text-gray-500 text-sm mb-1">
                            / {duration}
                        </span>
                    </div>
                ): (
                    
                    <span className="text-3xl text-center block font-bold text-gray-900">
                        Custom Pricing
                    </span>
                )
            }

            {/* features  */}
            <ul className="space-y-4 my-8">
                {
                    features.map((feature:any, index:number)=>(
                        <li key={index} className="flex items-center gap-3 text-gray-600 ">
                            <Check className="text-green-500 w-5 h-5"/>
                            <span className="text-lg">{feature}</span>
                        </li>
                    ))
                }
            </ul>

            {/* Button  */}
            <Button 
                label={buttonText} 
                className={`w-full rounded-lg font-medium transition duration-300 px-4 py-2
                ${
                    isPopular 
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
            />
        </div>
      
    </div>
  )
}

export default PricingCard
