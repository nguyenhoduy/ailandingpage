import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold text-blue-600 mb-4 block">
              AgenticAI
            </Link>
            <p className="text-gray-500 mb-6">
              AI agents that simplify and automate complex workflows for small and medium businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-500 hover:text-blue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-500 hover:text-blue-600">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-500 hover:text-blue-600">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-500 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/whats-new" className="text-gray-500 hover:text-blue-600">
                  What's New
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="text-gray-500 hover:text-blue-600">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-500 hover:text-blue-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-500 hover:text-blue-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-gray-500 hover:text-blue-600">
                  Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-600">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-500 hover:text-blue-600">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-500 hover:text-blue-600">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help? */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-gray-500 hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@agentic-ai.com" className="text-gray-500 hover:text-blue-600">
                  support@agentic-ai.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-500 hover:text-blue-600">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 AgenticAI Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-blue-600">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 