import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Snapshot } from "@/components/portfolio/Snapshot";
import { Intro } from "@/components/portfolio/Intro";
import { About } from "@/components/portfolio/About";
import { RoleExplorer } from "@/components/portfolio/RoleExplorer";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { AIWork } from "@/components/portfolio/AIWork";
import { QAMindset } from "@/components/portfolio/QAMindset";
import { DevOps } from "@/components/portfolio/DevOps";
import { Security } from "@/components/portfolio/Security";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact, Footer } from "@/components/portfolio/Contact";

const TITLE = "Hafsa Shaik — Software Engineer, QA & AI/ML";
const DESCRIPTION =
  "Portfolio of Hafsa Shaik, B.Tech CSE (AI) 2027 — full-stack development, software testing & QA, AI/ML, DevOps and security fundamentals, backed by real projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Snapshot />
        <Intro />
        <About />
        <RoleExplorer />
        <Skills />
        <Projects />
        <AIWork />
        <QAMindset />
        <DevOps />
        <Security />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
