import { Check, Star } from 'lucide-react';

export default function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: '1000',
      description: 'Perfect for getting started',
      features: [
        'Access to gym floor',
        'Cardio equipment',
        'Free weights area',
        'Locker room access',
        'Open gym hours',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '1500',
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Group fitness classes',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)',
      ],
      popular: true,
    },
    {
      name: 'VIP',
      price: '5000',
      description: 'Ultimate fitness experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Private locker',
        'Towel service',
        'Exclusive VIP area',
        'Massage therapy (1/month)',
        '24/7 gym access',
        'Unlimited guest passes',
      ],
      popular: false,
    },
  ];

  return (
    <section id="membership" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Membership Plans</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Choose Your <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">Perfect Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and budget. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? 'md:-mt-4 md:mb-0' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border ${
                  plan.popular ? 'border-amber-500/50' : 'border-white/10'
                } rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 ${
                  plan.popular ? 'hover:scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:to-amber-600/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-white">Rs.{plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 hover:shadow-2xl hover:shadow-amber-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">All Plans Include</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  0
                </div>
                <div className="text-sm">Joining Fee</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm">Support Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  30
                </div>
                <div className="text-sm">Day Money Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
