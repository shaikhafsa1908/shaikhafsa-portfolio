import { Reveal, Section, SectionHeading } from "./Reveal";
import { TIMELINE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        label="Experience"
        title="Internship, projects and simulations"
        description="A practical record of the work behind the skills above."
      />

      <ol className="mt-10 space-y-4 border-l border-border/70 pl-6">
        {TIMELINE.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.05}>
            <li className="relative">
              <span
                aria-hidden
                className="absolute top-7 -left-[31px] h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)]"
              />
              <article className="glow-card rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded border border-primary/50 bg-primary/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-primary">
                    {t.kind}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">{t.year}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                <ul className="mt-4 grid gap-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
