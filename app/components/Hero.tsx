import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI Agents for <span className="text-blue-600">Small and Medium Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Deploy custom AI agents that automate your business workflows, reduce costs, and improve efficiency for your small or medium enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium">
                Try for Free
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center font-medium">
                Book a demo
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              HOSTED IN US 🇺🇸 AND EUROPE 🇪🇺
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="aspect-video bg-blue-600 rounded-lg mb-6 flex items-center justify-center text-white font-medium">
                AI Agent Dashboard Preview
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 rounded-md w-3/4"></div>
                <div className="h-24 bg-gray-100 rounded-md"></div>
                <div className="h-12 bg-gray-100 rounded-md w-1/2"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-indigo-100 w-24 h-24 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 bg-blue-100 w-16 h-16 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 