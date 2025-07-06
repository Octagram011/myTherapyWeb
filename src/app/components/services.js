import React from 'react'
import Image from 'next/image'

export default function AreasOfFocus() {
  return (
    <div className="bg-[#e2ffff] min-h-screen py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center text-stone-700 mb-8 sm:mb-12 md:mb-16 lg:mb-20 tracking-wide px-2">
          What We Help People With
        </h1>
        
        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Healthcare Providers */}
          <div className="text-center flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0">
              <Image
                src="/images/handandphone.jpg"
                alt="Healthcare provider at work"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="max-w-sm mx-auto px-2">
              <h2 className="text-lg sm:text-xl font-medium text-stone-800 mb-3 sm:mb-4 leading-tight">
                Anxiety & Stress Management 
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                The care you provide for others may be driving you to seek therapy, 
                whether due to burnout, compassion fatigue, imposter syndrome, 
                people-pleasing tendencies, or perfectionism. Whether you're in pre-professional 
                school, undergoing training, or reflecting on a long career 
                in healthcare, we can address the unique stressors of your 
                professional environment along with any challenges you may be 
                facing in other areas of your life.
              </p>
            </div>
          </div>

          {/* Trauma and Grief */}
          <div className="text-center flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0">
              <Image
                src="/images/handsholdingflowers.jpg"
                alt="Hands holding orange flower"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-cover"
              />
            </div>
            <div className="max-w-sm mx-auto px-2">
              <h2 className="text-lg sm:text-xl font-medium text-stone-800 mb-3 sm:mb-4 leading-tight">
                Trauma Recovery
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Life's challenges, whether a difficult childhood, a traumatic event or 
                series of events, or the loss of someone or something deeply 
                meaningful, can lead to profound experiences of trauma and grief. 
                Therapy offers a supportive space to process these experiences, care 
                for yourself amidst painful thoughts and emotions, and work toward a 
                sense of grounding and meaning.
              </p>
            </div>
          </div>

          {/* Second Generation Individuals */}
          <div className="text-center flex flex-col items-center sm:col-span-2 lg:col-span-1">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0">
              <Image
                src="/images/handswithflag.jpg"
                alt="Hands holding American flag"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-cover"
              />
            </div>
            <div className="max-w-sm mx-auto px-2">
              <h2 className="text-lg sm:text-xl font-medium text-stone-800 mb-3 sm:mb-4 leading-tight">
                Relationship Counseling 
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Second-generation individuals in immigrant families, born in the U.S. 
                to at least one parent born abroad, often navigate the complexities of 
                multiple cultures and diverse expectations. This experience can bring 
                challenges such as feeling like a foreigner in your own country and 
                navigating strained family relationships. Therapy offers a supportive 
                space to explore and process this unique aspect of your identity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}