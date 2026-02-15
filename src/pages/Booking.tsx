import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';
import Button from '../components/shared/Button';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '',
    meetingType: 'consultation',
    participants: '1',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const meetingTypes = [
    { id: 'consultation', name: 'Product Consultation', duration: '30 mins' },
    { id: 'demo', name: 'Full Product Demo', duration: '1 hour' },
    { id: 'trial', name: 'Trial Setup', duration: '45 mins' },
    { id: 'training', name: 'Team Training', duration: '2 hours' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Expert Consultation",
      description: "Meet with our product specialists to discuss your specific needs and use cases"
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots that work best for your team across all timezones"
    },
    {
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      title: "Virtual or In-Person",
      description: "Connect via video call or schedule an on-site visit for enterprise clients"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      title: "Personalized Demo",
      description: "See VoiceAI in action with a custom demo tailored to your business requirements"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      image: "👩‍💼",
      text: "The booking experience was seamless. Our consultation with the VoiceAI team helped us understand exactly how the platform would benefit our customer support."
    },
    {
      name: "Michael Chen",
      company: "Global Services Inc",
      image: "👨‍💼",
      text: "Professional team, thorough demo, and clear ROI calculations. We signed up immediately after our appointment."
    },
    {
      name: "Emma Rodriguez",
      company: "Enterprise Solutions Ltd",
      image: "👩‍💼",
      text: "The team took time to understand our specific use case and showed us exactly how VoiceAI would integrate with our existing systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      <LayoutContainer>
        {/* Header */}
        <div className="py-16 text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Book a <span className="text-indigo-600">Personalized Demo</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Schedule a consultation with our experts to see how VoiceAI can transform your customer support operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-slate-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                  <p className="text-slate-600 mb-4">
                    Check your email for appointment details and Zoom link
                  </p>
                  <p className="text-sm text-slate-500">
                    We'll send a reminder 24 hours before your scheduled meeting.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Your Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Company Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Meeting Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Meeting Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {meetingTypes.map(type => (
                        <label
                          key={type.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.meetingType === type.id
                              ? 'border-indigo-600 bg-indigo-50'
                              : 'border-slate-200 bg-white hover:border-indigo-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="meetingType"
                            value={type.id}
                            checked={formData.meetingType === type.id}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          <div className="font-semibold text-gray-800">{type.name}</div>
                          <div className="text-sm text-slate-600">{type.duration}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Schedule</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Select time...</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Participants</label>
                      <select
                        name="participants"
                        value={formData.participants}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4+">4+ people</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tell us about your use case or specific requirements..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    label="Confirm Appointment"
                    className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                  />
                </form>
              )}
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div>
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Personalized needs assessment</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Live product demonstration</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">ROI calculation for your business</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Integration roadmap</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Special offer discussion</span>
                </li>
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-slate-200">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-slate-600">Companies Booked</div>
                </div>
                <div className="text-center pb-4 border-b border-slate-200">
                  <div className="text-3xl font-bold text-indigo-600">98%</div>
                  <div className="text-sm text-slate-600">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">24hrs</div>
                  <div className="text-sm text-slate-600">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Book a Demo?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Can't find a time that works? Contact our team directly and we'll find a solution.
          </p>
          <Button 
            label="Contact Sales"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          />
        </div>
      </LayoutContainer>

      <Footer />
    </div>
  );
};

export default Booking;
