import Link from "next/link";
import {
  Award,
  Coffee,
  Gamepad2,
  Laptop,
  ShieldCheck,
  Timer,
  Wifi,
} from "lucide-react";

const serviceHighlights = [
  {
    title: "Ultra-Fast Fibre Internet",
    description:
      "Dedicated fibre backbone delivers up to 300 Mbps symmetrical speeds, perfect for cloud work and HD streaming.",
    icon: Wifi,
  },
  {
    title: "Secure Gaming & Esports Arena",
    description:
      "RGB-lit battle stations with NVIDIA RTX graphics, lag-free play, and weekly tournaments for the Lagos gaming scene.",
    icon: Gamepad2,
  },
  {
    title: "Business Support Suite",
    description:
      "Print, scan, notarise, and host virtual meetings with sound-treated pods and concierge support.",
    icon: ShieldCheck,
  },
];

const loungeZones = [
  {
    title: "Creators Loft",
    features: [
      "24\" 4K monitors with colour calibration",
      "Podcast-ready audio booths",
      "Adobe Creative Cloud enabled",
    ],
  },
  {
    title: "Pro Work Pods",
    features: [
      "Noise-cancelling cabins with AC",
      "Ergonomic seating and sit/stand desks",
      "Wireless charging & USB-C hubs",
    ],
  },
  {
    title: "Esports Pit",
    features: [
      "240Hz curved displays & pro peripherals",
      "High-refresh spectating wall",
      "Coaching and team practice nights",
    ],
  },
];

const membershipPlans = [
  {
    name: "Walk-In Flex",
    price: "₦1,500",
    cadence: "per hour",
    perks: [
      "Any open desk or station",
      "Complimentary filtered water",
      "Premium support on demand",
    ],
  },
  {
    name: "Daily Power Pass",
    price: "₦7,500",
    cadence: "per day",
    perks: [
      "Reserved workstation",
      "1 printing bundle (25 pages)",
      "30 mins in private meeting pod",
    ],
    highlighted: true,
  },
  {
    name: "Pro Monthly",
    price: "₦85,000",
    cadence: "per month",
    perks: [
      "Locker + mail handling",
      "Unlimited meeting pod access",
      "Night Owl access (11pm - 6am)",
    ],
  },
];

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Product Designer, Yaba",
    quote:
      "CyberHub Cafe is the only place where I can brainstorm with my team, game with friends, and host a crisp Zoom call in one evening.",
  },
  {
    name: "Seyi A.",
    role: "Startup Founder, Lekki",
    quote:
      "The fibre speeds are insane and the tech staff understand exactly what Lagos founders need to stay productive.",
  },
  {
    name: "Rahman M.",
    role: "Esports Athlete, Surulere",
    quote:
      "Tournament nights are electric. Zero lag, pro gear, and the crowd energy you only feel at CyberHub.",
  },
];

