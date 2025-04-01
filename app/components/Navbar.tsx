import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">AgenticAI</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600">
              Features
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="grid gap-3">
                <Link href="/features" className="block p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">Feature Overview</div>
                  <div className="text-sm text-gray-500">See how AgenticAI helps build AI solutions for your business</div>
                </Link>
                <Link href="/features/agents" className="block p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">AI Agents</div>
                  <div className="text-sm text-gray-500">Automate complex tasks with custom AI agents</div>
                </Link>
                <Link href="/features/workflows" className="block p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">Agent Workflows</div>
                  <div className="text-sm text-gray-500">Connect multiple agents into powerful workflows</div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600">
              Use Cases
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="grid gap-3">
                <Link href="/use-cases/customer-support" className="block p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">Customer Support</div>
                  <div className="text-sm text-gray-500">Handle support tickets automatically</div>
                </Link>
                <Link href="/use-cases/sales" className="block p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">Sales Automation</div>
                  <div className="text-sm text-gray-500">Qualify leads and follow up automatically</div>
                </Link>
                <Link href="/use-cases/marketing" className="block p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">Marketing</div>
                  <div className="text-sm text-gray-500">Generate content and analyze campaigns</div>
                </Link>
              </div>
            </div>
          </div>
          
          <Link href="/integrations" className="py-2 text-gray-700 hover:text-blue-600">
            Integrations
          </Link>
          
          <Link href="/pricing" className="py-2 text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          
          <Link href="/enterprise" className="py-2 text-gray-700 hover:text-blue-600">
            Enterprise
          </Link>
        </nav>
        
        {/* Authentication Links */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-gray-700 hover:text-blue-600">
            Sign in
          </Link>
          <Link href="/contact" className="hidden md:block px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Book a demo
          </Link>
          <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Try for Free
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 