import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { ROLE_CARDS } from "@/lib/portfolio-data";

export function RoleExplorer() {
  const [active, setActive] = useState(0);

  return (
    <Section id="profile">
      <SectionHeading
        label="Role Explorer"
        title="Explore my engineering profile"
        description="One core identity — Computer Science & Artificial Intelligence engineer — with specialization areas at different levels of depth. Full-stack, QA and AI/ML are project supported; DevOps and cybersecurity are growing technical areas."
      />

      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Engineering profile areas"
      >
        {ROLE_CARDS.map((r, i) => (
          <button
            key={r.key}
            role="tab"
            aria-selected={active === i}
            aria-controls={`role-panel-${r.key}`}
            id={`role-tab-${r.key}`}
            onClick={() => setActive(i)}
            className={`rounded-md border px-3.5 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
              active === i
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {ROLE_CARDS.map((r, i) => (
          <Reveal key={r.key} delay={i * 0.05}>
            <div
              id={`role-panel-${r.key}`}
              role="tabpanel"
              aria-labelledby={`role-tab-${r.key}`}
              onMouseEnter={() => setActive(i)}
              className={`glow-card h-full rounded-xl p-6 ${
                active === i ? "border-primary/50 shadow-[var(--shadow-glow)]" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <span className="font-mono text-[10px] tracking-[0.12em] text-primary/80 uppercase">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                {r.note}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {r.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {r.items.map((it) => (
                  <li
                    key={it}
                    className="rounded border border-border/70 bg-surface-raised/70 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
              {active === i ? (
                <motion.div
                  layoutId="role-underline"
                  className="mt-5 h-px bg-gradient-to-r from-primary/70 to-transparent"
                />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
