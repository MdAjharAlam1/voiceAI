import LayoutContainer from "../shared/LayoutContainer"
import PricingCard from "./PricingCard";

const pricingPlansData = [
  {
    id: 1,
    name: "Basic",
    price: 999,
    currency: "₹",
    duration: "month",
    description: "Perfect for small businesses getting started.",
    features: [
      "Real-time Voice Recognition",
      "Email Support",
      "Basic Analytics",
      "Limited API Access",
    ],
    isPopular: false,
    buttonText: "Choose Plan",
  },
  {
    id: 2,
    name: "Pro",
    price: 2999,
    currency: "₹",
    duration: "month",
    description: "Ideal for growing businesses with advanced needs.",
    features: [
      "Everything in Basic",
      "Multi-Language Support",
      "24/7 Priority Support",
      "Advanced Analytics Dashboard",
      "CRM Integration",
    ],
    isPopular: true,
    buttonText: "Choose Plan",
  },
  {
    id: 3,
    name: "Enterprise",
    price: null,
    currency: "₹",
    duration: null,
    description: "Custom solutions tailored for large organizations.",
    features: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Enterprise-grade Security",
      "Unlimited API Access",
    ],
    isPopular: false,
    buttonText: "Contact Us",
  },
];


const PricingSection = () => {
  return (
    // bg-linear-to-b from-blue-50 to-white
    <section className="py-10 bg-linear-to-b from-blue-50 to-white ">
      <LayoutContainer>
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold">
                    Pricing
                </h2>
                <div className="w-20 mx-auto h-1 bg-blue-500 mt-3 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  md:gap-10 mt-10 md:mt-20">
                {
                    pricingPlansData && pricingPlansData.map((pricing)=>(
                        <PricingCard
                            key={pricing.id}
                            name={pricing.name}
                            description={pricing.description}
                            buttonText={pricing.buttonText}
                            features={pricing.features}
                            price={pricing.price}
                            currency={pricing.currency}
                            isPopular={pricing.isPopular}
                            duration={pricing.duration}
                        />
                    ))
                }
            </div>
        </div>
      </LayoutContainer>
    </section>
  )
}

export default PricingSection
