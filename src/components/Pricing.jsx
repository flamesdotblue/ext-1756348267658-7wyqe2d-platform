import React from 'react';

const tiers = [
  {
    name: 'Starter Orbit',
    price: '$9,800',
    blurb: 'First-timer friendly. See Earth from above and feel weightless.',
    features: ['Preflight training', 'Window seat guarantee', 'Microgravity session', 'In-flight photo package'],
    highlight: false,
  },
  {
    name: 'Explorer',
    price: '$18,500',
    blurb: 'Longer orbit, more time to float, and a sunrise above the clouds.',
    features: ['Priority boarding', 'Panoramic cabin', 'Extended orbit path', 'Astro-guide on board'],
    highlight: true,
  },
  {
    name: 'Lunar Flyby',
    price: '$49,000',
    blurb: 'A breathtaking pass around the Moon—bring your best camera.',
    features: ['Two-night prep stay', 'Private stargazing dome', 'Deep-space comms patch', 'Collector flight suit'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Reasonable Prices. Unreal Views.</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          We optimize launch windows, reusability, and cabin design—so you pay less for more cosmos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`${t.highlight ? 'border-fuchsia-400/40 bg-gradient-to-br from-fuchsia-500/5 to-cyan-400/5' : 'border-white/10 bg-white/5'} rounded-2xl border p-6 backdrop-blur`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              {t.highlight && (
                <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-2 py-1 text-xs text-fuchsia-200">Best Value</span>
              )}
            </div>
            <p className="mt-2 text-sm text-white/70">{t.blurb}</p>
            <div className="mt-6 text-4xl font-bold">
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">{t.price}</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium transition ${t.highlight ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black hover:opacity-90' : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'}`}
            >
              Book this trip
            </a>
          </div>
        ))}
      </div>

      <div id="contact" className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
        <p className="text-white/80">
          Want a custom itinerary or a private cabin? Email crew@nebulavoyages.space and our flight specialists
          will chart your path.
        </p>
      </div>
    </section>
  );
}
