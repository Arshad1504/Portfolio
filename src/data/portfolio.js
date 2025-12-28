import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileUser,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Database,
  Layout,
} from "lucide-react";

export const PROFILE = {
  name: "Arshad Alam",
  role: "Full Stack Developer",
  location: "Noida, Uttar Pradesh",
  bio: "Full-stack developer designing and building system architectures for production projects. \n\nMy work focuses on backend engineering, AI & LLM integrations, and automation scripting - creating scalable solutions beyond traditional web applications. \n\nAlways open to connect and collaborate.",
  image: "/profile.jpeg", // Place your profile.png in the public folder
  social: [
    { icon: Github, link: "https://github.com/Arshad1504", label: "GitHub" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/arshad1504",
      label: "LinkedIn",
    },
    { icon: Mail, link: "mailto:arshad.alam1504@gmail.com", label: "Email" },
    { icon: FileUser, link: "https://twitter.com", label: "Resume" },
  ],
};

export const EXPERIENCES = [
  {
    company: "Instasafe Technologies",
    role: "SDE Intern",
    period: "March 2025 - August 2025",
    description: [
      "Performed end-to-end testing of the Zero Trust Architecture product to ensure platform stability and reliability.",
      "Developed and resolved UI development tickets, improving user experience and visual consistency.",
      "Identified and raised critical issue tickets to support rapid debugging and quality assurance.",
      "Verified and closed multiple GitLab issues with 100% accuracy through detailed validation.",
    ],
    tags: [
      "React",
      "JavaScript",
      "Rest API",
      "Networking",
      "Zero Trust Architecture",
    ],
  },
];

export const PROJECTS = [
  {
    title: "CryptoPlace App",
    description:
      "A cryptocurrency trading platform with real-time market data, secure JWT authentication, multi-currency support, and live portfolio profit/loss tracking.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "CoinGecko API",
      "JWT",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: {
      demo: "#",
      github: "https://github.com/Arshad1504/CryptoPlace",
    },
  },
  {
    title: "Share Universe App",
    description:
      "file-sharing platform enabling secure cross-device text and file sharing with user history management.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    links: {
      demo: "#",
      github: "https://github.com/Arshad1504/Share-Universe",
    },
  },
];

export const TECH_STACK = [
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Layout },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Node.js", icon: Terminal },
  { name: "Express", icon: Terminal },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Postman", icon: Code2 },
  { name: "Git", icon: Terminal },
];
