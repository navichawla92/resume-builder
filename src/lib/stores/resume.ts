import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface ResumeData {
  personal: {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    website?: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    current: boolean;
    gpa?: string;
  }>;
  skills: Array<{
    id: string;
    category: string;
    skills: string[];
  }>;
  projects: Array<{
    id: string;
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
  }>;
}

export const defaultResumeData: ResumeData = {
  personal: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/johndoe',
    website: 'https://johndoe.dev',
    summary: 'Passionate software developer with 5+ years of experience in full-stack development. Skilled in modern web technologies and agile development practices.'
  },
  experience: [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Software Developer',
      startDate: '2021-03',
      endDate: '',
      current: true,
      description: 'Lead development of web applications using React, Node.js, and AWS. Mentor junior developers and participate in architecture decisions.'
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      startDate: '2019-06',
      endDate: '2021-02',
      current: false,
      description: 'Built and maintained multiple client projects using MERN stack. Improved application performance by 40% through optimization.'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of California, Berkeley',
      degree: "Bachelor's",
      field: 'Computer Science',
      startDate: '2015-09',
      endDate: '2019-05',
      current: false,
      gpa: '3.8'
    }
  ],
  skills: [
    {
      id: '1',
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java']
    },
    {
      id: '2',
      category: 'Web Technologies',
      skills: ['React', 'Node.js', 'Svelte', 'HTML/CSS', 'GraphQL']
    },
    {
      id: '3',
      category: 'Tools & Platforms',
      skills: ['AWS', 'Docker', 'Git', 'MongoDB', 'PostgreSQL']
    }
  ],
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      url: 'https://demo-shop.example.com',
      github: 'https://github.com/johndoe/ecommerce-platform'
    },
    {
      id: '2',
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Svelte', 'Firebase', 'Tailwind CSS'],
      url: 'https://taskapp.example.com',
      github: 'https://github.com/johndoe/task-manager'
    }
  ]
};

export const resumeStore: Writable<ResumeData> = writable(defaultResumeData);
export const selectedTemplate = writable('modern');

export const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean and contemporary design' },
  { id: 'classic', name: 'Classic', description: 'Traditional professional layout' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and elegant design' },
  { id: 'creative', name: 'Creative', description: 'Unique and eye-catching layout' }
];
