

import { useState} from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, ArrowRight, Mic, MicOff, Volume2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';
import Button from '../components/shared/Button';

const recentBookingData = [
    {
      name: 'Sarah Johnson',
      doctor: 'Dr. James Mitchell',
      date: 'Jan 22, 2024',
      time: '2:00 PM',
      type: 'Product Consultation',
      status: 'Confirmed'
    },
    {
      name: 'Michael Chen',
      doctor: 'Dr. Emily Rodriguez',
      date: 'Jan 23, 2024',
      time: '10:00 AM',
      type: 'Full Product Demo',
      status: 'Confirmed'
    },
    {
      name: 'Emma Mueller',
      doctor: 'Dr. David Park',
      date: 'Jan 24, 2024',
      time: '3:30 PM',
      type: 'Trial Setup',
      status: 'Pending'
    },
    {
      name: 'Lisa Wong',
      doctor: 'Dr. Susan Thompson',
      date: 'Jan 25, 2024',
      time: '1:00 PM',
      type: 'Team Training',
      status: 'Confirmed'
    },
    {
      name: 'Carlos Silva',
      doctor: 'Dr. James Mitchell',
      date: 'Jan 26, 2024',
      time: '11:00 AM',
      type: 'Product Consultation',
      status: 'Confirmed'
    },
    {
      name: 'David Park',
      doctor: 'Dr. Anna Johnson',
      date: 'Jan 27, 2024',
      time: '4:00 PM',
      type: 'Full Product Demo',
      status: 'Confirmed'
    }
]

const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      image: "👩‍💼",
      text: "The voice booking saved me time! Just spoke my details and the appointment was scheduled. Incredibly convenient."
    },
    {
      name: "Michael Chen",
      company: "Global Services Inc",
      image: "👨‍💼",
      text: "Professional team, thorough demo, and the voice assistant made booking effortless. Signed up immediately."
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      image: "👩‍🔬",
      text: "The AI voice feature is a game-changer. No more typing forms - just talk to the assistant and you're done!"
    }
];

const benefits = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Expert Consultation",
      description: "Meet with our specialists to discuss your specific needs using voice booking for convenience"
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots and book hands-free using our AI voice assistant"
    },
    {
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      title: "Virtual or In-Person",
      description: "Connect via video call or schedule an on-site visit with instant voice confirmation"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      title: "AI-Powered Booking",
      description: "Use voice commands to book your appointment - just answer simple questions spoken by AI"
    }
];

const BookingAppointment = () => {
  // ALL LOGIC KEPT SAME
  const [submitted, setSubmitted] = useState(false);
  const [useVoiceAssistant, setUseVoiceAssistant] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [conversationStep, setConversationStep] = useState(0);
  const [aiResponse, setAiResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-blue-50">
        <Navbar />
        <LayoutContainer>
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-xl">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-slate-900 mb-3">Appointment Confirmed!</h2>
              <p className="text-slate-600 text-lg">You will receive a confirmation email shortly.</p>
            </div>
          </div>
        </LayoutContainer>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-blue-50">
      <LayoutContainer>
        <div className="py-14 lg:py-20">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Book Your Appointment
            </h1>
            <p className="text-slate-600 text-lg">
              Smart booking with AI voice assistant or manual form
            </p>
          </div>

          {/* Voice CTA */}
          {!useVoiceAssistant && (
            <button
              onClick={() => setUseVoiceAssistant(true)}
              className="w-full mb-10 py-5 rounded-2xl  bg-linear-to-r from-indigo-600 to-blue-600 text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition"
            >
              <Mic className="w-5 h-5" />
              Use AI Voice Assistant
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {/* VOICE ASSISTANT UI */}
          {useVoiceAssistant && (
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-indigo-100">

              {/* AI Bubble */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-6">
                <div className="flex gap-4">
                  <Volume2 className={`text-indigo-600 ${isSpeaking ? 'animate-pulse' : ''}`} />
                  <div>
                    <p className="text-xs text-indigo-600 font-semibold mb-1">AI Assistant</p>
                    <p className="text-slate-800 text-lg">{aiResponse || 'Ready to start your booking...'}</p>
                  </div>
                </div>
              </div>

              {/* Mic Button */}
              <button
                onClick={() => setIsListening(!isListening)}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition text-white ${
                  isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isListening ? <MicOff /> : <Mic />}
                {isListening ? 'Stop Listening' : 'Tap to Speak'}
              </button>

              {/* Transcript */}
              {voiceTranscript && (
                <div className="mt-5 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-1">You said</p>
                  <p className="text-slate-800">{voiceTranscript}</p>
                </div>
              )}

              {/* Progress */}
              <div className="flex justify-between items-center mt-6 text-sm text-slate-500">
                <span>Step {conversationStep + 1}</span>
                <div className="flex gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= conversationStep ? 'bg-indigo-600' : 'bg-slate-300'}`} />
                  ))}
                </div>
              </div>

              <button
                onClick={() => setUseVoiceAssistant(false)}
                className="mt-6 w-full text-sm text-slate-500 hover:text-slate-700"
              >
                Cancel & switch to manual form
              </button>
            </div>
          )}

          {/* FORM CARD */}
          {!useVoiceAssistant && (
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              <h2 className="text-2xl font-bold mb-6">Appointment Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Full Name',
                  'Email Address',
                  'Company',
                  'Phone Number',
                  'Preferred Doctor',
                  'Appointment Date'
                ].map((label, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">{label}</label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>

              {/* Textarea */}
              <div className="mt-6">
                <label className="text-sm font-medium text-slate-600">Additional Notes</label>
                <textarea
                  rows={4}
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Anything you'd like us to know..."
                />
              </div>

              {/* Sticky CTA */}
              <button
                onClick={() => setSubmitted(true)}
                className="mt-8 w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-md hover:shadow-lg transition"
              >
                Confirm Appointment
              </button>
            </div>
            )}

            {/* BENEFITS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {[
                { icon: <Users />, title: 'Expert Consultation' },
                { icon: <Calendar />, title: 'Flexible Scheduling' },
                { icon: <MapPin />, title: 'Virtual or In-Person' },
                { icon: <CheckCircle />, title: 'AI Powered Booking' }
                ].map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <div className="text-indigo-600 mb-3">{b.icon}</div>
                    <p className="font-semibold text-slate-800">{b.title}</p>
                </div>
                ))}
            </div>
            <div className="py-16 mb-12">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12"> Recent Appointments Booked</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        recentBookingData.map((booking,index)=>(
                            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{booking.name}</h3>
                                        <p className="text-sm text-slate-600"> With {booking.doctor}</p>
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full 
                                        ${ booking.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }
                                    `}>
                                        {booking.status}
                                    </span>
                                </div>
                                <div className="space-y-2 text-sm text-slate-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{booking.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{booking.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-indigo-600 font-medium">{booking.type}</span>
                                    </div>
                                </div>

                                <Button label="View Details" className="w-full py-2 px-4 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition font-medium text-sm"/>
                                     
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="py-16 bg-slate-100 -mx-8 px-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Others Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{testimonial.image}</span>
                                <div>
                                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-600">{testimonial.company}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Book with Us</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        benefits.map((benefit, idx)=>(
                            <div key={idx} className="b-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default BookingAppointment;