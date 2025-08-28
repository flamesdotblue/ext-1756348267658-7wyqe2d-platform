import React from 'react';

const tiers = [
  {
    name: 'Explorer',
    price: '$49,000',
    tagline: 'Suborbital taste of space',
    features: ['2-hour training', '90-minute suborbital flight', 'Window seat & photo package', 'Flexible rebooking'],
    highlight: false,
  },
  {
    name: 'Pioneer',
    price: '$199,000',
    tagline: '3-day orbital getaway',
    features: ['2-week preparation', 'Private cabin (2 berths)', 'Zero-G dining & cinema', 'Aurora and sunrise arcs'],
    highlight: true,
  },
  {
    name: 'Odyssey',
    price: '$499,000',
    tagline: 'Lunar loop experience',
    features: ['4-week preparation', 'Window suite', 'Lunar periapsis pass', 'Concierge astrophotography'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-br from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Transparent pricing, stellar value
        </h2>
        <p className="mt-3 text-white/70">
          Our packages include training, suits, insurance, and mission support. Finance options available for qualified travelers.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative overflow-hidden rounded-2xl border bg-white/5 p-6 backdrop-blur shadow-2xl shadow-black/40 ${t.highlight ? 'border-fuchsia-400/50 ring-2 ring-fuchsia-400/30' : 'border-white/10'}`}
          >
            {t.highlight && (
              <div className="absolute right-3 top-3 rounded-full border border-fuchsia-300/30 bg-fuchsia-500/20 px-3 py-1 text-xs font-medium text-fuchsia-100">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
            <p className="mt-1 text-sm text-white/70">{t.tagline}</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">{t.price}</span>
              <span className="text-xs text-white/50">per traveler</span>
            </div>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="text-sm text-white/80">
                  • {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${t.highlight ? 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-black hover:brightness-110' : 'border border-white/15 bg-black/40 text-white hover:bg-white/10'}`}
            >
              Reserve Spot
            </a>
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-400/20 via-cyan-400/20 to-indigo-400/20 blur-2xl" />
          </div>
        ))}
      </div>

      <div className="mt-14 grid items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur sm:grid-cols-3 sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">Safety First</p>
          <p className="mt-1 text-xs text-white/70">Launch partners with 99.9% mission success, real-time health monitoring, and redundant systems.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Training Included</p>
          <p className="mt-1 text-xs text-white/70">From centrifuge to capsule etiquette—arrive ready for zero-G like a pro.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Flexible Finance</p>
          <p className="mt-1 text-xs text-white/70">Installment plans and group rates available for families and teams.</p>
        </div>
      </div>
    </div>
  );
}
