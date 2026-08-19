export const PROFILE = {
  name: "Hafsa Shaik",
  degree: "B.Tech CSE — Artificial Intelligence",
  years: "2023–2027",
  email: "shaikhafsa433@gmail.com",
  github: "https://github.com/shaikhafsa1908",
  linkedin: "https://www.linkedin.com/in/hafsa-shaik-501419351",
  resume: "#contact",
};

export const ROLES = [
  "FULL-STACK DEVELOPER",
  "AI / ML ENGINEER",
  "SOFTWARE TESTER",
  "WEB DEVELOPER",
  "DEVOPS ENTHUSIAST",
  "CYBERSECURITY ENTHUSIAST",
];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "profile", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "qa", label: "QA Mindset" },
  { id: "devops", label: "DevOps" },
  { id: "security", label: "Security" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export type RoleKey = "qa" | "fullstack" | "ai" | "web" | "devops" | "security";

export const ROLE_CARDS: {
  key: RoleKey;
  title: string;
  note: string;
  items: string[];
  blurb: string;
}[] = [
  {
    key: "qa",
    title: "Software Testing",
    note: "Project-based practice",
    blurb:
      "Designing test scenarios, validating APIs and data, and thinking about how software fails before it ships.",
    items: [
      "Functional Testing",
      "API Testing",
      "Test Case Design",
      "Regression Testing",
      "Bug Identification",
      "SQL Validation",
      "Postman",
    ],
  },
  {
    key: "fullstack",
    title: "Full-Stack Development",
    note: "Strongest area — project supported",
    blurb:
      "Building end-to-end applications: React interfaces, Express APIs, MongoDB persistence and JWT auth.",
    items: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "HTML",
      "CSS",
    ],
  },
  {
    key: "ai",
    title: "AI / Machine Learning",
    note: "Academic + internship experience",
    blurb:
      "Working through machine learning workflows: preparing data, exploring it, and reasoning about model behaviour.",
    items: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Pandas",
      "NumPy",
      "EDA",
      "Model Development",
      "AI Applications",
    ],
  },
  {
    key: "web",
    title: "Web Development",
    note: "Hands-on project experience",
    blurb:
      "Responsive interfaces wired to real backends, with authentication, database integration and live deployments.",
    items: [
      "Responsive UI",
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "Authentication",
      "Database Integration",
      "Deployment",
    ],
  },
  {
    key: "devops",
    title: "DevOps / Cloud",
    note: "Working knowledge / hands-on exposure",
    blurb:
      "Shipping applications from GitHub to hosted environments and managing configuration across services.",
    items: [
      "Git",
      "GitHub",
      "Render",
      "Netlify",
      "MongoDB Atlas",
      "Deployment",
      "Environment Configuration",
      "CI/CD Concepts",
    ],
  },
  {
    key: "security",
    title: "Cybersecurity",
    note: "Cybersecurity fundamentals",
    blurb:
      "Applying secure-development basics: who is authenticated, what is authorized, and what input can be trusted.",
    items: [
      "Authentication",
      "Authorization",
      "JWT",
      "Secure API Design",
      "Input Validation",
      "Access Control",
      "OWASP Fundamentals",
      "Web Security Concepts",
    ],
  },
];

