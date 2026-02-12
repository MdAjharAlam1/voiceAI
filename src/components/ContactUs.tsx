import { Mail, MapPin, Phone } from "lucide-react"
import LayoutContainer from "./shared/LayoutContainer";
// import Button from "./shared/Button"
// import LayoutContainer from "./shared/LayoutContainer"

interface ContactItemInterface{
    icon:any,
    title:string,
    value:string
    bg:string
}




function ContactUs() {
  return (
    <section className="py-10 lg:py-20 bg-gray-50">
      <LayoutContainer>
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have questions about VoiceAI? Our team is here to help you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-60  items-start">
          
          {/* LEFT - Contact Info */}
          <div className="space-y-8 ">
            
            <ContactItem
              icon={<Mail className="w-6 h-6 text-blue-600" />}
              title="Email"
              value="info@voiceai.com"
              bg="bg-blue-100"
            />

            <ContactItem
              icon={<Phone className="w-6 h-6 text-indigo-600" />}
              title="Phone"
              value="+91 9876543210"
              bg="bg-indigo-100"
            />

            <ContactItem
              icon={<MapPin className="w-6 h-6 text-emerald-600" />}
              title="Location"
              value="Bangalore, India"
              bg="bg-emerald-100"
            />

          </div>

          {/* RIGHT - Form */}
          <div className="bg-white p-8 w-full md:flex-1 rounded-2xl shadow-md border border-gray-200">
            <form className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

function ContactItem({ icon, title, value, bg }:ContactItemInterface) {
  return (
    <div className="flex items-center gap-4">
      <div className={`p-4 rounded-xl ${bg}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}




export default ContactUs