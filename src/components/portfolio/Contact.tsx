import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { PROFILE } from "@/lib/portfolio-data";

const LINKS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Github, label: "GitHub", value: "github.com/hafsashaik", href: PROFILE.github },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hafsashaik",
    href: PROFILE.linkedin,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        label="Contact"
        title={
          <>
            Open to QA, full-stack and AI/ML roles
            <span className="text-primary"> starting 2027</span>
          </>
        }
        description="An ambitious software engineer who understands both how to build software and how to break, test, debug and improve it. Available for internships now and full-time roles from 2027."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.05}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="glow-card group flex h-full items-start justify-between gap-4 rounded-xl p-6 transition-colors hover:border-primary/50"
            >
              <span>
                <l.icon className="h-4 w-4 text-primary" aria-hidden />
                <span className="mt-3 block font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                  {l.label}
                </span>
                <span className="mt-1 block text-sm break-all">{l.value}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-primary/30 bg-primary/[0.06] p-6">
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            Looking for someone who tests their own work? Let's talk.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-md bg-primary px-4 py-2.5 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
          {PROFILE.name} — {PROFILE.degree}
        </p>
        <p className="text-[11px] text-muted-foreground">
          Built and tested by hand. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
