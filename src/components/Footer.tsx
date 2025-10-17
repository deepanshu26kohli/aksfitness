import { Dumbbell, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', id: 'hero' },
      { name: 'About Us', id: 'about' },
      { name: 'Services', id: 'services' },
      { name: 'Membership', id: 'membership' },
    ],
    'Resources': [
      { name: 'Gallery', id: 'gallery' },
      { name: 'Testimonials', id: 'testimonials' },
      { name: 'Contact', id: 'contact' },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
                AKS FITNESS
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your body and mind at Aks Fitness. Join our community of dedicated athletes and fitness enthusiasts committed to excellence.
            </p>
            <div className="flex gap-2">
              <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                Premium
              </span>
              <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                Professional
              </span>
              <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                Results-Driven
              </span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Aks Fitness. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-amber-500 fill-current" />
              <span>for fitness enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
