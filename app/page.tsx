import Image from "next/image";
import sebxImage from "@/assets/sebx.jpg";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import Countdown from "@/components/Countdown";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";

const PARTNERS = ["SpaceX", "Cursor", "Neuralink"];

const COLLABORATION = [
  {
    partner: "SpaceX",
    role: "The body",
    body: "Aerospace-grade materials and flight-proven engineering. SebX is built with the same precision that goes into a rocket, so he is light, strong, and made to move.",
  },
  {
    partner: "Cursor",
    role: "The mind",
    body: "The AI at the core of SebX. Cursor brings the intelligence that lets him understand situations, respond to people, and keep learning every day.",
  },
  {
    partner: "Neuralink",
    role: "The connection",
    body: "A neural interface that links SebX to his owner. The Neuro Dog is designed to sense intent and react to you in a way no companion has before.",
  },
];

const CAPABILITIES = [
  {
    index: "01",
    title: "Interacts",
    body: "SebX is envisioned to sense and respond to the world around him, rather than waiting behind a screen for a prompt.",
  },
  {
    index: "02",
    title: "Learns",
    body: "Experience is the input. SebX is designed to pick up new behaviours from the situations and people he encounters.",
  },
  {
    index: "03",
    title: "Evolves",
    body: "A personality that develops over time, so the companion you live with in year two is not the one you unboxed.",
  },
];

const SPECS = [
  { label: "Name", value: "SebX" },
  { label: "Category", value: "Neuro Dog" },
  { label: "Built by", value: "SpaceX × Cursor × Neuralink" },
  { label: "Arriving", value: "Q1 2027" },
];

function PartnerLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {PARTNERS.map((partner, index) => (
        <span key={partner} className="inline-flex items-center gap-3">
          {index > 0 && (
            <span className="font-light text-muted" aria-hidden="true">
              &times;
            </span>
          )}
          <span>{partner}</span>
        </span>
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero -------------------------------------------------------- */}
        <section
          id="overview"
          className="relative overflow-hidden px-6 pt-32 pb-16 sm:pt-36 sm:pb-24"
        >
          <div
            className="grid-backdrop pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              <div
                className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-3.5 py-1.5"
                style={{ animationDelay: "80ms" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-ink" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                </span>
                <PartnerLockup className="text-[12px] uppercase tracking-[0.18em] text-ink" />
              </div>

              <span
                className="animate-rise mt-6 text-[13px] uppercase tracking-[0.32em] text-muted"
                style={{ animationDelay: "160ms" }}
              >
                Neuro Dog
              </span>

              <h1 className="mt-3 text-[16vw] leading-[0.84] font-light tracking-[-0.055em] sm:text-[8.5rem] lg:text-[10.5rem]">
                <AnimatedHeadline text="SebX" delay={220} stagger={90} />
              </h1>

              <p
                className="animate-rise mt-5 max-w-xl text-balance text-lg font-light leading-relaxed text-muted sm:text-xl"
                style={{ animationDelay: "620ms" }}
              >
                SpaceX, Cursor, and Neuralink are building a new kind of dog. Rocket-grade
                engineering, AI at its core, and a neural link to its owner.
              </p>

              <p
                className="animate-fade mt-4 text-lg font-light sm:text-xl"
                style={{ animationDelay: "900ms" }}
              >
                <span className="text-muted">He </span>
                <RotatingWord
                  words={["interacts.", "learns.", "adapts.", "evolves."]}
                  startDelay={1200}
                />
              </p>
            </div>

            {/* The dog ------------------------------------------------- */}
            <div
              className="animate-fade relative mt-8 sm:mt-10"
              style={{ animationDelay: "760ms" }}
            >
              <div className="animate-float mx-auto max-w-3xl">
                <Image
                  src={sebxImage}
                  alt="SebX, the Neuro Dog — a graphite-black robotic dog mid-stride with a glowing blue visor, blue light strips, a neural core on its neck, and SebX printed on its body"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full select-none"
                />
                <div
                  className="mx-auto -mt-4 h-6 w-[55%] rounded-[50%] bg-neutral-300/45 blur-2xl"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-8 hidden justify-center gap-3 sm:flex">
                {["Rocket-grade body", "Cursor AI core", "Neural interface"].map(
                  (tag, index) => (
                    <span
                      key={tag}
                      className="animate-rise rounded-full border border-line px-3.5 py-1.5 text-[12.5px] text-muted"
                      style={{ animationDelay: `${1100 + index * 120}ms` }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* Collaboration ----------------------------------------------- */}
        <section id="collaboration" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-col items-center text-center">
              <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                The collaboration
              </span>
              <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                <PartnerLockup className="flex-wrap justify-center gap-y-2" />
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-balance text-muted">
                Three companies, one dog. Each one brings the thing it does best, and
                together they make SebX.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 md:grid-cols-3">
              {COLLABORATION.map((item, index) => (
                <Reveal key={item.partner} delay={index * 110} className="bg-white p-8 sm:p-10">
                  <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                    {item.role}
                  </span>
                  <h3 className="mt-6 text-3xl font-light tracking-[-0.02em]">{item.partner}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Meet SebX --------------------------------------------------- */}
        <section id="meet" className="border-t border-line px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                Meet SebX
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl font-light leading-[1.1] tracking-[-0.03em] sm:text-5xl">
                More than an ordinary robotic dog.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted">
                The idea behind SebX is an AI companion that feels alive, responsive, and
                capable of evolving alongside its owner. With artificial intelligence at the
                center of his design and a neural link to the person he lives with, SebX could
                communicate, recognise situations, respond to people, and learn new behaviours.
              </p>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted">
                His name is simple: SebX. The technology behind him is anything but.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 md:grid-cols-3">
              {CAPABILITIES.map((item, index) => (
                <Reveal key={item.index} delay={index * 110} className="bg-white p-8 sm:p-10">
                  <span className="text-[12px] tabular-nums tracking-[0.2em] text-muted">
                    {item.index}
                  </span>
                  <h3 className="mt-6 text-2xl font-light tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vision ------------------------------------------------------ */}
        <section id="vision" className="border-y border-line bg-neutral-50/60 px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 md:grid-cols-12 md:gap-16">
              <Reveal className="md:col-span-5">
                <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                  The vision
                </span>
                <h2 className="mt-5 text-4xl font-light leading-[1.1] tracking-[-0.03em] sm:text-5xl">
                  Evolutionizing
                  <br />
                  the AI world.
                </h2>
                <div className="animate-expand mt-8 h-px w-24 bg-ink" />
              </Reveal>

              <Reveal delay={120} className="md:col-span-7">
                <p className="text-xl font-light leading-relaxed sm:text-2xl">
                  A future where AI becomes more personal, interactive, and present in everyday
                  life.
                </p>
                <p className="mt-6 text-lg font-light leading-relaxed text-muted">
                  Instead of asking an AI to perform a task through a computer or a phone,
                  people could simply interact with an intelligent physical companion. The
                  launch could introduce a new category of AI products, where intelligent
                  systems are not applications or chatbots, but companions that act in the real
                  world.
                </p>
                <p className="mt-6 text-lg font-light leading-relaxed text-muted">
                  If SebX delivers on that vision, the Neuro Dog could become an important step
                  toward that future.
                </p>

                <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
                  {SPECS.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                        {spec.label}
                      </dt>
                      <dd className="mt-2 text-[15px]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* New era ----------------------------------------------------- */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                A new era for AI companions
              </span>
              <p className="mt-8 text-3xl font-light leading-[1.25] tracking-[-0.025em] text-balance sm:text-4xl">
                SebX could show how artificial intelligence moves beyond screens and becomes
                something people can physically experience.
              </p>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted">
                From learning and adapting to interacting with people, the possibilities are
                wide open.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Launch ------------------------------------------------------ */}
        <section id="launch" className="border-t border-line px-6 py-24 sm:py-32">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <Reveal className="flex flex-col items-center">
              <span className="text-[12px] uppercase tracking-[0.2em] text-muted">
                Launch window
              </span>
              <h2 className="mt-5 text-5xl font-light tracking-[-0.04em] sm:text-7xl">
                Q1 2027
              </h2>
              <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-balance text-muted">
                SebX is coming. Q1 2027 could be the beginning of something new.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-14 flex w-full justify-center">
              <Countdown />
            </Reveal>

            <Reveal delay={220} className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#top"
                className="rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:opacity-80 active:scale-[0.97]"
              >
                Follow the launch
              </a>
              <a
                href="#meet"
                className="rounded-full border border-line px-6 py-3 text-[14px] font-medium transition-colors duration-300 hover:border-ink"
              >
                Learn about SebX
              </a>
            </Reveal>
          </div>
        </section>

        {/* Official notice --------------------------------------------- */}
        <section className="px-6 pb-20">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-line px-6 py-6 sm:px-8">
            <p className="text-[13.5px] leading-relaxed text-muted">
              <span className="text-ink">Official:</span> SebX is a joint product of SpaceX,
              Cursor, and Neuralink. Full details on features, pricing, and availability will be
              announced through official channels ahead of the Q1 2027 release.
            </p>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Image
              src="/cursor-logo.png"
              alt="Cursor"
              width={64}
              height={64}
              className="h-6 w-6 rounded-md object-cover"
            />
            <span className="text-[14px] text-muted">
              SpaceX &times; Cursor &times; Neuralink &middot; SebX
            </span>
          </div>
          <p className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()} SebX &middot; The Neuro Dog.
          </p>
        </div>
      </footer>
    </div>
  );
}
