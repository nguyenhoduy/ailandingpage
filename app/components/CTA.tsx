import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Unleash your team's full potential with AI agents that work for you
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
              Try for Free
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Book a demo
            </Link>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-blue-100">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Enterprise support</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>24/7 customer support</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>99.99% uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 