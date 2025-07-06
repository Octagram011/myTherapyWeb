import React from 'react'
import Image from 'next/image'

export default function AreasOfFocus() {
  return (
    <div className="bg-[#e2ffff] min-h-screen py-4 px-3 2xs:py-6 2xs:px-4 xs:py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-lg leading-tight font-light text-center text-stone-700 mb-6 tracking-wide px-2
                       2xs:text-xl 2xs:mb-8
                       xs:text-2xl xs:mb-10 
                       sm:text-3xl sm:mb-12 
                       md:text-4xl md:mb-16 
                       lg:text-5xl lg:mb-20
                       xl:text-6xl xl:mb-24
                       2xl:text-7xl 2xl:mb-28">
          What We Help People With
        </h1>
        
        {/* Focus Areas - Mobile First Approach */}
        <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16 2xl:gap-20">
          
          {/* Healthcare Providers */}
          <div className="text-center flex flex-col items-center max-w-md mx-auto w-full">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0
                           2xs:w-36 2xs:h-36 2xs:mb-5
                           xs:w-40 xs:h-40 xs:mb-6 xs:shadow-xl
                           sm:w-44 sm:h-44 sm:mb-7
                           md:w-48 md:h-48 md:mb-8
                           lg:w-52 lg:h-52 lg:mb-8
                           xl:w-56 xl:h-56 xl:mb-9
                           2xl:w-64 2xl:h-64 2xl:mb-10">
              <Image
                src="/images/handandphone.jpg"
                alt="Healthcare provider at work"
                fill
                sizes="(max-width: 359px) 128px, (max-width: 475px) 144px, (max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, (max-width: 1280px) 208px, (max-width: 1536px) 224px, 256px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="px-2 w-full">
              <h2 className="text-sm font-medium text-stone-800 mb-2 leading-tight
                            2xs:text-base 2xs:mb-3
                            xs:text-lg xs:mb-3
                            sm:text-xl sm:mb-4
                            md:text-xl
                            lg:text-lg
                            xl:text-xl
                            2xl:text-2xl 2xl:mb-5">
                Anxiety & Stress Management 
              </h2>
              <p className="text-stone-600 text-xs leading-relaxed
                           2xs:text-sm
                           xs:text-sm
                           sm:text-base
                           md:text-base
                           lg:text-sm
                           xl:text-base
                           2xl:text-lg 2xl:leading-relaxed">
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
          <div className="text-center flex flex-col items-center max-w-md mx-auto w-full">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0
                           2xs:w-36 2xs:h-36 2xs:mb-5
                           xs:w-40 xs:h-40 xs:mb-6 xs:shadow-xl
                           sm:w-44 sm:h-44 sm:mb-7
                           md:w-48 md:h-48 md:mb-8
                           lg:w-52 lg:h-52 lg:mb-8
                           xl:w-56 xl:h-56 xl:mb-9
                           2xl:w-64 2xl:h-64 2xl:mb-10">
              <Image
                src="/images/handsholdingflowers.jpg"
                alt="Hands holding orange flower"
                fill
                sizes="(max-width: 359px) 128px, (max-width: 475px) 144px, (max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, (max-width: 1280px) 208px, (max-width: 1536px) 224px, 256px"
                className="object-cover"
              />
            </div>
            <div className="px-2 w-full">
              <h2 className="text-sm font-medium text-stone-800 mb-2 leading-tight
                            2xs:text-base 2xs:mb-3
                            xs:text-lg xs:mb-3
                            sm:text-xl sm:mb-4
                            md:text-xl
                            lg:text-lg
                            xl:text-xl
                            2xl:text-2xl 2xl:mb-5">
                Trauma Recovery
              </h2>
              <p className="text-stone-600 text-xs leading-relaxed
                           2xs:text-sm
                           xs:text-sm
                           sm:text-base
                           md:text-base
                           lg:text-sm
                           xl:text-base
                           2xl:text-lg 2xl:leading-relaxed">
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
          <div className="text-center flex flex-col items-center max-w-md mx-auto w-full md:col-span-2 xl:col-span-1">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0
                           2xs:w-36 2xs:h-36 2xs:mb-5
                           xs:w-40 xs:h-40 xs:mb-6 xs:shadow-xl
                           sm:w-44 sm:h-44 sm:mb-7
                           md:w-48 md:h-48 md:mb-8
                           lg:w-52 lg:h-52 lg:mb-8
                           xl:w-56 xl:h-56 xl:mb-9
                           2xl:w-64 2xl:h-64 2xl:mb-10">
              <Image
                src="/images/handswithflag.jpg"
                alt="Hands holding American flag"
                fill
                sizes="(max-width: 359px) 128px, (max-width: 475px) 144px, (max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, (max-width: 1280px) 208px, (max-width: 1536px) 224px, 256px"
                className="object-cover"
              />
            </div>
            <div className="px-2 w-full">
              <h2 className="text-sm font-medium text-stone-800 mb-2 leading-tight
                            2xs:text-base 2xs:mb-3
                            xs:text-lg xs:mb-3
                            sm:text-xl sm:mb-4
                            md:text-xl
                            lg:text-lg
                            xl:text-xl
                            2xl:text-2xl 2xl:mb-5">
                Relationship Counseling 
              </h2>
              <p className="text-stone-600 text-xs leading-relaxed
                           2xs:text-sm
                           xs:text-sm
                           sm:text-base
                           md:text-base
                           lg:text-sm
                           xl:text-base
                           2xl:text-lg 2xl:leading-relaxed">
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