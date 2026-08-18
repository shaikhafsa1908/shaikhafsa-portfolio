import { Reveal, Section, SectionHeading } from "./Reveal";
import { AI_WORKFLOW } from "@/lib/portfolio-data";

export function AIWork() {
  return (
    <Section id="ai">
      <SectionHeading
        label="AI / Machine Learning"
        title="How I approach a machine learning problem"
        description="Experience from an AI internship and academic work: the workflow below is how I move from a vague problem statement to a model I can reason about."
      />

      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AI_WORKFLOW.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
            <li className="glow-card h-full rounded-xl p-6">
              <span className="font-mono text-[10px] tracking-[0.14em] text-primary/80">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-xl border border-border/70 bg-surface/60 p-6">
          <p className="label-xs">Toolset</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Machine Learning",
              "EDA",
              "Data Preprocessing",
              "Model Development",
              "AI Applications",
            ].map((t) => (
              <li
                key={t}
                className="rounded border border-border/70 bg-surface-raised/70 px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
