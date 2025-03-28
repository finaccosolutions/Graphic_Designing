import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Trash2, Plus, Save } from 'lucide-react';
import toast from 'react-hot-toast';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    category: '',
    description: '',
    imageUrl: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement Supabase integration
      toast.success('Project added successfully!');
      setNewProject({
        title: '',
        category: '',
        description: '',
        imageUrl: '',
      });
    } catch (error) {
      toast.error('Failed to add project');
      console.error('Error adding project:', error);
    }
  };

  const handleDelete = async (projectId: string) => {
    try {
      // TODO: Implement Supabase integration
      setProjects(projects.filter(project => project.id !== projectId));
      toast.success('Project deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete project');
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your portfolio projects and client inquiries</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Add New Project Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Add New Project
              </h2>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="Enter project title"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={newProject.category}
                  onChange={handleInputChange}
                  required
                  className="input"
                >
                  <option value="">Select a category</option>
                  <option value="logo">Logo Design</option>
                  <option value="poster">Poster Design</option>
                  <option value="visitingCard">Visiting Card</option>
                  <option value="branding">Branding</option>
                  <option value="mockup">Mockup</option>
                  <option value="calligraphy">Arabic Calligraphy</option>
                </select>
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={newProject.imageUrl}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="Enter image URL"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="input"
                  placeholder="Enter project description"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save Project</span>
              </button>
            </form>
          </motion.div>

          {/* Project List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Existing Projects</h2>
              {projects.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No projects added yet</p>
              ) : (
                <div className="space-y-4">
                  {projects.map(project => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.category}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Upload Section */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Bulk Upload</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Drag and drop files here or click to browse
                </p>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  accept="image/*"
                  onChange={() => {
                    // TODO: Implement file upload logic
                    toast.error('File upload not implemented yet');
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;