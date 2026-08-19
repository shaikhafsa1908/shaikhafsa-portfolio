import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, FileText, Circle } from "lucide-react";
import { PROFILE, ROLES } from "@/lib/portfolio-data";

function PipelineBackdrop() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-70" />
      <div className="absolute inset-0 hero-veil" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="var(--primary)" strokeWidth="1" fill="none" opacity="0.35">
          <path d="M-50 180 H 300 L 360 240 H 700 L 760 180 H 1250" className={reduced ? "" : "dash-flow"} />
          <path d="M-50 420 H 260 L 320 360 H 640 L 700 420 H 1250" className={reduced ? "" : "dash-flow"} />
          <path d="M-50 560 H 480 L 540 500 H 1250" className={reduced ? "" : "dash-flow"} />
        </g>
        <g fill="var(--primary)" opacity="0.5">
          {[
            [300, 180],
            [700, 240],
            [260, 420],
            [640, 360],
            [480, 560],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))}
        </g>
      </svg>
      {!reduced ? (
        <div className="scanline absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent" />
      ) : null}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function RoleRotator() {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <div className="flex h-7 items-center gap-3 overflow-hidden">
      <Circle className="h-2 w-2 shrink-0 fill-primary text-primary" aria-hidden />
      <span className="sr-only">Roles: {ROLES.join(", ")}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs tracking-[0.22em] text-primary sm:text-sm"
          aria-hidden
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      <PipelineBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            Open to software engineering, QA & AI roles
          </span>

          <h1 className="mt-8 text-[2.6rem] leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">BUILD. TEST. AUTOMATE.</span>
            <span className="block text-muted-foreground">INTELLIGENTLY ENGINEER.</span>
          </h1>

          <div className="mt-7 max-w-2xl">
            <RoleRotator />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Computer Science &amp; Artificial Intelligence engineer building reliable,
              intelligent and scalable software systems — with hands-on experience across
              full-stack development, APIs, databases, testing methodologies, cloud
              deployment and machine learning workflows.
            </p>
          </div>

          <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <dt className="label-xs">Name</dt>
              <dd className="mt-1 text-sm font-medium">{PROFILE.name}</dd>
            </div>
            <div>
              <dt className="label-xs">Education</dt>
              <dd className="mt-1 text-sm font-medium">{PROFILE.degree}</dd>
            </div>
            <div>
              <dt className="label-xs">Duration</dt>
              <dd className="mt-1 font-mono text-sm font-medium">{PROFILE.years}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={PROFILE.resume}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition-colors hover:border-primary/50"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
