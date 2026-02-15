import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, ArrowRight, Mic, MicOff, Volume2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';
import Button from '../components/shared/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  date: string;
  time: string;
  doctorName: string;
  meetingType: string;
  participants: string;
  notes: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '',
    doctorName: '',
    meetingType: 'consultation',
    participants: '1',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [useVoiceAssistant, setUseVoiceAssistant] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [conversationStep, setConversationStep] = useState(0);
  const [aiResponse, setAiResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const meetingTypes = [
    { id: 'consultation', name: 'Product Consultation', duration: '30 mins' },
    { id: 'demo', name: 'Full Product Demo', duration: '1 hour' },
    { id: 'trial', name: 'Trial Setup', duration: '45 mins' },
    { id: 'training', name: 'Team Training', duration: '2 hours' }
  ];

  const voiceQuestions = [
    { field: 'name', question: 'What is your full name?' },
    { field: 'email', question: 'What is your email address?' },
    { field: 'company', question: 'What company are you from?' },
    { field: 'phone', question: 'What is your phone number?' },
    { field: 'doctorName', question: 'Which doctor would you like to book an appointment with?' },
    { field: 'date', question: 'What date would you prefer? Please say the date in format like January 15th 2024' },
    { field: 'meetingType', question: 'What type of appointment would you like? We have consultation, demo, trial setup, or training options.' }
  ];

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setVoiceTranscript('');
      };

      recognitionRef.current.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setVoiceTranscript(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.log('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, []);

  // Speak text using Web Speech API
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      synthRef.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      synthRef.current.speak(utterance);
    }
  };

  // Start voice input
  const startVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  // Stop voice input
  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  // Process voice response
  const processVoiceResponse = async () => {
    if (!voiceTranscript.trim()) return;

    const currentQuestion = voiceQuestions[conversationStep];
    const transcript = voiceTranscript.toLowerCase().trim();

    // Update form data based on the current question
    const updatedData = { ...formData };

    if (currentQuestion.field === 'name') {
      updatedData.name = voiceTranscript;
    } else if (currentQuestion.field === 'email') {
      updatedData.email = voiceTranscript;
    } else if (currentQuestion.field === 'company') {
      updatedData.company = voiceTranscript;
    } else if (currentQuestion.field === 'phone') {
      updatedData.phone = voiceTranscript;
    } else if (currentQuestion.field === 'doctorName') {
      updatedData.doctorName = voiceTranscript;
    } else if (currentQuestion.field === 'date') {
      updatedData.date = voiceTranscript;
    } else if (currentQuestion.field === 'meetingType') {
      // Try to match meeting type
      if (transcript.includes('consultation')) updatedData.meetingType = 'consultation';
      else if (transcript.includes('demo')) updatedData.meetingType = 'demo';
      else if (transcript.includes('trial')) updatedData.meetingType = 'trial';
      else if (transcript.includes('training')) updatedData.meetingType = 'training';
    }

    setFormData(updatedData);

    // Move to next question or complete
    if (conversationStep < voiceQuestions.length - 1) {
      const nextStep = conversationStep + 1;
      setConversationStep(nextStep);
      const nextQuestion = voiceQuestions[nextStep];
      setAiResponse(nextQuestion.question);
      speakText(nextQuestion.question);
      setVoiceTranscript('');
    } else {
      // Complete the voice assistant flow
      setAiResponse('Perfect! Your appointment details have been recorded. You can review them and submit when ready.');
      speakText('Perfect! Your appointment details have been recorded. You can review them and submit when ready.');
      setUseVoiceAssistant(false);
    }
  };

  // Start voice assistant
  const startVoiceAssistant = () => {
    setUseVoiceAssistant(true);
    setConversationStep(0);
    const firstQuestion = voiceQuestions[0].question;
    setAiResponse(firstQuestion);
    speakText(firstQuestion);
  };

  // Cancel voice assistant
  const cancelVoiceAssistant = () => {
    setUseVoiceAssistant(false);
    setConversationStep(0);
    setVoiceTranscript('');
    setAiResponse('');
    synthRef.current.cancel();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    if (useVoiceAssistant) {
      setUseVoiceAssistant(false);
    }
  };

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

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navbar />
        <LayoutContainer>
          <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="text-center space-y-6">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
              <h2 className="text-4xl font-bold text-slate-900">Appointment Confirmed!</h2>
              <p className="text-lg text-slate-600">Thank you for booking with us. You will receive a confirmation email shortly.</p>
              <p className="text-slate-500">We look forward to meeting with you!</p>
            </div>
          </div>
        </LayoutContainer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <LayoutContainer>
        <div className="py-12 lg:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
            <p className="text-lg text-slate-600">Schedule a consultation with our team and let AI assist you with voice booking</p>
          </div>

          {useVoiceAssistant ? (
            // Voice Assistant View
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="space-y-6">
                {/* AI Response */}
                <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
                  <div className="flex items-start gap-4">
                    <Volume2 className={`w-6 h-6 text-indigo-600 flex-shrink-0 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    <div>
                      <p className="text-sm font-semibold text-indigo-600 mb-2">AI Assistant</p>
                      <p className="text-lg text-slate-900">{aiResponse}</p>
                    </div>
                  </div>
                </div>

                {/* Microphone Input */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <button
                      onClick={isListening ? stopVoiceInput : startVoiceInput}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                        isListening
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {isListening ? (
                        <>
                          <MicOff className="w-5 h-5" />
                          Stop Listening
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5" />
                          Click to Speak
                        </>
                      )}
                    </button>
                  </div>

                  {/* Transcript Display */}
                  {voiceTranscript && (
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-sm font-semibold text-slate-600 mb-2">You said:</p>
                      <p className="text-slate-900">{voiceTranscript}</p>
                    </div>
                  )}

                  {/* Submit Response Button */}
                  {voiceTranscript && (
                    <button
                      onClick={processVoiceResponse}
                      className="w-full py-3 px-6 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                      Continue
                    </button>
                  )}
                </div>

                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Question {conversationStep + 1} of {voiceQuestions.length}</span>
                  <div className="flex gap-1">
                    {voiceQuestions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 w-2 rounded-full ${
                          idx <= conversationStep ? 'bg-indigo-600' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Cancel Button */}
                <button
                  onClick={cancelVoiceAssistant}
                  className="w-full py-2 px-4 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
                >
                  Cancel & Fill Manually
                </button>
              </div>
            </div>
          ) : (
            // Manual Form View
            <div className="max-w-2xl mx-auto">
              {/* Voice Assistant Button */}
              {!useVoiceAssistant && (
                <button
                  onClick={startVoiceAssistant}
                  className="w-full mb-8 py-4 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition group"
                >
                  <Mic className="w-5 h-5 group-hover:scale-110 transition" />
                  <span>Use AI Voice Assistant to Book</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}

              {/* Example Booking Preview */}
              <div className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-sm font-semibold text-indigo-900 mb-4">Example of a Completed Booking</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded p-3">
                    <p className="text-slate-600 text-xs">Name</p>
                    <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-slate-600 text-xs">Doctor</p>
                    <p className="font-semibold text-slate-900">Dr. Emily Rodriguez</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-slate-600 text-xs">Date</p>
                    <p className="font-semibold text-slate-900">Jan 25, 2024</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-slate-600 text-xs">Time</p>
                    <p className="font-semibold text-slate-900">2:00 PM</p>
                  </div>
                  <div className="bg-white rounded p-3 col-span-2">
                    <p className="text-slate-600 text-xs">Type</p>
                    <p className="font-semibold text-slate-900">Full Product Demo (1 hour)</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Appointment Details</h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Doctor Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Doctor</label>
                    <input
                      type="text"
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="Doctor's name"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Appointment Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Time Slot</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Meeting Type */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Appointment Type</label>
                    <select
                      name="meetingType"
                      value={formData.meetingType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      {meetingTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name} ({type.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Participants */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Participants</label>
                    <select
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4+ People</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes (Optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="Any specific requirements or topics you'd like to discuss..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-8 py-4 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          )}

          {/* Benefits Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Book With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings Section */}
          <div className="py-16 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Recent Appointments Booked</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((booking, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">{booking.name}</h3>
                      <p className="text-sm text-slate-600">with {booking.doctor}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      booking.status === 'Confirmed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
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
                  <button className="w-full py-2 px-4 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition font-medium text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
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

          {/* FAQ Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  q: "How does the AI voice assistant work?",
                  a: "Simply click 'Use AI Voice Assistant to Book' and the AI will ask you questions about your appointment. Just speak your answers naturally and the form will be filled automatically."
                },
                {
                  q: "Can I book without using the voice assistant?",
                  a: "Absolutely! You can fill in the form manually using the traditional text input fields. Both methods are available."
                },
                {
                  q: "What happens after I submit my appointment?",
                  a: "You'll receive a confirmation email with all the appointment details. Our team will contact you to confirm the exact meeting details."
                },
                {
                  q: "What languages does the voice assistant support?",
                  a: "Currently, the voice assistant supports English. We're working on adding more languages soon!"
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default Booking;
