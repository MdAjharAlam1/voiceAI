
import LayoutContainer from '../components/shared/LayoutContainer'
import FeatureSection from '../components/voice-features/FeatureSection'
import { CheckCircle } from 'lucide-react'
import Button from '../components/shared/Button'

const Features = () => {
  return (
    <section className=' py-16 min-h-screen bg-linear-to-br from-slate-50 to-white'>
        <LayoutContainer>
            {/* header  */}
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-gray-800 mb-4'>
                    Powerful Features for <span className='text-indigo-600'>Modern Business</span>
                </h1>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                    VoiceAI comes packed with enterprise-grade features designed to transform your customer support experience.
                </p>
            </div>
        </LayoutContainer>
        {/* feature card section */}
        <FeatureSection/>

        <LayoutContainer>
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
    </section>
  )
}

export default Features