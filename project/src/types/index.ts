export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}