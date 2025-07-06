import React from 'react'
import Image from 'next/image'

export default function AreasOfFocus() {
  return (
    <div className="bg-[#e2ffff] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-light text-center text-stone-700 mb-20 tracking-wide">
          What We Help People With
        </h1>
        
        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Healthcare Providers */}
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/handandphone.jpg"
                alt="Healthcare provider at work"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h2 className="text-xl font-medium text-stone-800 mb-4 leading-tight">
              Anxiety & Stress Management 
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
              The care you provide for others may be driving you to seek therapy, 
              whether due to burnout, compassion fatigue, imposter syndrome, 
              people-pleasing tendencies, or perfectionism. Whether you're in pre-professional 
              school, undergoing training, or reflecting on a long career 
              in healthcare, we can address the unique stressors of your 
              professional environment along with any challenges you may be 
              facing in other areas of your life.
            </p>
          </div>

          {/* Trauma and Grief */}
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/handsholdingflowers.jpg"
                alt="Hands holding orange flower"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-medium text-stone-800 mb-4 leading-tight">
              Trauma Recovery
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
              Life's challenges, whether a difficult childhood, a traumatic event or 
              series of events, or the loss of someone or something deeply 
              meaningful, can lead to profound experiences of trauma and grief. 
              Therapy offers a supportive space to process these experiences, care 
              for yourself amidst painful thoughts and emotions, and work toward a 
              sense of grounding and meaning.
            </p>
          </div>

          {/* Second Generation Individuals */}
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/handswithflag.jpg"
                alt="Hands holding American flag"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-medium text-stone-800 mb-4 leading-tight">
              Relationship Counseling 
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
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
  )
}