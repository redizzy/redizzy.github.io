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
  links: { label: string; href: string }[];
  icon?: string;
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
  links: [{ label: "GitHub", href: "https://github.com/redizzy/GAANet" }],
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
  icon: "/wholo-icon.png",
  category: "Software Engineering",
  subtitle: "AI-assisted iOS wellness app",
  description:
    "An iOS wellness app combining meal logging, nutrition estimates, conversational guidance, and Apple Health step tracking.",
  status: "Released",
  note: "Available on the App Store in the United States and Canada.",
  tags: ["iOS App", "AI-assisted Wellness", "Apple Health"],
  links: [
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/wholo/id6802063156",
    },
  ],
  features: [
    "Photo and barcode meal logging",
    "Estimated nutrition information",
    "AI-guided wellness conversations",
    "Apple Health step tracking",
  ],
};

export const bling: Project = {
  id: "bling",
  name: "Bling",
  title: "Bling",
  icon: "/bling-icon.jpg",
  category: "Software Engineering",
  subtitle: "AI-assisted food journal for iOS & Android",
  description:
    "A photo-first calorie tracker that turns meals into stickers, with editable nutrition estimates, water and weight logs, and shareable FOOD TICKET recaps.",
  status: "Released",
  note: "Available on the App Store for iPhone and Google Play for Android.",
  tags: ["iOS App", "Android App", "AI-assisted Nutrition"],
  links: [
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/bling-cute-calorie-tracker/id6789046574",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.bling.android",
    },
    { label: "Website", href: "https://www.bling.best/" },
  ],
  features: [
    "Photo-based calorie and macro estimates",
    "Sticker-style food journal",
    "Water and weight tracking",
    "Shareable FOOD TICKET recaps",
  ],
};

export const projectGroups = [
  {
    id: "research",
    title: "Research",
    archiveId: "academic",
    description: "My research focuses on machine learning and multimodal understanding. Here are the methods, experiments, and research code behind that work.",
    projects: [gaanet],
  },
  {
    id: "software",
    title: "Software",
    archiveId: "software",
    description: "I build software to explore ideas and solve practical problems, with care for both design and engineering.",
    projects: [wholo, bling],
  },
];
