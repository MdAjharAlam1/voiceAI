import { Clock, Mail, MapPin, Phone } from "lucide-react";
import LayoutContainer from "../components/shared/LayoutContainer"
import Button from "../components/shared/Button";
import { useState } from "react";

const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "support@voiceai.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (800) 555-0123",
      description: "Available Monday-Friday 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "San Francisco, CA 94105",
      description: "Visit us in person"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "24 Hours Max",
      description: "Average response time"
    }
];

const supportData = [
    {
        label:"Expert Team",
        description: "Our support team consists of experienced professionals ready to help."
    },
    {
        label:"Fast Response",
        description: "Average response time of less than 24 hours."
    },
    {
        label:"Multiple Channels",
        description: "Reach us via email, phone, or live chat."
    },
]

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', company: '', message: '' });
     };
    
  return (
    <section>
        <LayoutContainer>
            {/* header  */}
            <div className="py-16 text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Get in <span className="text-indigo-600">Touch</span>
                </h1>
                <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                    Have questions? We'd love to hear for you. Contact our team anytime
                </p>
            </div>

            {/* contact info card  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" >
                {
                    contactInfo && contactInfo.map((info,index)=>(
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-indigo-600 mb-3">{info.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                            <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                            <p className="text-gray-800 text-sm">{info.description}</p>
                        </div>
                    ))
                }
            </div>

            {/* contact form  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
                    {submitted && (
                        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                            ✓ Thank you! Your message has been sent successfully. We'll be in touch soon!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Full Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email Address</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-gray-800 font-medium mb-2">Company</label>
                            <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Company"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                            <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Tell us how we can help..."
                            />
                        </div>

                        <Button
                            type="submit"
                            label="Send Message"
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                        />
                    </form>
                </div>
                {/* support info  */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Support?</h2>
                        <div className="space-y-4">
                            {
                                supportData.map((support,index)=>(
                                    <div key={index} className="flex gap-4">
                                        <div className="text-indigo-600 text-xl font-bold">✓</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{support.label}</h3>
                                            <p className="text-gray-600">{support.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    {/* newsLetter signup  */}

                    <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Common Questions</h3>
                        <p className="text-gray-600 mb-4">
                            Browse our comprehensive knowledge  base for quick answers.
                        </p>
                        <Button label="Visit Help Center" className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"/>
                    </div>
                </div>
            </div>

            {/* newsletter signup  */}
            <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-12 rounded-lg text-center text-white mb-12">
                <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
                <p className="text-indigo-100 mb-6">Suscribe to our newsletter for the latest updates and tips.</p>
                <div className="max-w-md mx-auto">
                    <form className=" flex-wrap flex items-center gap-3 ">
                        <input type="email" placeholder="your@email.com" className="flex-1 bg-white px-4 py-2 rounded-lg focus:outline-neutral-50 text-gray-800" />
                        <Button label="Suscribe" className="px-6 py-2 lg:w-full  bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"/>
                    </form>
                </div>

            </div>

        </LayoutContainer>
    </section>
  )
}

export default Contact
