'use client';

import { useState } from 'react';

export default function TherapyFAQ() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
      answer: "CBT-I is typically delivered over 6-8 sessions and includes several key components: sleep education, sleep hygiene, stimulus control therapy, sleep restriction therapy, cognitive restructuring, and relapse prevention. The treatment focuses on changing behaviors and thoughts that interfere with sleep, establishing healthy sleep patterns, and addressing underlying beliefs about sleep that may perpetuate insomnia."
    },
    {
      question: "Do you treat children or adolescents?",
      answer: "Yes, I provide therapy services for children, adolescents, and adults. My approach is adapted to be age-appropriate, using play therapy techniques for younger children and incorporating family involvement when beneficial. I specialize in treating anxiety, depression, behavioral issues, and sleep disorders across all age groups."
    },
    {
      question: "Which geographic regions do you serve?",
      answer: "I currently provide services to clients located in Los Angeles. For telehealth sessions, I can work with clients anywhere within the state where I maintain licensure. Please contact me to confirm if I can provide services in your specific location, as licensing requirements vary by state."
    },
    {
      question: "Do you offer in-person sessions?",
      answer: "Yes, I offer both in-person and virtual therapy sessions. In-person sessions are conducted at my office located in [City/Address]. I maintain a comfortable, private, and professional environment designed to support your therapeutic goals. Please let me know your preference when scheduling."
    },
    {
      question: "What technology do we use for virtual sessions?",
      answer: "I use zoom Meeting platform that ensures your privacy and security. The platform is accessible through any web browser or mobile app, requiring no special software downloads. You'll receive a secure link before each session. I also provide technical support to ensure smooth virtual sessions."
    },
    {
      question: "What are your hours?",
      answer: "I offer flexible scheduling to accommodate different needs. My typical hours are In-person: Tue & Thu, 10 AM - 6 PM, and Virtual via Zoom: Mon, Wed & Fri, 1 PM - 5 PM with some evening and weekend appointments available. I understand that finding time for therapy can be challenging, so I work with clients to find mutually convenient appointment times."
    },
    {
      question: "Is online session available?",
      answer: "Yes—all virtual sessions via Zoom."  
    },
    {
      question: "Do you take insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "What is the cost of therapy?",
      answer: "Session fees vary depending on the type and length of service. Individual therapy sessions are typically $200 for 60 minutes, and couples session are for $240 for 60 minutes."
    },
    {
      question: "What are the benefits of private pay therapy?",
      answer: "Private pay therapy offers several advantages: no insurance pre-authorization requirements, complete privacy (no diagnosis required in insurance records), flexible session length and frequency, broader range of treatment approaches, no network restrictions, and typically faster scheduling. This allows for more personalized treatment tailored specifically to your needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Yes there is but a 24-hour notice is required."  
    }
  ];

  return (
    <div className="min-h-screen bg-[#e2ffff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-800 mb-8">
            Frequently Asked Questions
          </h1>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-700 mb-12">Therapy</h2>
          
          <div className="space-y-1">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center py-6 text-left transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full border  hover:bg-gray-50 border-gray-300 flex items-center justify-center">
                      <div className={`transform transition-transform duration-200 ${expandedItems[index] ? 'rotate-90' : ''}`}>
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg text-gray-700 font-light flex-1">
                    {item.question}
                  </span>
                </button>
                
                {expandedItems[index] && (
                  <div className="pb-6 pl-12">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}