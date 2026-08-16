import { Reveal, Section, SectionHeading } from "./Reveal";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section id="skills" className="bg-surface/30">
      <SectionHeading
        label="Skills"
        title="Organized by engineering domain"
        description="Presented as working knowledge and hands-on project experience rather than claims of advanced expertise."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.04}>
            <div className="glow-card h-full rounded-xl p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
                  {g.title}
                </h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {g.items.length}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm">
                    <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
