import { useState } from 'react';
import { Volume2, Mic, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import LayoutContainer from '../components/shared/LayoutContainer';
import Footer from '../components/Footer';
import Button from '../components/shared/Button';

const Demo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [translation, setTranslation] = useState('');

  const languages = {
    spanish: { name: 'Spanish', flag: '🇪🇸' },
    french: { name: 'French', flag: '🇫🇷' },
    german: { name: 'German', flag: '🇩🇪' },
    japanese: { name: 'Japanese', flag: '🇯🇵' },
    mandarin: { name: 'Mandarin', flag: '🇨🇳' },
    portuguese: { name: 'Portuguese', flag: '🇵🇹' },
  };

  const sampleTexts: Record<string, { original: string; translated: string }> = {
    spanish: {
      original: 'Hello, how can I help you today?',
      translated: 'Hola, ¿cómo puedo ayudarte hoy?'
    },
    french: {
      original: 'Hello, how can I help you today?',
      translated: 'Bonjour, comment puis-je vous aider aujourd\'hui?'
    },
    german: {
      original: 'Hello, how can I help you today?',
      translated: 'Hallo, wie kann ich dir heute helfen?'
    },
    japanese: {
      original: 'Hello, how can I help you today?',
      translated: 'こんにちは、今日はどのようにお手伝いできますか?'
    },
    mandarin: {
      original: 'Hello, how can I help you today?',
      translated: '你好，我今天能如何帮助你？'
    },
    portuguese: {
      original: 'Hello, how can I help you today?',
      translated: 'Olá, como posso ajudá-lo hoje?'
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setTranscript('');
    setTranslation('');
    // Simulate recording for 2 seconds
    setTimeout(() => {
      setIsRecording(false);
      setTranscript(sampleTexts[selectedLanguage].original);
      setTimeout(() => {
        setTranslation(sampleTexts[selectedLanguage].translated);
      }, 800);
    }, 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translation);
      window.speechSynthesis.speak(utterance);
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      <LayoutContainer>
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Voice Translator <span className="text-indigo-600">Demo</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the power of real-time voice translation. Click the microphone and speak to see VoiceAI translate your message instantly.
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16 border border-slate-200">
          <div className="max-w-3xl mx-auto">
            {/* Language Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Select Target Language
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(languages).map(([key, lang]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedLanguage(key);
                      setTranscript('');
                      setTranslation('');
                    }}
                    className={`p-4 rounded-lg border-2 transition-all font-medium ${
                      selectedLanguage === key
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-slate-200 bg-white text-gray-700 hover:border-indigo-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{lang.flag}</div>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Recording Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={handleStartRecording}
                disabled={isRecording}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all ${
                  isRecording
                    ? 'bg-red-500 animate-pulse'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } disabled:opacity-75`}
              >
                <Mic className="w-6 h-6" />
                {isRecording ? 'Recording...' : 'Click to Speak'}
              </button>
            </div>

            {/* Original Text Display */}
            {transcript && (
              <div className="mb-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">Original (English)</p>
                <p className="text-lg text-blue-800">{transcript}</p>
              </div>
            )}

            {/* Translation Display */}
            {translation && (
              <div className="mb-6 p-6 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">
                  Translation ({languages[selectedLanguage].name})
                </p>
                <p className="text-lg text-green-800 mb-4">{translation}</p>
                <button
                  onClick={handleSpeak}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <Volume2 className="w-4 h-4" />
                  Listen to Translation
                </button>
              </div>
            )}

            {!transcript && !translation && (
              <div className="text-center p-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                <Mic className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600 font-medium">Click the button above and start speaking</p>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-center mb-16">
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

      <Footer />
    </div>
  );
};

export default Demo;
