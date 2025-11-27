import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Brain, Camera, TrendingUp, Shield, Users, DollarSign, Trophy } from 'lucide-react';

const Slide = ({ children, gradient }) => (
  <div className={`w-full h-full flex flex-col justify-center items-center p-12 ${gradient}`}>
    {children}
  </div>
);

const slides = [
  // Title Slide
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <Trophy className="w-32 h-32 text-yellow-300 animate-bounce" />
          </div>
          <h1 className="text-8xl font-black text-white tracking-tight drop-shadow-2xl">
            AiGrow
          </h1>
          <p className="text-4xl font-bold text-emerald-100">
            vs Competition
          </p>
          <div className="pt-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <p className="text-3xl font-bold text-white">
                The Future of Smart Farming
              </p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  
  // Multi-Modal Intelligence
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-5xl space-y-12">
          <div className="flex items-center gap-6">
            <Brain className="w-24 h-24 text-yellow-300" />
            <h2 className="text-7xl font-black text-white">
              Multi-Modal AI
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-4 border-emerald-400">
              <h3 className="text-4xl font-bold text-emerald-300 mb-6">✅ AiGrow</h3>
              <ul className="space-y-4 text-2xl text-white">
                <li>📹 Camera Vision (40%)</li>
                <li>🌡️ Sensors (40%)</li>
                <li>🌦️ Weather (20%)</li>
                <li>🧠 Gemini 2.0 Flash</li>
                <li>🎯 80%+ Confidence</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-4 border-red-400 opacity-75">
              <h3 className="text-4xl font-bold text-red-300 mb-6">❌ Competitor</h3>
              <ul className="space-y-4 text-2xl text-gray-300">
                <li>📝 Text Only</li>
                <li>📊 Basic Sensors</li>
                <li>☁️ Weather API</li>
                <li>🤖 GPT-3.5 (maybe)</li>
                <li>❓ No Confidence Score</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  
  // Future Prediction
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-5xl space-y-12">
          <div className="flex items-center gap-6">
            <TrendingUp className="w-24 h-24 text-yellow-300" />
            <h2 className="text-7xl font-black text-white">
              Predicts Future
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border-4 border-yellow-400">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-6xl font-black text-yellow-300 mb-4">7</p>
                <p className="text-2xl font-bold text-white">Days Ahead</p>
              </div>
              <div>
                <p className="text-6xl font-black text-yellow-300 mb-4">30</p>
                <p className="text-2xl font-bold text-white">Day Trends</p>
              </div>
              <div>
                <p className="text-6xl font-black text-yellow-300 mb-4">3</p>
                <p className="text-2xl font-bold text-white">Data Sources</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-red-300">
              ❌ Competitor: NO Prediction (Reactive Only)
            </p>
          </div>
        </div>
      </Slide>
    )
  },
  
  // Self-Healing
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-5xl space-y-12">
          <div className="flex items-center gap-6">
            <Zap className="w-24 h-24 text-yellow-300" />
            <h2 className="text-7xl font-black text-white">
              True Automation
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border-4 border-yellow-400">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-3xl">1</div>
                <p className="text-3xl font-bold text-white">AI Detects Issue</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-3xl">2</div>
                <p className="text-3xl font-bold text-white">Suggests Solution</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-3xl">3</div>
                <p className="text-3xl font-bold text-white">You Approve</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">✓</div>
                <p className="text-3xl font-bold text-yellow-300">Auto-Controls Devices!</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-red-300">
              ❌ Competitor: Alerts Only (No Action)
            </p>
          </div>
        </div>
      </Slide>
    )
  },
  
  // CCTV Integration
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        <div className="max-w-5xl space-y-12">
          <div className="flex items-center gap-6">
            <Camera className="w-24 h-24 text-yellow-300" />
            <h2 className="text-7xl font-black text-white">
              Vision System
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center">
              <p className="text-5xl mb-4">📹</p>
              <p className="text-2xl font-bold text-white">Dahua ONVIF</p>
              <p className="text-xl text-emerald-300 mt-2">Any IP Camera</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center">
              <p className="text-5xl mb-4">⏰</p>
              <p className="text-2xl font-bold text-white">Every 30 Min</p>
              <p className="text-xl text-emerald-300 mt-2">Auto-Analysis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center">
              <p className="text-5xl mb-4">📺</p>
              <p className="text-2xl font-bold text-white">RTSP Stream</p>
              <p className="text-xl text-emerald-300 mt-2">Live Video</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-red-300">
              ❌ Competitor: Probably No Camera Support
            </p>
          </div>
        </div>
      </Slide>
    )
  },
  
  // Community & Gamification
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
        <div className="max-w-5xl space-y-12">
          <div className="flex items-center gap-6">
            <Users className="w-24 h-24 text-white" />
            <h2 className="text-7xl font-black text-white">
              Community Power
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">🎮 Gamification</h3>
              <ul className="space-y-3 text-2xl text-white">
                <li>🪙 Earn Credits</li>
                <li>🏆 Leaderboards</li>
                <li>🔥 Daily Streaks</li>
                <li>🎖️ Achievements</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">👥 Community</h3>
              <ul className="space-y-3 text-2xl text-white">
                <li>📤 Share Solutions</li>
                <li>⭐ Expert Verified</li>
                <li>🧠 Collective Learning</li>
                <li>🎁 Earn Rewards</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-red-300">
              ❌ Competitor: Zero Engagement Features
            </p>
          </div>
        </div>
      </Slide>
    )
  },
  
  // Cost Comparison
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600">
        <div className="max-w-5xl space-y-12">
          <div className="flex items-center gap-6">
            <DollarSign className="w-24 h-24 text-yellow-300" />
            <h2 className="text-7xl font-black text-white">
              10x Cheaper
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-emerald-500/20 backdrop-blur-md rounded-3xl p-12 border-4 border-emerald-400 text-center">
              <p className="text-3xl font-bold text-emerald-300 mb-4">AiGrow</p>
              <p className="text-8xl font-black text-white mb-4">RM35</p>
              <p className="text-2xl text-emerald-200">per month (50 users)</p>
              <div className="mt-8 space-y-2 text-xl text-white">
                <p>✅ All Features</p>
                <p>✅ Unlimited Scalability</p>
                <p>✅ 99% Cheaper Than IoT</p>
              </div>
            </div>
            
            <div className="bg-red-500/20 backdrop-blur-md rounded-3xl p-12 border-4 border-red-400 text-center opacity-75">
              <p className="text-3xl font-bold text-red-300 mb-4">Competitor</p>
              <p className="text-8xl font-black text-gray-300 mb-4">RM200+</p>
              <p className="text-2xl text-red-200">per month (estimated)</p>
              <div className="mt-8 space-y-2 text-xl text-gray-300">
                <p>❌ Basic Features</p>
                <p>❌ Linear Scaling Costs</p>
                <p>❌ Unknown ROI</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  
  // Final Slide
  {
    component: () => (
      <Slide gradient="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="text-center space-y-12">
          <div className="inline-block">
            <Shield className="w-32 h-32 text-yellow-300" />
          </div>
          <h1 className="text-8xl font-black text-white tracking-tight">
            Why We Win
          </h1>
          
          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-3xl font-bold text-yellow-300">🎯 Prevention</p>
              <p className="text-xl text-white mt-2">Not Reaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-3xl font-bold text-yellow-300">🇲🇾 Malaysian</p>
              <p className="text-xl text-white mt-2">Weather Adapted</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-3xl font-bold text-yellow-300">🧠 True AI</p>
              <p className="text-xl text-white mt-2">Multi-Modal Fusion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-3xl font-bold text-yellow-300">💰 Cost Effective</p>
              <p className="text-xl text-white mt-2">10x Cheaper</p>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-5xl font-black text-white">
              They Have a Chatbot
            </p>
            <p className="text-6xl font-black text-yellow-300 mt-4">
              We Have Intelligence
            </p>
          </div>
          
          <div className="pt-8">
            <div className="inline-block bg-emerald-500 px-12 py-6 rounded-2xl">
              <p className="text-4xl font-black text-white">
                95% Confidence in Winning 🏆
              </p>
            </div>
          </div>
        </div>
      </Slide>
    )
  }
];

export default function AiGrowPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const SlideComponent = slides[currentSlide].component;

  return (
    <div className="w-full h-screen bg-gray-900 relative overflow-hidden">
      <SlideComponent />
      
      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
      
      {/* Slide Counter */}
      <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-xl font-bold">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
