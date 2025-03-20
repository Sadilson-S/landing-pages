import React, { useState } from 'react';
import { 
  Rocket, Code, Zap, Globe, ArrowRight, 
  Shield, Cloud, Cpu, ChevronRight, 
  Github, Twitter, Linkedin, Mail
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Enterprise-grade cloud solutions with 99.9% uptime guarantee",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "AI Integration",
      description: "Advanced artificial intelligence solutions for your business",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Blockchain Technology",
      description: "Secure and transparent blockchain implementations",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-purple-400" />
              <span className="font-bold text-xl">FutureTech</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#solutions" className="hover:text-purple-400 transition-colors">Solutions</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-float">
              <Rocket className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              The Future is Now
            </h1>
            <p className="text-xl text-gray-300">
              Experience the next generation of digital innovation with our cutting-edge solutions
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Code className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Smart Development</h3>
            <p className="text-gray-400">Advanced tools and frameworks for modern development needs</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Zap className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Optimized performance for seamless user experiences</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Globe className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
            <p className="text-gray-400">Built for worldwide deployment and accessibility</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Shield className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-400">Military-grade security protocols and encryption</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Cloud className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
            <p className="text-gray-400">Built for the modern cloud infrastructure</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Cpu className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
            <p className="text-gray-400">Advanced machine learning capabilities</p>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div id="solutions" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 rounded-lg ${
                  activeTab === index ? 'bg-purple-600' : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {solution.title}
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeTab === index ? 'rotate-90' : ''
                  }`} />
                </h3>
                <p className={`text-sm ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
          <div className="md:w-2/3">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src={solutions[activeTab].image}
                alt={solutions[activeTab].title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{solutions[activeTab].title}</h3>
                <p className="text-gray-300">{solutions[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg space-y-2">
            <div className="text-4xl font-bold text-purple-400">100+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg space-y-2">
            <div className="text-4xl font-bold text-purple-400">50k+</div>
            <div className="text-gray-400">Happy Users</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg space-y-2">
            <div className="text-4xl font-bold text-purple-400">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg space-y-2">
            <div className="text-4xl font-bold text-purple-400">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-6">$49<span className="text-lg text-gray-400">/mo</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>Up to 5 projects</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>24/7 support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all">
              Get Started
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-purple-600 backdrop-blur-lg transform scale-105">
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-200">/mo</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-all font-semibold">
              Get Started
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>Custom solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>SLA guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <span>Custom development</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-purple-400 rounded-full hover:bg-purple-400/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-purple-400" />
                <span className="font-bold text-lg">FutureTech</span>
              </div>
              <p className="text-gray-400">Building the future of technology, one innovation at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 FutureTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;