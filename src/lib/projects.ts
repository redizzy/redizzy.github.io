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
  links: { label: string; href: string; icon?: string }[];
  icon?: string;
  image?: { src: string; alt: string; width: number; height: number };
  features?: string[];
}

const gaanet: Project = {
  id: "gaanet",
  name: "GAANet",
  title: "Global-guided Asymmetric Attention Network",
  category: "Research & Machine Learning",
  subtitle: "Audio-Visual Speech Separation",
  description:
    "An asymmetric multi-scale fusion framework with global-guided attention for refining audio and visual features across scales.",
  status: "Accepted by ICME 2026",
  note: "Accepted for publication. Code is open source; the preprint is available on arXiv.",
  tags: ["Python", "PyTorch", "Multimodal Learning", "Deep Learning"],
  links: [
    { label: "GitHub", href: "https://github.com/redizzy/GAANet" },
    { label: "arXiv", href: "https://arxiv.org/abs/2610.02752" },
  ],
  image: {
    src: "/proj1_img.webp",
    alt: "GAANet audio-visual fusion architecture showing audio and video multi-scale feature flows",
    width: 2000,
    height: 901,
  },
};

const wholo: Project = {
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

const bling: Project = {
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
    { label: "Website", href: "https://www.bling.best/", icon: "/bling-favicon.svg" },
  ],
  features: [
    "Photo-based calorie and macro estimates",
    "Sticker-style food journal",
    "Water and weight tracking",
    "Shareable FOOD TICKET recaps",
  ],
};

const luko: Project = {
  id: "luko",
  name: "Luko",
  title: "Luko",
  icon: "/luko-icon.jpg",
  category: "Software Engineering",
  subtitle: "AI-assisted food & fitness companion for iOS",
  description:
    "A playful food and fitness companion combining photo, voice, and text meal logging, personalized workouts, and collectible animal companions.",
  status: "Released",
  note: "Contributed to development. Available on the App Store for iPhone and iPad.",
  tags: ["iOS App", "AI-assisted Wellness", "Gamified Habits"],
  links: [
    {
      label: "App Store",
      href: "https://apps.apple.com/nl/app/luko-fitness-food-buddy/id6788284565",
    },
    { label: "Website", href: "https://lukoapp.com/", icon: "/luko-favicon.png" },
  ],
  features: [
    "Photo, voice, and text meal logging",
    "Editable calorie and macro estimates",
    "Personalized daily workout plans",
    "Collectible companions and sticker maps",
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
    projects: [wholo, bling, luko],
  },
];
