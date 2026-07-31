import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Handshake, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import Timeline from "@/components/sections/Timeline";
import StatsCounters from "@/components/sections/StatsCounters";
import CtaBanner from "@/components/sections/CtaBanner";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, mission and values behind ASA Property Services Ltd — a 5-star rated UK construction company built on craftsmanship and honesty.",
};

const values = [
  {
    icon: Target,
    title: "Do It Properly",
    description:
      "There's a right way to build, and there are shortcuts. We only know the first one. Every project is built as if it were our own home.",
  },
  {
    icon: Handshake,
    title: "Honesty First",
    description:
      "Straight answers, realistic timelines and quotes that don't move. If something isn't worth doing, we'll tell you before you spend a penny.",
  },
  {
    icon: ShieldCheck,
    title: "Take Responsibility",
    description:
      "One team, one point of contact, full accountability. When we take a project on, the outcome is ours to deliver — no excuses, no passing blame.",
  },
  {
    icon: Compass,
    title: "Keep Improving",
    description:
      "Materials, methods and regulations evolve. So do we — from modern waterproofing systems to smarter, more sustainable ways of building.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Craftsmanship you can trust, from a team that cares"
        description="ASA Property Services Ltd is a UK construction company built the old-fashioned way — on quality work, honest pricing and word-of-mouth."
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-accent-600" aria-hidden />
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-950 sm:text-4xl">
              Built on a simple promise: do the job properly
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              <p>
                ASA Property Services started in 2012 with one van, two
                tradespeople and a firm belief that the industry could do
                better. Too many clients had stories of vanishing builders,
                creeping costs and corners cut where they couldn&apos;t be
                seen. We set out to be the company those clients wished
                they&apos;d hired first.
              </p>
              <p>
                More than a decade later, the tools are better and the team is
                bigger — but the approach hasn&apos;t changed. We quote
                honestly, we communicate constantly, and we finish every
                project to a standard we&apos;d accept in our own homes.
              </p>
              <p>
                That&apos;s why the overwhelming majority of our work now comes
                from repeat clients and personal recommendations — and why our
                Google rating has never dropped below five stars.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card">
              <Image
                src={images.aboutSecondary.src}
                alt={images.aboutSecondary.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-4 max-w-[16rem] rounded-2.5xl p-6 shadow-card sm:-left-8">
              <p className="text-sm font-semibold leading-relaxed text-charcoal-900">
                &ldquo;We build every project as if it were our own home.&rdquo;
              </p>
              <p className="mt-2 text-xs font-medium text-charcoal-400">
                — The ASA Team
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-charcoal-950 py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">
              <span className="h-px w-6 bg-accent" aria-hidden />
              Our Mission
              <span className="h-px w-6 bg-accent" aria-hidden />
            </p>
            <p className="mt-6 text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
              To deliver construction people can rely on — buildings that last,
              prices that hold, and an experience that turns first-time clients
              into lifelong ones.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for"
            description="Four principles that guide every quote we write and every wall we build."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="group h-full rounded-2.5xl border border-charcoal-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent">
                    <value.icon
                      className="h-6 w-6 text-accent-600 transition-colors duration-300 group-hover:text-charcoal-950"
                      aria-hidden
                    />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-charcoal-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-500 sm:text-base">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Timeline />
      <StatsCounters />
      <CtaBanner />
    </>
  );
}
