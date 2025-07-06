import React from 'react';
import Image from 'next/image';

export default function AboutDrHahm() {
  return (
    <div className="min-h-screen bg-[#e2ffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-600 leading-tight">
              About Dr. Serena Blake
            </h1>
            
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p className="text-lg">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-[500px] bg-white rounded-t-full overflow-hidden shadow-lg">
                <Image
                  src="/images/mytherapyabout.jpg"
                  alt="Dr. Jennifer Hahm"
                  width={320}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}