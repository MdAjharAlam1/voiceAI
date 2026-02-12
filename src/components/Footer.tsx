import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import LayoutContainer from "./shared/LayoutContainer";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8">
      
      <LayoutContainer>

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-6">

          {/* Logo + About */}
          <div>
            <h3 className="text-xl font-bold text-white">VoiceAI</h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Intelligent voice automation platform designed to transform 
              customer interactions and improve business efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">Features</li>
              <li className="hover:text-white transition cursor-pointer">Pricing</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">About Us</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-transparent text-sm outline-none text-gray-300"
              />
              <button className="bg-blue-600 px-4 py-2 hover:bg-blue-700 transition">
                <Mail size={18} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Facebook className="hover:text-white cursor-pointer transition" />
              <Twitter className="hover:text-white cursor-pointer transition" />
              <Linkedin className="hover:text-white cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} VoiceAI. All rights reserved.
        </div>

      </LayoutContainer>
    </footer>
  );
}
