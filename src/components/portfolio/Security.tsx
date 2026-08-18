import { ShieldCheck } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { SECURITY_ITEMS } from "@/lib/portfolio-data";

export function Security() {
  return (
    <Section id="security">
      <SectionHeading
        label="Security"
        title="Secure-by-default habits, honestly scoped"
        description="Cybersecurity fundamentals applied inside my own applications — not a claim of professional security engineering experience."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SECURITY_ITEMS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="glow-card h-full rounded-xl p-6">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
