import PricingSection from "../components/pricing/PricingSection"
import LayoutContainer from "../components/shared/LayoutContainer"

const faqSectionData  = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan anytime. Changes take effect at the next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! All plans come with a 14-day free trial. No credit card required to get started."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and PayPal for your convenience."
    },
    {
      question: "What happens if I exceed my monthly limit?",
      answer: "We'll notify you immediately. You can upgrade to a higher plan or purchase additional credits."
    }
  ]

const Pricing = () => {
  return (
    <div>
        <PricingSection/>
        <LayoutContainer>
          {/* FAQ Section   */}
            <div className="py-16">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    Fequently Asked Question
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        faqSectionData && faqSectionData.map((faq,index)=>(
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h2>
                            <p  className="text-gray-600">{faq.answer}</p>
                        </div>
                        ))
                    }
                    </div>
                </div>

                {/* moeny back gaurantee  */}
                <div className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-lg p-12 text-center my-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">30-Day Moeny-Back Guarantee</h3>
                    <p className="text-gray-600 text-lg">
                    Not satisfied? Get a full refund within 30 days. We're confident you'll love VoiceAI. 
                    </p>
                </div>
          </div>
        </LayoutContainer>
        

    </div>
  )
}

export default Pricing