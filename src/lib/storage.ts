import { toast } from 'react-hot-toast';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  project_type: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Helper function to generate UUID
const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Projects
export const getProjects = (category?: string): Project[] => {
  try {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    if (category) {
      return projects.filter((project: Project) => project.category === category);
    }
    return projects;
  } catch (error) {
    console.error('Error getting projects:', error);
    return [];
  }
};

export const getFeaturedProjects = (): Project[] => {
  try {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    return projects.filter((project: Project) => project.featured);
  } catch (error) {
    console.error('Error getting featured projects:', error);
    return [];
  }
};

export const createProject = (project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Project => {
  try {
    const projects = getProjects();
    const newProject: Project = {
      ...project,
      id: generateId(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    toast.success('Project created successfully');
    return newProject;
  } catch (error) {
    console.error('Error creating project:', error);
    toast.error('Failed to create project');
    throw error;
  }
};

export const deleteProject = (id: string): void => {
  try {
    const projects = getProjects();
    const filteredProjects = projects.filter((project: Project) => project.id !== id);
    localStorage.setItem('projects', JSON.stringify(filteredProjects));
    toast.success('Project deleted successfully');
  } catch (error) {
    console.error('Error deleting project:', error);
    toast.error('Failed to delete project');
    throw error;
  }
};

// Contact Messages
export const submitContactForm = (message: Omit<ContactMessage, 'id' | 'status' | 'created_at' | 'updated_at'>): ContactMessage => {
  try {
    const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    const newMessage: ContactMessage = {
      ...message,
      id: generateId(),
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    messages.push(newMessage);
    localStorage.setItem('contact_messages', JSON.stringify(messages));
    toast.success('Message sent successfully');
    return newMessage;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    toast.error('Failed to send message');
    throw error;
  }
};

// Authentication
const ADMIN_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'admin123', // In a real app, this should be properly hashed and stored securely
};

export const signIn = (email: string, password: string): Promise<{ user: { email: string } }> => {
  return new Promise((resolve, reject) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));
      resolve({ user });
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
};

export const signOut = (): Promise<void> => {
  return new Promise((resolve) => {
    localStorage.removeItem('user');
    resolve();
  });
};

export const getUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};