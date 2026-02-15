import { useState } from "react";
import LayoutContainer from "../components/shared/LayoutContainer"
import { ArrowRight, CheckCircle, Mic, Volume2 } from "lucide-react";
import Button from "../components/shared/Button";

const languages: Record<string, { name: string; flag: string }> = {
  spanish: { name: 'Spanish', flag: '🇪🇸' },
  french: { name: 'French', flag: '🇫🇷' },
  german: { name: 'German', flag: '🇩🇪' },
  japanese: { name: 'Japanese', flag: '🇯🇵' },
  mandarin: { name: 'Mandarin', flag: '🇨🇳' },
  portuguese: { name: 'Portuguese', flag: '🇵🇹' },
};

const recentTranslationData = [
  {
    from: 'I would like to schedule an appointment with Dr. Smith next Tuesday',
    to: 'Me gustaría programar una cita con el Dr. Smith el próximo martes',
    lang: 'Spanish',
    user: 'Sarah Johnson'
  },
  {
    from: 'What time slots are available for the medical consultation?',
    to: 'Quels créneaux horaires sont disponibles pour la consultation médicale?',
    lang: 'French',
    user: 'Michael Chen'
  },
  {
    from: 'Please confirm my appointment details and send confirmation email',
    to: 'Bitte bestätigen Sie meine Termindetails und senden Sie eine Bestätigungsemail',
    lang: 'German',
    user: 'Emma Mueller'
  },
  {
    from: 'I need to reschedule my doctor appointment to next week',
    to: '来週に医者の診察時間をスケジュール変更する必要があります',
    lang: 'Japanese',
    user: 'David Park'
  },
  {
    from: 'Can I book a video consultation instead of in-person visit?',
    to: '亲自就诊而不是视频咨询，我可以预约吗？',
    lang: 'Mandarin',
    user: 'Lisa Wong'
  },
  {
    from: 'What is the cancellation policy for medical appointments?',
    to: 'Qual é a política de cancelamento para consultas médicas?',
    lang: 'Portuguese',
    user: 'Carlos Silva'
  }
]

const features = [
  {
    icon: <Mic className="w-8 h-8 text-indigo-600" />,
    title: "Real-Time Voice Recognition",
    description: "Advanced AI listens and understands your voice in real-time with 99.9% accuracy"
  },
  {
    icon: <ArrowRight className="w-8 h-8 text-indigo-600" />,
    title: "Instant Translation",
    description: "Translates your speech to 50+ languages in under 100 milliseconds"
  },
  {
    icon: <Volume2 className="w-8 h-8 text-indigo-600" />,
    title: "Natural Audio Output",
    description: "Converts translated text to natural-sounding speech in the target language"
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
    title: "Context Awareness",
    description: "Understands context and idioms for accurate, natural translations"
  }
];

const sampleTexts: Record<string, { original: string; translated: string }> = {
  spanish: {
    original: 'I need to book a doctor appointment for next Monday at two PM, please.',
    translated: 'Necesito reservar una cita médica para el próximo lunes a las dos de la tarde, por favor.'
  },
  french: {
    original: 'I would like information about your customer support services and pricing plans.',
    translated: 'J\'aimerais des informations sur vos services de support client et vos plans tarifaires.'
  },
  german: {
    original: 'Can you help me with the voice translation feature and how it works in real time?',
    translated: 'Können Sie mir bei der Sprachübersetzungsfunktion helfen und wie sie in Echtzeit funktioniert?'
  },
  japanese: {
    original: 'I want to schedule a meeting with your doctor next Friday afternoon.',
    translated: '来週の金曜日の午後、医者との会議をスケジュールしたいです。'
  },
  mandarin: {
    original: 'Please tell me about your appointment booking system and available time slots.',
    translated: '请告诉我关于您的预约预订系统和可用的时间段。'
  },
  portuguese: {
    original: 'I am interested in booking a consultation for my medical needs this week.',
    translated: 'Estou interessado em agendar uma consulta para minhas necessidades médicas esta semana.'
  }
};

const VoiceTranslator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof languages>('spanish');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [translation, setTranslation] = useState('');


  const handleStartRecording = ()=>{
    setIsRecording(true)
    setTranscript('')
    setTranslation('')
    // simulate the recording 2 second
    setTimeout(()=>{
      setIsRecording(false)
      setTranscript(sampleTexts[selectedLanguage].original)
      setTimeout(()=>{
        setTranslation(sampleTexts[selectedLanguage].translated)
      },800)
    },2000)
  }

  const handleSpeak = ()=>{
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translation);
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
      <LayoutContainer>
        {/* header  */}
        <div className="py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Voice AI Translator <span className="text-indigo-600">Demo</span> </h1>
          <p className="text-xl max-w-2xl mx-auto text-slate-600">
            Experience the power of real-time voice translation. Click the microphone and speak to see VoiceAI translate your message instantly.
          </p>
        </div>

        {/* interactive demo section  */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16 border border-slate-200">
          <div className="max-w-3xl mx-auto">
            {/* language section  */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4"> Select Target Language </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                  Object.entries(languages).map(([key,lang])=>(
                    <button
                      key={key}
                      onClick={()=>{
                        setSelectedLanguage(key);
                        setTranscript('');
                        setTranslation('');
                      }}
                      className={`p-4 rounded-lg border-2 transition-all font-medium ${
                        selectedLanguage === key
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-white text-gray-700 hover:border-indigo-300 "

                      }`}
                    >
                      <div className="text-2xl mb-2 ">{lang.flag}</div>
                      {lang.name}
                    </button>
                  ))
                }
              </div>
            </div>
            
            {/* recording button  */}
            <div className="flex justify-center mb-8">
                <button
                  onClick={handleStartRecording}
                  disabled={isRecording}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all ${
                    isRecording
                    ? "bg-red-500 animate-pulse"
                    :"bg-indigo-600 hover:bg-indigo-700"
                  } disabled:opacity-75`}
                >
                  <Mic className="w-6 h-6"/>
                  {isRecording ? "Recording ........" : "Click to Speak"}
                </button>
            </div>

            {/* original text display  */}
            {transcript && (
              <div className="mb-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">Original (English)</p>
                <p className="text-lg text-blue-800">{transcript}</p>
              </div>
            )}
            
            {/* Translation Display */}
            {
              translation && (
                <div className="mb-6 p-6 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-900 mb-2">
                    Translation ({languages[selectedLanguage].name})
                  </p>
                  <p className="text-lg text-green-800 mb-4">{translation}</p>
                  <button
                    onClick={handleSpeak}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Volume2 className="w-4 h-4"/>
                    Listen to Translation
                  </button>
                </div>
              )
            }

            {
              !transcript && !translation && (
                <div className="text-center p-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                  <Mic className="w-12 h-12 text-slate-400 mx-auto mb-3"/>
                  <p className="text-slate-600 font-medium">Click the button above and start speaking</p>
                </div>
              )
            }
          </div>
        </div>

        {/* recent translation section  */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Recent Translations from Our Users</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              recentTranslationData.map((item,index)=>(
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow ">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{item.lang}</span>
                    <span className="text-xs text-slate-500">{item.user}</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3 italic">{item.from}</p>
                  <div className="border-t border-slate-200 pt-3">
                    <p className="text-sm text-green-700 font-medium">{item.to}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* features section  */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {
              features.map((feature,index)=>(
                <div key={index} className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* cta section  */}
        <div className="bg-linear-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Support?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies using VoiceAI to provide instant multilingual support to their customers.
          </p>
          <Button
            label="Start Your Free Trial"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          />
        </div>


      </LayoutContainer>
    </div>
  )
}

export default VoiceTranslator