import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    
    {
      name: 'Aashia Aashia',
      role: 'Muscle Building Journey',
      image: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90Bo7pIN0Rvyb_R0Dp-meevt7Q_NxqT5slBu10mDrKqABRHxdo4wHZoiI7JUVdRt6-gEIlTUghzeeEZPaHMM_4NRqqvFnGfAGsL6EvEm4_Dw8gTR-DnT54LaDn32MLCwJbnl9pBOR8X_4DJB=s157-p-k-rw',
      rating: 5,
      text: 'Absolutely loving my time at Aks Fitness Studio! Akshat Sir and the team create such a positive and motivating environment. The gym is amazing, with top-notch equipment and a supportive atmosphere. Akshat Sir’s dedication to helping members achieve their goals is truly inspiring. Definitely recommend for anyone looking to get fit💪',
    },
    {
      name: 'Bhumika Slathia',
      role: 'Fitness Enthusiast',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjV1x_gL8CE4QA5ULiPnaCVvWFUdqOSZoSuLq90yJQ7i-y-R_yY=w90-h90-p-rp-mo-br100',
      rating: 5,
      text: 'I’ve been going to this gym for a while now, it’s been a fantastic experience. The strength training equipment is GREAT. The trainers are incredibly knowledgeable and genuinely care about helping you improve. They push you to go beyond your limits in a supportive way, making every session challenging yet rewarding. The atmosphere is motivating, everyone is there to improve and support each other. I’ve definitely seen progress since joining and highly recommend this gym to anyone looking to take their fitness to the next level!" 🔥',
    },
    {
      name: 'Divyangi Mahajhan',
      role: 'CrossFit Athlete',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjViSd-9hgS9bnil2TzlBXDLwgw1BGm0dwZs2PCuMqFKEnR1dF9M=w90-h90-p-rp-mo-br100',
      rating: 5,
      text: "Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes to train at. The staff are incredibly knowledgeable and welcoming !! It’s easily accessible, air conditioned, with multiple package options.",
    },
    {
      name: 'Krishna',
      role: 'Weight Gain Success',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocKTfg-Gem2jMDC5DjK35PTkRrDusqjHg3i8mN4tCwfA8OokEg=w90-h90-p-rp-mo-br100',
      rating: 5,
      text: "I have a great experience doing this gym and most important the coach here Mr Akshat gupta has an umatchable level of training athletes and i liked it ❤️",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Success <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Hear from members who have transformed their lives at Aks Fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:to-amber-600/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                <div className="flex items-center gap-4 mb-6 pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/50"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600/20 to-amber-600/20 backdrop-blur-sm border border-amber-600/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of members who have already transformed their lives. Your journey starts today.
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
