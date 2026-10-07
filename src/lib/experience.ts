interface ExperienceEntry {
  period: string;
  organization: string;
  title?: string;
  details?: string;
  description?: string;
  href?: string;
}

export const education: ExperienceEntry[] = [
  {
    period: "Sep 2023 - Present",
    organization: "Hefei University of Technology",
    title: "Bachelor of Science in Information and Computing Science",
    details: "School of Mathematics / Hefei, China",
  },
];

export const workExperience: ExperienceEntry[] = [
  {
    period: "May 2026 - Sep 2026",
    organization: "TEA.AI",
    href: "https://tea-ai.co/",
    title: "Agent Developer",
    details: "Full-time / AI startup",
  },
  {
    period: "Dec 2024 - Jun 2025",
    organization: "WorldQuant",
    href: "https://www.worldquant.com/",
    title: "Quantitative Trading Consultant",
    details: "Remote",
    description:
      "Developed quantitative factors, automated alpha backtesting in Python, and optimized strategies through literature review.",
  },
];
