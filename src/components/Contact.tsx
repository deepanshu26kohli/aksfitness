import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: [' 1st Floor J&K Bank, near HP Petrol Pump, Subash Nagar, Jammu, Jammu and Kashmir 180007'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 5:00 AM - 11:00 PM', 'Sat-Sun: 6:00 AM - 10:00 PM'],
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Get In <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Our Gym</h3>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.7123379888985!2d74.84165834662258!3d32.74682830157386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e85b1fb525833%3A0x23f66b3f1e86f186!2sAKS%20FITNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1760690350137!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm">
                Located in the heart of downtown, easily accessible by public transportation with ample parking available.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </section>
  );
}