const stats = [
  { label: "Average Speed", value: "300 Mbps" },
  { label: "Work Pods", value: "18 Pods" },
  { label: "Gaming Setups", value: "24 Rigs" },
  { label: "Power Uptime", value: "24/7 Solar + Grid" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 via-slate-900 to-emerald-900/30 blur-3xl" />
      <div className="absolute -top-24 left-1/2 hidden h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-500/40 blur-3xl md:block" />

      <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-2xl font-semibold text-slate-900">
              C
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-tight">
                CyberHub Cafe
              </p>
              <p className="text-sm text-slate-400">
                Lagos • Abuja • Port Harcourt
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#zones" className="transition hover:text-emerald-300">
              Zones
            </Link>
            <Link href="#plans" className="transition hover:text-emerald-300">
              Pricing
            </Link>
            <Link href="#testimonials" className="transition hover:text-emerald-300">
              Voices
            </Link>
            <Link href="#contact" className="transition hover:text-emerald-300">
              Visit
            </Link>
          </div>

          <a
            href="https://wa.me/2348130000000?text=Hi%20CyberHub%20Cafe!%20I'd%20love%20to%20book%20a%20visit."
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Reserve a Seat
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <section className="grid gap-12 md:grid-cols-[3fr_2fr] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200">
              Nigeria&apos;s Next-Gen Cyber Cafe
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Fast internet, future-ready spaces, and the pulse of Nigeria’s
              tech community.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              CyberHub Cafe blends the energy of an esports lounge with the
              focus of a premium co-working studio. Drop in for lightning-fast
              connectivity, stay for craft refreshments, and plug into a network
              of creators, founders, and gamers shaping tomorrow.
            </p>
            <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center">
              <a
                href="https://wa.me/2348130000000?text=Hi%20CyberHub%20Cafe!%20I'd%20love%20to%20schedule%20a%20tour."
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300 md:w-auto"
              >
                Book a Tour
              </a>
              <a
                href="#plans"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/30 px-6 py-3 font-semibold text-emerald-200 transition hover:border-emerald-200 md:w-auto"
              >
                View Memberships
              </a>
            </div>

            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 pb-4 md:border-0 md:border-r md:pb-0 md:last:border-r-0 md:last:pb-0"
                >
                  <p className="text-sm uppercase tracking-widest text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-emerald-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-transparent p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#34d39933,_transparent_60%)]" />
            <div className="relative z-10 space-y-8">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
                Why CyberHub
              </p>
              <ul className="space-y-6">
                {serviceHighlights.map((service) => (
                  <li key={service.title} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-200">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="zones" className="space-y-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Curated zones for every digital mission.
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                From enterprise-grade work pods to immersive gaming pits, our
                spaces deliver the right ambience, tools, and support for your
                flow state.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-emerald-200" />
                <span>Remote Work</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-emerald-200" />
                <span>Café Lounge</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-emerald-200" />
                <span>Esports</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {loungeZones.map((zone) => (
              <div
                key={zone.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-emerald-300/50 hover:bg-emerald-500/10"
              >
                <div className="absolute -right-16 -top-24 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl transition-transform duration-500 group-hover:-translate-y-8 group-hover:translate-x-6" />
                <h3 className="text-2xl font-semibold text-white">
                  {zone.title}
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-300">
                  {zone.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl">
          <div className="grid gap-12 px-8 py-12 md:grid-cols-2 md:px-16">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Amenities
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Cafè comforts meet enterprise infrastructure.
              </h2>
              <p className="text-slate-300">
                Sip ethically sourced coffee from local roasters while our
                redundant solar-backed power and intelligent cooling maintain
                consistent performance. Every CyberHub is staffed by certified
                network engineers and hospitality experts.
              </p>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Always-On Experience
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Timer className="h-4 w-4 text-emerald-200" /> 24/7 access
                      with biometric entry
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-200" /> CCTV &
                      dedicated security team
                    </li>
                    <li className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-emerald-200" /> Dual ISP failover
                      connections
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Food & Refreshments
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-emerald-200" /> Nitro cold brew &
                      signature mocktails
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-emerald-200" /> Chef-crafted small
                      plates + vegan options
                    </li>
                    <li className="flex items-center gap-2">
                      <Laptop className="h-4 w-4 text-emerald-200" /> Table service in
                      every zone
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(74,222,128,0.25),_transparent_60%)]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  On-site concierge services
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  Need travel visas processed, documents notarised, or a meeting
                  curated? Our concierge team turns errands into simple text
                  messages.
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    Document printing, binding, and scanning
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    Virtual receptionist & call forwarding
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    Business address & mail handling
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    Tech clinics for laptops and peripherals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Fair pricing for freelancers, teams, and night owls.
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Simple memberships with flexible billing. Lock in corporate
                bundles or build custom packages with our concierge.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              <span>Power backed by 14kW solar grid</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {membershipPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 ${
                  plan.highlighted ? "border-emerald-300/60 bg-emerald-400/10 shadow-xl" : ""
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
                    Most Popular
                  </span>
                ) : null}
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm text-slate-300">Perfect for teams who need flexible access with concierge-level support.</p>
                </div>
                <div className="text-4xl font-semibold text-emerald-200">
                  {plan.price}
                  <span className="ml-2 text-base font-medium text-slate-400">
                    {plan.cadence}
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/2348130000000?text=Hi%20CyberHub%20Cafe!%20I'm%20interested%20in%20your%20membership%20plans."
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-emerald-400 text-slate-900 hover:bg-emerald-300"
                      : "border border-emerald-400/30 text-emerald-100 hover:border-emerald-200"
                  }`}
                >
                  Talk to Concierge
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="space-y-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-16"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Lagos trusts CyberHub.
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Makers, players, and business leaders across Nigeria share why
                CyberHub is their basecamp.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-emerald-100">
              <Award className="h-5 w-5" />
              <span>2024 NITDA Innovation Experience Award</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-left shadow-lg"
              >
                <blockquote className="text-sm leading-relaxed text-slate-300">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-base font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-8 shadow-2xl md:grid-cols-[1.2fr_1fr] md:p-16"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Visit CyberHub
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Come experience West Africa’s most ambitious cyber cafe.
            </h2>
            <p className="text-slate-300">
              We&apos;re nestled in the heart of Yaba’s tech cluster with
              dedicated parking, ride-hailing bays, and a steady flow of meetups
              every week.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
                  Address
                </p>
                <p className="mt-3 text-base text-slate-100">
                  42 Akin Adesola Street, Victoria Island, Lagos, Nigeria.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
                  Contact
                </p>
                <p className="mt-3 text-base text-slate-100">
                  <a href="tel:+2348130000000" className="hover:text-emerald-200">
                    +234 813 000 0000
                  </a>
                  <br />
                  <a
                    href="mailto:hello@cyberhub.ng"
                    className="hover:text-emerald-200"
                  >
                    hello@cyberhub.ng
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/5vRPmHpZk8Qq8xUz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200"
              >
                Open in Google Maps
              </a>
              <a
                href="https://wa.me/2348130000000?text=Hi%20CyberHub%20Cafe!%20I'd%20like%20to%20host%20an%20event."
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
              >
                Host an Event
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <iframe
              title="CyberHub Cafe Lagos on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63317.94311027374!2d3.3533656999999996!3d6.4392112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bfc9463d6d7%3A0x3a6b084de64dcf4d!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              className="h-full w-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CyberHub Cafe. Built in Nigeria.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#plans" className="transition hover:text-emerald-200">
              Memberships
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-200"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@cyberhub.ng"
              className="transition hover:text-emerald-200"
            >
              hello@cyberhub.ng
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
