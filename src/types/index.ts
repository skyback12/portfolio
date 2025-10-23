export interface Project {
  title: string;
  type: "company" | "personal";
  slug: string;
  desc: string;
  tech: string[];
  link: string;
  note?: string;
  live: boolean;
  short: string;
  longDesc: string;
  contributions: string[];
  videoLink?: string;
  additionalLink?: string;
  additionalLinkText?: string;
  images?: string[];
  repo?: string;
}

export interface SkillGroup {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

export interface TypewriterProps {
  roles: string[];
  speed?: number;
  delay?: number;
}