export const SKILL_GROUPS: { title: string; items: string[] }[] = [
  { title: "Programming", items: ["Python", "Java", "JavaScript", "C"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MongoDB", "MongoDB Atlas", "SQL"] },
  {
    title: "AI / Data",
    items: ["Machine Learning", "NumPy", "Pandas", "EDA", "Data Preprocessing"],
  },
  {
    title: "Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "API Testing",
      "Test Case Design",
      "Bug Identification",
      "Postman",
    ],
  },
  {
    title: "DevOps / Cloud",
    items: ["Git", "GitHub", "Netlify", "Render", "Deployment", "CI/CD Concepts"],
  },
  {
    title: "Security",
    items: [
      "JWT",
      "Authentication",
      "Authorization",
      "Input Validation",
      "Access Control",
      "OWASP Fundamentals",
    ],
  },
];

export const TEST_CASES = [
  {
    id: "TC-001",
    title: "Login with valid credentials",
    area: "Authentication",
    expected: "User authenticates successfully and gains access to the application.",
    status: "PASSED",
  },
  {
    id: "TC-002",
    title: "Login with invalid password",
    area: "Authentication",
    expected: "Authentication fails and an appropriate error message is displayed.",
    status: "PASSED",
  },
  {
    id: "TC-003",
    title: "Empty product search",
    area: "Search",
    expected: "Application handles the empty request gracefully without breaking.",
    status: "EDGE CASE",
  },
  {
    id: "TC-004",
    title: "Search term with no matching fabrics",
    area: "Search",
    expected: "A clear no-results state is shown instead of a blank screen.",
    status: "TESTING",
  },
  {
    id: "TC-005",
    title: "Apply multiple filters together",
    area: "Filtering",
    expected: "Result set respects every active filter; reset restores full list.",
    status: "PASSED",
  },
  {
    id: "TC-006",
    title: "Add the same product to favourites twice",
    area: "Favourites",
    expected: "No duplicate entry is created; state stays consistent after re-login.",
    status: "EDGE CASE",
  },
  {
    id: "TC-007",
    title: "AI assistant receives an empty or unexpected query",
    area: "AI Assistant",
    expected: "Assistant responds with guidance rather than an unhandled error.",
    status: "TESTING",
  },
  {
    id: "TC-008",
    title: "GET / POST / PUT / DELETE on product endpoints",
    area: "API",
    expected: "Correct HTTP status codes and JSON response shapes for each method.",
    status: "PASSED",
  },
  {
    id: "TC-009",
    title: "Invalid payload sent to a POST endpoint",
    area: "API",
    expected: "Request is rejected with a 400-level status and a validation message.",
    status: "EDGE CASE",
  },
  {
    id: "TC-010",
    title: "Protected route accessed without a token",
    area: "Security",
    expected: "Request is rejected as unauthorized; no data is returned.",
    status: "PASSED",
  },
  {
    id: "TC-011",
    title: "CRUD record persistence check in MongoDB",
    area: "Database",
    expected: "Created, updated and deleted records match the API response state.",
    status: "TESTING",
  },
  {
    id: "TC-012",
    title: "Existing features re-checked after a new change",
    area: "Regression",
    expected: "Previously working flows behave identically after the change.",
    status: "TESTING",
  },
];

export const EXPENSE_TESTS = [
  "Login and signup validation",
  "JWT session handling",
  "Transaction creation, editing and deletion",
  "Budget calculation accuracy",
  "Dashboard values match stored data",
  "API request/response validation",
  "Unauthorized request handling",
  "Database persistence after refresh",
];

export const DEFECTS = [
  {
    id: "DEFECT #001",
    title: "Invalid search input does not return a user-friendly message.",
    severity: "Medium",
    priority: "Medium",
    status: "Resolved",
  },
  {
    id: "DEFECT #002",
    title: "Favourites list does not refresh immediately after removing an item.",
    severity: "Low",
    priority: "Medium",
    status: "Resolved",
  },
  {
    id: "DEFECT #003",
    title: "Protected endpoint returns a generic error instead of a clear 401 message.",
    severity: "Medium",
    priority: "High",
    status: "Retested",
  },
];

export const TIMELINE = [
  {
    year: "2026",
    kind: "INTERNSHIP",
    title: "Artificial Intelligence Intern",
    org: "ReshApp Software Solutions Pvt. Ltd. — Hyderabad",
    points: [
      "Exposure to AI/ML workflows and model development concepts",
      "Data preprocessing and preparation for experimentation",
      "Testing, debugging and documenting work",
      "Iterating on mentor feedback within a practical development workflow",
    ],
  },
  {
    year: "2026",
    kind: "PROJECT",
    title: "Textile Marketplace AI",
    org: "B2B marketplace + AI-assisted fabric sourcing",
    points: [
      "React frontend, Express APIs, MongoDB Atlas persistence",
      "JWT authentication and protected routes",
      "Deployed frontend on Netlify and backend on Render",
    ],
  },
  {
    year: "2026",
    kind: "PROJECT",
    title: "Expense Tracker Pro",
    org: "Full-stack expense management platform",
    points: [
      "Authentication, transactions, budgets and analytics dashboard",
      "REST API with MongoDB integration and report export",
    ],
  },
  {
    year: "2026",
    kind: "JOB SIMULATION",
    title: "Deloitte Australia — Data Analytics Job Simulation",
    org: "Forage — June 2026",
    points: ["Data analysis and interpretation tasks in a simulated business context"],
  },
  {
    year: "2026",
    kind: "JOB SIMULATION",
    title: "Deloitte Australia — Technology Job Simulation",
    org: "Forage — June 2026",
    points: ["Technology consulting and development-oriented simulation tasks"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Deloitte Australia — Data Analytics Job Simulation",
    org: "Forage",
    date: "June 2026",
    note: "Data analysis, interpretation and business-context reporting tasks.",
  },
  {
    title: "Deloitte Australia — Technology Job Simulation",
    org: "Forage",
    date: "June 2026",
    note: "Technology consulting and development-oriented simulation tasks.",
  },
  {
    title: "Artificial Intelligence Internship",
    org: "ReshApp Software Solutions Pvt. Ltd.",
    date: "2026",
    note: "AI/ML workflows, data preprocessing, testing and documentation.",
  },
];

export const AI_WORKFLOW = [
  { step: "Problem framing", detail: "Understanding what the model is actually meant to predict or assist with." },
  { step: "Data preparation", detail: "Cleaning, handling missing values and encoding features with Pandas and NumPy." },
  { step: "Exploratory analysis", detail: "Distributions, correlations and outliers before any modelling decisions." },
  { step: "Model development", detail: "Training baseline models and reasoning about their behaviour and limits." },
  { step: "Evaluation", detail: "Interpreting metrics honestly and identifying where the model fails." },
  { step: "Application", detail: "Wiring AI-assisted features into a real product surface." },
];

export const QA_PRINCIPLES = [
  { title: "Break it before users do", detail: "Every feature is examined for the inputs and states nobody planned for." },
  { title: "Test the contract, not the screen", detail: "API status codes, payload shapes and validation rules get checked directly." },
  { title: "Reproduce, then report", detail: "Clear steps, severity and priority — defects that a developer can act on." },
  { title: "Regression is not optional", detail: "Existing flows are re-verified after every meaningful change." },
];

export const DEVOPS_STEPS = [
  { title: "Version control", detail: "Git branching and GitHub-based collaboration." },
  { title: "Configuration", detail: "Environment variables and per-environment secrets kept out of source." },
  { title: "Deployment", detail: "Frontend on Netlify, backend services on Render." },
  { title: "Managed data", detail: "MongoDB Atlas for cloud persistence and access rules." },
  { title: "CI/CD concepts", detail: "Understanding build, test and deploy pipelines conceptually." },
];

export const SECURITY_ITEMS = [
  { title: "Authentication", detail: "JWT-based sessions with token expiry and secure storage handling." },
  { title: "Authorization", detail: "Users can only read and modify records they own." },
  { title: "Input validation", detail: "Server-side validation before anything reaches the database." },
  { title: "Secure API design", detail: "Protected routes, least-privilege responses, no data leakage in errors." },
  { title: "OWASP fundamentals", detail: "Awareness of injection, broken access control and misconfiguration risks." },
];
