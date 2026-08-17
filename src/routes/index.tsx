import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Heart,
  Lock,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe Space — Anonymous Deep-Dive Sessions" },
      {
        name: "description",
        content:
          "A 100% anonymous, safe space to vent, process hard choices, and get honest, non-judgmental feedback via confidential email.",
      },
      {
        property: "og:title",
        content: "Safe Space — Anonymous Deep-Dive Sessions",
      },
      {
        property: "og:description",
        content:
          "A 100% anonymous, safe space to vent, process hard choices, and get honest, non-judgmental feedback via confidential email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-serif text-2xl font-medium tracking-tight">
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a
            href="#why"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Why it works
          </a>
          <a
            href="#process"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Investment
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start writing
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-36 pb-20 lg:pt-52 lg:pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Tired of holding it all in?
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
            {siteConfig.tagline} A totally anonymous space to lay out your
            thoughts, untangle your mind, and get honest, non-judgmental
            feedback.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
              Share your story
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-card-foreground transition-colors hover:bg-secondary"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl shadow-2xl shadow-foreground/5 ring-1 ring-border">
          <img
            src="/images/hero.jpg"
            alt="A sealed cream envelope on soft linen, representing safe and anonymous correspondence."
            width={1440}
            height={800}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="why" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-medium leading-tight md:text-4xl">
              Opening up shouldn&apos;t come with strings attached.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We all reach moments where we need to vent, process a hard choice,
              or figure out our next move. But talking to friends or family can
              bring unwanted advice, awkwardness, or the fear of being judged.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-medium leading-tight md:text-4xl">
              The Vault gives you a blank slate.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I offer a 100% anonymous, safe space to lay out your thoughts. No
              names, no cameras, no phone numbers. Just clear, confidential email
              communication and a thoughtful response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Shield,
    title: "Total Anonymity",
    description:
      "No names, no cameras, no phone numbers. Your identity is never part of the conversation.",
  },
  {
    icon: Heart,
    title: "Zero Judgment",
    description:
      "Share your deepest secrets, messiest situations, or wildest ideas without fear of being evaluated.",
  },
  {
    icon: Sparkles,
    title: "Real Clarity",
    description:
      "Receive compassionate listening paired with constructive, practical perspective to help you move forward.",
  },
];

function Benefits() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why this works
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
            A safe space, by design.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-secondary p-4 text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="size-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Write your story",
    description:
      "Take your time. Pour out what you are feeling, thinking, or struggling with.",
  },
  {
    title: "Send it anonymously",
    description:
      "Use the secure email below. No names, no account, no trace back to you.",
  },
  {
    title: "Receive a detailed response",
    description: `Within ${siteConfig.responseTime}, you will get a compassionate, thoughtful reply.`,
  },
  {
    title: "Find your next step",
    description:
      "Walk away with clearer perspective and less weight on your shoulders.",
  },
];

function HowItWorks() {
  return (
    <section id="process" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
            Four simple steps to clarity.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-border bg-card p-8"
            >
              <span className="font-serif text-4xl font-medium text-primary/30">
                0{idx + 1}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Investment
        </span>
        <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
          One deep-dive session. Complete focus.
        </h2>

        <div className="mt-12 rounded-[2rem] border border-border bg-card p-10 text-center shadow-xl shadow-foreground/5">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The Session
          </p>
          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="font-serif text-6xl font-medium text-foreground">
              {siteConfig.currency}
              {siteConfig.price}
            </span>
            <span className="text-muted-foreground">
              {siteConfig.priceLabel}
            </span>
          </div>

          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            <li className="flex items-start gap-3 text-muted-foreground">
              <Lock className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>100% anonymous and confidential</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>Detailed response within {siteConfig.responseTime}</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>Unhurried email exchange focused on your story</span>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/50 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Secure checkout
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Payment gateway integration will be added here next. For now,
              send your story to begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary px-6 py-24 text-primary-foreground">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-medium md:text-5xl">
          Stop carrying the weight alone.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
          Drop your story in my inbox, clear your head, and leave the stress
          behind. Every message is handled with care and total discretion.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 text-lg font-medium text-primary shadow-lg transition-all hover:bg-primary-foreground/90"
          >
            <Mail className="size-5" />
            {siteConfig.email}
          </a>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/70">
          Contact details can be updated in{" "}
          <code className="rounded bg-primary-foreground/10 px-1.5 py-0.5">
            src/lib/site-config.ts
          </code>
          .
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-serif text-xl font-medium tracking-tight">
          {siteConfig.name}
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Safe Space is a listening service, not licensed therapy or medical
          care.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
