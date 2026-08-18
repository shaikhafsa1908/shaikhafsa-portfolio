import { Reveal, Section, SectionHeading } from "./Reveal";
import { QA_PRINCIPLES, DEFECTS } from "@/lib/portfolio-data";

export function QAMindset() {
  return (
    <Section id="qa">
      <SectionHeading
        label="QA Mindset"
        title="Building software, then trying to break it"
        description="Testing is not a separate job title for me — it is how I review my own work before anyone else has to."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {QA_PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="glow-card h-full rounded-xl p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <p className="label-xs">Sample defect reports</p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Sample defect reports</caption>
              <thead className="bg-surface-raised/80">
                <tr className="label-xs">
                  <th scope="col" className="px-4 py-3 font-normal">ID</th>
                  <th scope="col" className="px-4 py-3 font-normal">Description</th>
                  <th scope="col" className="px-4 py-3 font-normal">Severity</th>
                  <th scope="col" className="px-4 py-3 font-normal">Priority</th>
                  <th scope="col" className="px-4 py-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {DEFECTS.map((d) => (
                  <tr key={d.id} className="border-t border-border/70 hover:bg-surface-raised/50">
                    <td className="px-4 py-3 font-mono text-[11px] text-primary">{d.id}</td>
                    <td className="px-4 py-3">{d.title}</td>
                    <td className="px-4 py-3 text-muted-foreground">{d.severity}</td>
                    <td className="px-4 py-3 text-muted-foreground">{d.priority}</td>
                    <td className="px-4 py-3">
                      <span className="rounded border border-pass/50 bg-pass/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] text-pass">
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
