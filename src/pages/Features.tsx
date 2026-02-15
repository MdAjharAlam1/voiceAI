import { CheckCircle, Zap, Shield, BarChart3, Headphones, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';
import Button from '../components/shared/Button';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Response",
      description: "AI responds to customer inquiries in milliseconds, providing instant support 24/7 without delays."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols ensure your customer data remains completely protected."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into customer interactions, sentiment analysis, and performance metrics in real-time."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Natural Language Understanding",
      description: "Our AI understands context, emotions, and intent, delivering human-like conversations that feel natural."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Communicate with customers in 50+ languages with automatic translation and localization."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Easily integrate with your existing CRM, helpdesk, and communication platforms in minutes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      
      <LayoutContainer>
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Powerful Features for <span className="text-indigo-600">Modern Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            VoiceAI comes packed with enterprise-grade features designed to transform your customer support experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-600 text-white rounded-lg p-12 text-center my-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Support?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of companies that are already using VoiceAI to deliver exceptional customer experiences.
          </p>
          <Button 
            label="Start Your Free Trial" 
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          />
        </div>

        {/* Comparison Table */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose VoiceAI?</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-800 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-gray-800 font-semibold">VoiceAI</th>
                  <th className="px-6 py-4 text-center text-gray-800 font-semibold">Traditional Support</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-800">24/7 Availability</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-800">Instant Response Time</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-800">Scalable to Millions</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-800">Cost Effective</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutContainer>

      <Footer />
    </div>
  );
};

export default Features;
