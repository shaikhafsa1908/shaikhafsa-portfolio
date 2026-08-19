import { Award } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { CERTIFICATIONS } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        label="Certifications"
        title="Verified programs and simulations"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div className="glow-card h-full rounded-xl p-6">
              <Award className="h-4 w-4 text-primary" aria-hidden />
              <h3 className="mt-3 text-base leading-snug font-semibold">{c.title}</h3>
              <p className="mt-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
                {c.org} — {c.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
