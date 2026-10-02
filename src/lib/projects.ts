export interface Project {
  id: string;
  name: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  status: string;
  note: string;
  tags: string[];
  link: { label: string; href: string };
  image?: { src: string; alt: string; width: number; height: number };
  features?: string[];
}

export const gaanet: Project = {
  id: "gaanet",
  name: "GAANet",
  title: "Global-guided Asymmetric Attention Network",
  category: "Research & Machine Learning",
  subtitle: "Audio-Visual Speech Separation",
  description:
    "An asymmetric multi-scale fusion framework with global-guided attention for refining audio and visual features across scales.",
  status: "Accepted",
  note: "Accepted for publication. Code is open source; the publication link will be added when available.",
  tags: ["Python", "PyTorch", "Multimodal Learning", "Deep Learning"],
  link: { label: "GitHub", href: "https://github.com/redizzy/GAANet" },
  image: {
    src: "/proj1_img.webp",
    alt: "GAANet audio-visual fusion architecture showing audio and video multi-scale feature flows",
    width: 2000,
    height: 901,
  },
};

export const wholo: Project = {
  id: "wholo",
  name: "WHOLO",
  title: "WHOLO",
  category: "Software Engineering",
  subtitle: "AI-assisted iOS wellness app",
  description:
    "An iOS wellness app combining meal logging, nutrition estimates, conversational guidance, and Apple Health step tracking.",
  status: "Released",
  note: "Available on the App Store in the United States and Canada.",
  tags: ["iOS App", "AI-assisted Wellness", "Apple Health"],
  link: {
    label: "App Store",
    href: "https://apps.apple.com/us/app/wholo/id6802063156",
  },
  features: [
    "Photo and barcode meal logging",
    "Estimated nutrition information",
    "AI-guided wellness conversations",
    "Apple Health step tracking",
  ],
};

export const projectGroups = [
  {
    id: "research",
    title: "Research",
    archiveId: "academic",
    description: "My research focuses on machine learning and multimodal understanding, including audio-visual speech separation. Here are the methods, experiments, and research code behind that work.",
    projects: [gaanet],
  },
  {
    id: "software",
    title: "Software",
    archiveId: "software",
    description: "Applications and tools built around practical needs, including WHOLO, an iOS wellness app available in the United States and Canada.",
    projects: [wholo],
  },
];
