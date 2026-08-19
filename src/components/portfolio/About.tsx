import { Reveal, Section, SectionHeading } from "./Reveal";
import {
  Hammer,
  TestTube2,
  ShieldCheck,
  Rocket,
  BrainCircuit,
} from "lucide-react";

const PERSPECTIVES = [
  {
    icon: Hammer,
    title: "Build",
    text: "I understand how applications are designed and developed, from interface to API to database.",
  },
  {
    icon: TestTube2,
    title: "Test",
    text: "I think about functionality, edge cases, APIs and reliability before calling something done.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "I apply fundamental authentication, authorization and secure-development practices.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    text: "I have hands-on experience deploying full-stack applications with cloud-hosted services.",
  },
  {
    icon: BrainCircuit,
    title: "AI",
    text: "I understand the fundamentals of data-driven and intelligent applications.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        label="About"
        title={
          <>
            Computer Science &amp; Artificial Intelligence engineer —{" "}
            <span className="text-muted-foreground">
              building software and questioning it.
            </span>
          </>
        }
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="space-y-6">
            <div className="relative mx-auto w-fit lg:mx-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/40 via-primary/20 to-transparent blur-md" />

              <img
                src="/hafsa-portrait.png"
                alt="Hafsa Shaik"
                className="relative h-40 w-40 rounded-full border-2 border-primary/30 object-cover shadow-xl"
              />
            </div>

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a Computer Science and Artificial Intelligence engineering
                student with hands-on experience in full-stack development,
                artificial intelligence, data analytics, APIs, databases, cloud
                deployment and software projects.
              </p>

              <p>
                My development background helps me understand how applications
                are built, while my interest in software quality drives me to
                think about how applications can fail, how defects can be
                identified, and how reliable software can be delivered.
              </p>

              <p>
                I am currently targeting roles across software engineering,
                quality assurance and AI/ML — including Associate Software
                Tester / QA positions where I can contribute to functional
                testing, API testing, test case design, defect identification,
                regression testing and automation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glow-card rounded-xl p-6">
            <p className="label-xs">One engineer. Multiple perspectives.</p>

            <ul className="mt-5 space-y-5">
              {PERSPECTIVES.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/[0.07] text-primary">
                    <p.icon className="h-4 w-4" aria-hidden />
                  </span>

                  <span>
                    <span className="block font-mono text-[11px] tracking-[0.16em] uppercase">
                      {p.title}
                    </span>

                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}