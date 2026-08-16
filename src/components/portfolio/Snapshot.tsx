import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    label: "Target Roles",
    items: [
      "Associate Software Tester",
      "Full-Stack Developer",
      "AI/ML Engineer",
      "Web Developer",
      "Junior Software Engineer",
      "DevOps / Cloud Intern",
      "Cybersecurity Intern",
    ],
  },
  {
    label: "Core Stack",
    items: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "REST APIs",
      "Git",
      "Postman",
      "Machine Learning",
    ],
  },
  { label: "Projects", items: ["Textile Marketplace AI", "Expense Tracker Pro"] },
  {
    label: "Experience",
    items: ["AI Internship — ReshApp Software Solutions Pvt. Ltd. (2026)"],
  },
];

export function Snapshot() {
  return (
    <section
      id="snapshot"
      aria-label="Recruiter snapshot"
      className="relative border-y border-border/60 bg-surface/40 px-5 py-14 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="label-xs">Recruiter Snapshot</p>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.07}>
              <div className="border-l border-primary/30 pl-4">
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
                  {b.label}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {b.items.map((it) => (
                    <li key={it} className="text-sm leading-snug text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
