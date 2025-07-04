// Types for Resume Application

// --- QR Code Settings ---
export interface QRCodeSettings {
  enabled: boolean;
  type: 'linkedin' | 'website' | 'none';
}

// --- Personal Information ---
export interface PersonalInfo {
  fullName: string;
  professionTitle: string; // Professional title (e.g., Software Engineer)
  email: string;
  phone: string;
  location: string;
  linkedIn?: string;
  website?: string;
  profilePicture?: string; // Base64 encoded image or URL
  qrCode?: QRCodeSettings;
}

// --- Work Experience ---
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[]; // List of key achievements
}

// --- Education ---
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[]; // changed from string to string[]
}

// --- Skill ---
export interface Skill {
  id: string;
  name: string;
  category: string; // e.g. 'Software', 'Technologies & Frameworks', 'General', or user-defined
}

// --- Project ---
export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
}

// --- Additional Section (Languages, Certifications, etc.) ---
export interface AdditionalSection {
  id: string;
  title: string; // e.g. 'Languages', 'Certifications', or user-defined
  items: string[];
}

// --- Main Resume Data ---
export interface ResumeData {
  id: string;
  name: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  template: TemplateType;
  createdAt: string;
  updatedAt: string;
  additionalSections?: AdditionalSection[]; // Optional: languages, certifications, user-defined
  sectionOrder?: string[]; // Order of sections for display (excludes 'personal' which is always first)
}

// --- Template Types ---
export type TemplateType = 'modern' | 'executive' | 'creative' | 'tech' | 'elegant';

// --- Job Description for AI Tailoring ---
export interface JobDescription {
  title: string;
  company: string;
  description: string;
  requirements: string[];
  preferredSkills: string[];
}
