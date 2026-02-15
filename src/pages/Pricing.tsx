import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';
import Button from '../components/shared/Button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 99,
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 calls/month",
        "Basic analytics",
        "Single agent",
        "Email support",
        "Single language",
        "Standard integrations"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: 299,
      description: "For growing companies",
      features: [
        "Up to 10,000 calls/month",
        "Advanced analytics",
        "Up to 5 agents",
        "Priority support",
        "Multi-language (25+)",
        "All integrations",
        "Custom training",
        "API access"
      ],
      buttonText: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: 999,
      description: "For large organizations",
      features: [
        "Unlimited calls/month",
        "Custom analytics",
        "Unlimited agents",
        "24/7 phone support",
        "50+ languages",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      
      <LayoutContainer>
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Simple, Transparent <span className="text-indigo-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition ${
                plan.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl transform scale-105"
                  : "bg-white shadow-md"
              }`}
            >
              <h2 className={`text-3xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-800"}`}>
                {plan.name}
              </h2>
              <p className={`mb-4 ${plan.highlighted ? "text-indigo-100" : "text-gray-600"}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-800"}`}>
                  ${plan.price}
                </span>
                <span className={`ml-2 ${plan.highlighted ? "text-indigo-100" : "text-gray-600"}`}>
                  /month
                </span>
              </div>

              <Button
                label={plan.buttonText}
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              />

              <div className={`space-y-4 ${plan.highlighted ? "text-indigo-50" : "text-gray-700"}`}>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-indigo-600"}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan anytime. Changes take effect at the next billing cycle."
              },
              {
                q: "Is there a free trial?",
                a: "Absolutely! All plans come with a 14-day free trial. No credit card required to get started."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and PayPal for your convenience."
              },
              {
                q: "What happens if I exceed my monthly limit?",
                a: "We'll notify you immediately. You can upgrade to a higher plan or purchase additional credits."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-12 text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-600 text-lg">
            Not satisfied? Get a full refund within 30 days. We're confident you'll love VoiceAI.
          </p>
        </div>
      </LayoutContainer>

      <Footer />
    </div>
  );
};

export default Pricing;
