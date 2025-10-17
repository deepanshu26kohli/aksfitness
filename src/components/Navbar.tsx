import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import logo from "../assets/images/logo.jpg"
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Membership', id: 'membership' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logo} className="w-12 h-12" alt="" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
                AKS FITNESS
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg hover:shadow-amber-500/50"
            >
              Join Now
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-200"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
