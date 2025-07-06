import React from 'react';
import Head from 'next/head';

export default function PsychologistPage() {
  return (
    <>
      <Head>
        <title>Jennifer Hahm, Ph.D., Licensed Psychologist</title>
        <meta name="description" content="Professional psychological services by Dr. Jennifer Hahm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="bg-[#e2ffff] flex flex-col" style={{height: '60vh'}}>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-center max-w-2xl flex flex-col justify-center h-full">
            {/* Main title */}
            <h1 className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
              Dr. Serena Blake, PsyD (Clinical Psychologist)
            </h1>

            {/* Contact information */}
            <div className="space-y-2 mb-6">
              <div>
                <a 
                  href="mailto:jennifer@drjenniferhahm.com"
                  className="text-gray-600 hover:text-gray-800 underline text-base"
                >
                  serena@blakepsychology.com
                </a>
              </div>

              <div className="text-gray-600 text-base">
                <span>Phone: </span>
                <a href="tel:2489398150" className="underline hover:text-gray-800">
                  (323) 555-0192
                </a>
              </div>

              <div className="text-gray-600 text-base">
                1287 Maplewood Drive, Los Angeles, CA 90026
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 underline text-base">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 underline text-base">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 underline text-base">
                Good Faith Estimate
              </a>
            </div>

            {/* Client Portal
            <div className="mb-4">
              <a 
                href="#"
                className="text-gray-600 hover:text-gray-800 underline text-lg font-medium"
              >
                Client Portal
              </a>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 px-4">
          <p className="text-gray-500 text-xs">
            © 2025 Dr. Serena Blake, PsyD (Clinical Psychologist), PLLC. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}