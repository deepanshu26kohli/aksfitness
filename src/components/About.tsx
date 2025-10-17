import { Target, Users, Award, TrendingUp } from 'lucide-react';
import img from "../assets/images/aboutus.jpg"
export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empowering individuals to achieve their fitness goals through expert guidance and world-class facilities.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive environment where everyone motivates each other to push beyond limits.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Certified trainers and state-of-the-art equipment ensuring you get the best fitness experience.',
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Proven track record of transforming lives through personalized training and nutrition programs.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Welcome to <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">Aks Fitness</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Founded with a passion for fitness and a commitment to excellence, Aks Fitness has been transforming lives for over a decade. We're not just a gym; we're a lifestyle destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative  rounded-2xl overflow-hidden">
              <img
                src={img}
                alt="Gym Interior"
                className="w-full h-full object-contain"
               
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p className="text-gray-400 leading-relaxed">
              Aks Fitness was born from a simple belief: everyone deserves access to premium fitness facilities and expert guidance. What started as a small training center has grown into a thriving community of fitness enthusiasts.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, we pride ourselves on offering cutting-edge equipment, diverse training programs, and a team of certified professionals who are dedicated to helping you achieve your goals.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-500 border-2 border-gray-900"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-500 border-2 border-gray-900"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-500 border-2 border-gray-900"></div>
              </div>
              <div>
                <p className="text-white font-semibold">500+ Happy Members</p>
                <p className="text-gray-400 text-sm">Join our fitness family</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:to-amber-600/10 rounded-xl transition-all duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
