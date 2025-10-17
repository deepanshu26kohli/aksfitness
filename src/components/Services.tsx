import { User, Users, Dumbbell, Zap, Apple } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: User,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers tailored to your specific goals and fitness level.',
      price: 'Rs.5000/session',
      features: ['Customized workout plans', 'Progress tracking', 'Nutrition guidance', 'Flexible scheduling'],
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy group sessions that motivate and challenge you alongside fellow fitness enthusiasts.',
      price: 'Rs.3000/class',
      features: ['Yoga & Pilates', 'HIIT Training', 'Spin Classes', 'Zumba & Dance'],
    },
    {
      icon: Dumbbell,
      title: 'Strength & Conditioning',
      description: 'Build muscle, increase strength, and improve overall athletic performance with expert coaching.',
      price: 'Rs.2500/session',
      features: ['Olympic lifting', 'Powerlifting techniques', 'Muscle building', 'Form correction'],
    },
    {
      icon: Zap,
      title: 'CrossFit Zone',
      description: 'Intense functional fitness workouts that combine weightlifting, cardio, and gymnastics.',
      price: 'Rs.4000/class',
      features: ['WOD programming', 'Competition prep', 'Skill development', 'Community support'],
    },
    {
      icon: Apple,
      title: 'Nutrition Guidance',
      description: 'Personalized meal plans and nutritional counseling to complement your training program.',
      price: 'Rs.6000/month',
      features: ['Meal planning', 'Macro tracking', 'Supplement advice', 'Regular check-ins'],
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Everything You Need to <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From personalized training to group classes, we offer comprehensive fitness solutions designed to help you reach your peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:to-amber-600/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-amber-500 font-bold text-xl">{service.price}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-amber-600/20 to-amber-700/20 border border-amber-600/30 text-amber-400 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Not sure which service is right for you?</p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
