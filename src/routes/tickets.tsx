import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/tickets")({
  component: Tickets,
  head: () => ({
    meta: [{ title: "Tickets — Eventology" }],
  }),
});

function Tickets() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Nav />
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 20%, oklch(0.74 0.12 78 / 0.2), transparent 70%), radial-gradient(50% 50% at 80% 40%, oklch(0.5 0.15 30 / 0.15), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal className="eyebrow mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            {t.tickets.eyebrow}
          </Reveal>
          <Reveal>
            <h1 className="display text-[13vw] md:text-7xl lg:text-8xl max-w-4xl mb-8">
              {t.tickets.headingPre}{" "}
              <em className="italic text-accent font-normal">{t.tickets.headingEm}</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
              {t.tickets.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8" stagger={0.15}>
            {t.tickets.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                variants={staggerItem}
                className={`group relative overflow-hidden p-10 md:p-14 border border-hairline hover:border-accent transition-colors ${
                  i === 1 ? "bg-surface" : "bg-surface/40"
                }`}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i === 1 && <span className="w-3 h-3 rounded-full bg-accent shimmer" />}
                </div>
                <h3 className="display text-3xl md:text-4xl mb-3">{tier.name}</h3>
                <p className="text-muted-foreground mb-8">{tier.tagline}</p>
                <p className="display text-4xl md:text-5xl text-accent mb-10">{tier.price}</p>
                <ul className="space-y-3 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-accent group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                >
                  {t.tickets.selectCta}
                  <span className="rtl:rotate-180">→</span>
                </a>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-10 md:mt-14 hairline-t pt-8">
            <p className="text-xs text-muted-foreground">
              <span className="font-mono text-accent uppercase tracking-widest">
                {t.tickets.noteLabel}
              </span>{" "}
              — {t.tickets.note}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
