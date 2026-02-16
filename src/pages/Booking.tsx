import { Calendar, Clock, Users, MapPin, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';

const Booking = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Expert Consultation",
      description: "Meet with our specialists to discuss your specific needs"
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots that work best for you"
    },
    {
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      title: "Virtual or In-Person",
      description: "Connect via video call or schedule an on-site visit"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      title: "Easy Booking",
      description: "Simple and fast appointment scheduling process"
    }
  ];

  const availableDoctors = [
    { id: 1, name: 'Dr. James Mitchell', specialty: 'Product Specialist', experience: '8 years' },
    { id: 2, name: 'Dr. Emily Rodriguez', specialty: 'Senior Consultant', experience: '10 years' },
    { id: 3, name: 'Dr. David Park', specialty: 'Solutions Architect', experience: '12 years' },
    { id: 4, name: 'Dr. Susan Thompson', specialty: 'Implementation Lead', experience: '9 years' },
    { id: 5, name: 'Dr. Anna Johnson', specialty: 'Training Manager', experience: '7 years' }
  ];

  const appointmentTypes = [
    { id: 1, name: 'Product Consultation', duration: '30 minutes', description: 'Initial consultation about your needs' },
    { id: 2, name: 'Full Product Demo', duration: '1 hour', description: 'Comprehensive product demonstration' },
    { id: 3, name: 'Trial Setup', duration: '45 minutes', description: 'Set up your trial account and environment' },
    { id: 4, name: 'Team Training', duration: '2 hours', description: 'Train your team on our platform' }
  ];

  const recentBookings = [
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
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      image: "👩‍💼",
      text: "Quick and easy appointment scheduling. The team was professional and provided valuable insights for our needs."
    },
    {
      name: "Michael Chen",
      company: "Global Services Inc",
      image: "👨‍💼",
      text: "Excellent service and thorough product demo. The team really understood our requirements and offered great solutions."
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      image: "👩‍🔬",
      text: "Outstanding consultation experience. The specialists were knowledgeable and helpful in understanding our needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <LayoutContainer>
        <div className="py-12 lg:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
            <p className="text-lg text-slate-600">Schedule a consultation with our expert team. Choose your preferred doctor and time slot.</p>
          </div>

          {/* Available Doctors Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {availableDoctors.map(doctor => (
                <div key={doctor.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4 text-center">👨‍⚕️</div>
                  <h3 className="font-semibold text-slate-900 text-center mb-2">{doctor.name}</h3>
                  <p className="text-sm text-indigo-600 text-center font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-xs text-slate-600 text-center">{doctor.experience} experience</p>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Types Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Appointment Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {appointmentTypes.map(type => (
                <div key={type.id} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 p-8">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{type.name}</h3>
                  <p className="text-sm text-indigo-600 font-semibold mb-3">{type.duration}</p>
                  <p className="text-slate-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Available Time Slots */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Available Time Slots</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'].map((time, idx) => (
                <div key={idx} className="bg-white border border-indigo-300 rounded-lg p-4 text-center hover:bg-indigo-50 transition cursor-not-allowed">
                  <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Book With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 p-8 text-center hover:shadow-md transition">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Recently Booked Appointments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentBookings.map((booking, idx) => (
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
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-16 bg-slate-100 -mx-8 px-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-md">
                  <p className="text-2xl mb-4">{testimonial.image}</p>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Schedule?</h2>
            <p className="text-lg mb-6 opacity-90">Contact our sales team to book your appointment or learn more about our services.</p>
            <p className="text-lg font-semibold">📧 booking@voiceai.com | 📞 1-800-VOICE-AI</p>
          </div>
        </div>
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default Booking;
