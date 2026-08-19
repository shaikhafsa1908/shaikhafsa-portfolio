import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Github, ChevronDown, Server, Database, Cloud, Globe } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { TEST_CASES, EXPENSE_TESTS, type RoleKey } from "@/lib/portfolio-data";

const FILTERS: { key: "all" | RoleKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ai", label: "AI / ML" },
  { key: "qa", label: "QA / Testing" },
  { key: "web", label: "Web" },
  { key: "devops", label: "DevOps" },
  { key: "security", label: "Cybersecurity" },
];

const TECH_ROLES: Record<string, RoleKey[]> = {
  React: ["fullstack", "web"],
  "Node.js": ["fullstack", "web"],
  "Express.js": ["fullstack", "web"],
  MongoDB: ["fullstack"],
  "REST APIs": ["fullstack", "web", "qa"],
  JavaScript: ["fullstack", "web"],
  AI: ["ai"],
  "JWT Authentication": ["security", "fullstack"],
  JWT: ["security", "fullstack"],
  Netlify: ["devops"],
  Render: ["devops"],
  "MongoDB Atlas": ["devops", "fullstack"],
  HTML: ["web"],
  CSS: ["web"],
  Postman: ["qa"],
};

function TechChips({ tech, active }: { tech: string[]; active: "all" | RoleKey }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {tech.map((t) => {
        const hit = active !== "all" && (TECH_ROLES[t] ?? []).includes(active);
        return (
          <li
            key={t}
            className={`rounded border px-2 py-1 font-mono text-[11px] transition-colors ${
              hit
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border/70 bg-surface-raised/70 text-muted-foreground"
            }`}
          >
            {t}
          </li>
        );
      })}
    </ul>
  );
}

