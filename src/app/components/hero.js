'use client'
import React from 'react';
import {useRouter} from 'next/navigation';

export default function PsychologyLandingPage() {
  const router = useRouter()
  
  const handleClick = () => {
    router.push('/form')
  }
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url(/images/oceanhero.jpg)`,
             backgroundAttachment: 'fixed'
           }}>
        {/* Overlay to match the exact color tone from your image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/70 via-cyan-800/60 to-teal-900/70"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 p-4 md:p-8 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center max-w-7xl mx-auto">
          {/* Simple geometric logo */}
          <div className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex items-center justify-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 10 10s10-4.45 10-10V7L12 2z"/>
              <path d="M12 22V12L2 7"/>
              <path d="M12 22V12L22 7"/>
            </svg>
          </div>
          <div>
            <h1 className="text-slate-700 text-base md:text-lg font-light">Dr. Serena Blake, PsyD</h1>
            <p className="text-slate-600 text-xs md:text-sm font-light">Clinical Psychologist</p>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 md:mb-4 leading-tight">
            Find Clarity and Compassion on
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-8 md:mb-12 leading-tight">
            Your Journey to Well-Being
          </h2>
          
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-8 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
            Experience personalized, professional counselling in a safe and supportive space, where your story is heard and your growth is our priority
          </p>
          
          <button className="bg-teal-200/90 hover:bg-teal-200 text-teal-900 font-medium py-3 px-8 md:py-4 md:px-12 rounded-full text-base md:text-lg transition-all duration-300 backdrop-blur-sm border border-teal-300/50 hover:border-teal-400 shadow-lg hover:shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto"
            onClick={handleClick}
          >
            GET IN TOUCH
          </button>
        </div>
      </main>
    </div>
  );
}