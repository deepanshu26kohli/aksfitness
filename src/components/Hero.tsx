import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-amber-600/20 to-amber-600/20 backdrop-blur-sm border border-amber-600/30 text-amber-400 px-6 py-2 rounded-full text-sm font-semibold">
              Premium Fitness Experience
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Transform Your Body.
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-clip-text text-transparent">
              Transform Your Life.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Train with elite professionals at Aks Fitness Gym. Where dedication meets transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('membership')}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 flex items-center gap-2"
            >
              Join Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Book Free Trial
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-400">Expert Trainers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-gray-400">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-amber-500 to-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
