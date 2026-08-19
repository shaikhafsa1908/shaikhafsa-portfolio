import { Reveal, Section, SectionHeading } from "./Reveal";
import { DEVOPS_STEPS } from "@/lib/portfolio-data";

export function DevOps() {
  return (
    <Section id="devops">
      <SectionHeading
        label="DevOps / Cloud"
        title="From local commit to a live URL"
        description="A growing technical area: everything below comes from actually shipping my own projects to hosted environments."
      />

      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {DEVOPS_STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <li className="glow-card relative h-full rounded-xl p-5">
              <span className="font-mono text-[10px] tracking-[0.14em] text-primary/80">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
