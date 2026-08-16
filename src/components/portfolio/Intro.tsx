import { Reveal, Section } from "./Reveal";

const WORDS = ["BUILD.", "BREAK.", "VERIFY.", "IMPROVE."];

export function Intro() {
  return (
    <Section id="intro" className="overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {WORDS.map((w, i) => (
              <Reveal key={w} delay={i * 0.1} y={30} className="inline-block">
                <span className={i % 2 === 1 ? "text-primary" : ""}>{w}&nbsp;</span>
              </Reveal>
            ))}
          </h2>
        </div>
        <Reveal delay={0.2}>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I enjoy understanding how software actually works — how a request travels from
            an interface to an API to a database, where edge cases hide, and what breaks
            when assumptions change. I build features, then test functionality, debug the
            failures, and improve reliability.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            That loop is the same whether the work is full-stack development, quality
            assurance, machine learning experimentation, deployment or secure API design.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