function Disclosure({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-border/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-mono text-[11px] tracking-[0.16em] uppercase">{title}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const tone =
    status === "PASSED"
      ? "border-pass/50 bg-pass/10 text-pass"
      : status === "EDGE CASE"
        ? "border-warn/50 bg-warn/10 text-warn"
        : "border-info/50 bg-info/10 text-info";
  return (
    <span className={`rounded border px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] ${tone}`}>
      {status}
    </span>
  );
}

function TestMatrix() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Portfolio test scenarios written to demonstrate testing methodology — not a claim
        that every case has been executed in a production environment.
      </p>
      <div className="mt-5 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[680px] text-left text-sm">
          <caption className="sr-only">Sample test matrix for Textile Marketplace AI</caption>
          <thead className="bg-surface-raised/80">
            <tr className="label-xs">
              <th scope="col" className="px-4 py-3 font-normal">ID</th>
              <th scope="col" className="px-4 py-3 font-normal">Feature</th>
              <th scope="col" className="px-4 py-3 font-normal">Test Scenario</th>
              <th scope="col" className="px-4 py-3 font-normal">Expected Result</th>
              <th scope="col" className="px-4 py-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {TEST_CASES.map((tc) => (
              <tr key={tc.id} className="border-t border-border/70 hover:bg-surface-raised/50">
                <td className="px-4 py-3 font-mono text-[11px] text-primary">{tc.id}</td>
                <td className="px-4 py-3 text-muted-foreground">{tc.area}</td>
                <td className="px-4 py-3">{tc.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{tc.expected}</td>
                <td className="px-4 py-3"><StatusPill status={tc.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ArchitectureFlow() {
  const nodes = [
    { icon: Globe, label: "User" },
    { icon: Globe, label: "Netlify Frontend" },
    { icon: Server, label: "REST API" },
    { icon: Cloud, label: "Render Backend" },
    { icon: Database, label: "MongoDB Atlas" },
  ];
  return (
    <div>
      <ol className="grid gap-3 sm:grid-cols-5">
        {nodes.map((n, i) => (
          <li key={n.label} className="relative">
            <div className="glow-card flex h-full flex-col items-center gap-2 rounded-lg p-4 text-center">
              <n.icon className="h-4 w-4 text-primary" aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase">
                {n.label}
              </span>
            </div>
            {i < nodes.length - 1 ? (
              <span
                aria-hidden
                className="absolute top-1/2 -right-2 hidden h-px w-3 bg-primary/50 sm:block"
              />
            ) : null}
          </li>
        ))}
      </ol>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {["Git / GitHub", "Environment Variables", "Deployment", "Monitoring Concepts"].map(
          (t) => (
            <li
              key={t}
              className="rounded border border-border/70 px-2 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [active, setActive] = useState<"all" | RoleKey>("all");

  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Two systems, examined from every engineering angle"
        description="Each project is presented from full-stack, AI, QA, security and deployment perspectives — the same way an engineering team would review it."
      />

      <div className="mt-9">
        <p className="label-xs">Explore by role</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              aria-pressed={active === f.key}
              className={`rounded-md border px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors ${
                active === f.key
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project 1 */}
      <Reveal className="mt-10">
        <article className="glow-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="label-xs">Featured project 01</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">TEXTILE MARKETPLACE AI</h3>
              <p className="mt-2 text-sm text-primary">
                B2B Textile Marketplace + AI-Powered Fabric Sourcing Assistant
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://euphonious-pie-c72d03.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a
                href="https://textile-marketplace-1.onrender.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-primary/50"
              >
                <Server className="h-4 w-4" /> Backend API
              </a>
              <a
                href="https://github.com/hafsashaik"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-primary/50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            A modern B2B textile marketplace connecting buyers with textile suppliers
            through product discovery, intelligent search, filtering, favourites and
            AI-assisted fabric recommendations.
          </p>

          <TechChips
            active={active}
            tech={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "JavaScript",
              "AI",
              "JWT Authentication",
              "Netlify",
              "Render",
              "MongoDB Atlas",
            ]}
          />

          <div className="mt-8">
            <Disclosure title="Full-stack perspective" defaultOpen>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The React frontend calls versioned Express REST endpoints over HTTP/JSON.
                Requests carry a JWT so protected routes can identify the user, and
                Mongoose models persist products, users and favourites in MongoDB Atlas so
                state survives sessions and redeploys.
              </p>
              <Bullets
                items={[
                  "Textile product marketplace with responsive UI",
                  "Product search, filtering and favourites",
                  "REST APIs with JWT authentication",
                  "Database integration with MongoDB Atlas",
                  "Separate frontend/backend deployment",
                ]}
              />
            </Disclosure>

            <Disclosure title="AI perspective — fabric sourcing assistant">
              <Bullets
                items={[
                  "AI-assisted fabric recommendations from buyer requirements",
                  "Natural-language interaction for sourcing queries",
                  "AI-assisted product discovery alongside classic search",
                  "Recommendation workflow: query → interpretation → candidate fabrics → results",
                ]}
              />
            </Disclosure>

            <Disclosure title="How I would test this application">
              <div className="mb-6 grid gap-2 sm:grid-cols-2">
                <Bullets
                  items={[
                    "Functional Testing",
                    "API Testing",
                    "Authentication Testing",
                    "Regression Testing",
                    "Boundary Testing",
                    "Negative Testing",
                    "Database Validation",
                    "UI Testing",
                  ]}
                />
              </div>
              <TestMatrix />
            </Disclosure>

            <Disclosure title="Security considerations">
              <p className="mb-4 text-sm text-muted-foreground">
                Fundamentals applied while building — not a claim that the application is
                completely secure.
              </p>
              <Bullets
                items={[
                  "Authentication with hashed credentials",
                  "Authorization checks on protected resources",
                  "JWT handling and expiry awareness",
                  "Input validation on API payloads",
                  "Protected routes on the client and server",
                  "API access control",
                  "Secure credential handling via environment variables",
                  "OWASP fundamentals awareness",
                ]}
              />
            </Disclosure>

            <Disclosure title="Deployment architecture">
              <ArchitectureFlow />
            </Disclosure>
          </div>
        </article>
      </Reveal>

      {/* Project 2 */}
      <Reveal className="mt-6">
        <article className="glow-card rounded-2xl p-6 sm:p-8">
          <p className="label-xs">Featured project 02</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">EXPENSE TRACKER PRO</h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            A full-stack expense management platform with secure authentication,
            transaction management, analytics, budgets, dashboards, profile management and
            report export.
          </p>

          <TechChips
            active={active}
            tech={[
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT",
              "MongoDB Atlas",
              "Netlify",
              "Render",
            ]}
          />

          <div className="mt-8">
            <Disclosure title="Full-stack perspective" defaultOpen>
              <Bullets
                items={[
                  "User authentication and profile management",
                  "Transaction creation, editing and deletion",
                  "Expense analytics and dashboard visualization",
                  "Budget tracking and report export",
                  "REST API with MongoDB integration",
                ]}
              />
            </Disclosure>
            <Disclosure title="QA perspective">
              <p className="mb-4 text-sm text-muted-foreground">
                Portfolio test scenarios demonstrating how I would validate the platform.
              </p>
              <Bullets items={EXPENSE_TESTS} />
            </Disclosure>
            <Disclosure title="Security perspective">
              <Bullets
                items={[
                  "JWT authentication",
                  "Protected routes",
                  "Authorization on user-owned records",
                  "Input validation",
                  "Secure API practices",
                ]}
              />
            </Disclosure>
            <Disclosure title="Database & deployment">
              <Bullets
                items={[
                  "MongoDB Atlas for cloud-hosted persistence",
                  "CRUD validation and data consistency checks",
                  "Frontend deployed on Netlify",
                  "Backend deployed on Render",
                ]}
              />
            </Disclosure>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
