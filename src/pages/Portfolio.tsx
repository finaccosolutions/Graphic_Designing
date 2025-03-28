import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1000',
    description: 'Complete brand identity design including logo, color palette, and brand guidelines.',
  },
  {
    id: 2,
    title: 'Arabic Typography',
    category: 'Calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=1000',
    description: 'Custom Arabic calligraphy design for a luxury brand.',
  },
  {
    id: 3,
    title: 'Corporate Logo Design',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
    description: 'Minimalist and modern logo design for a tech startup.',
  },
  {
    id: 4,
    title: 'Event Poster Series',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    description: 'Series of cohesive event posters for a music festival.',
  },
  {
    id: 5,
    title: 'Product Packaging',
    category: 'Mockups',
    image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=1000',
    description: 'Realistic product packaging mockups for a cosmetics brand.',
  },
  {
    id: 6,
    title: 'Business Card Collection',
    category: 'Visiting Card',
    image: 'https://images.unsplash.com/photo-1629832207531-2b1bcd339b0b?auto=format&fit=crop&q=80&w=1000',
    description: 'Creative business card designs for various industries.',
  },
];

const categories = ['All', 'Branding', 'Logo Design', 'Calligraphy', 'Poster Design', 'Mockups', 'Visiting Card'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4">Our Portfolio</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our diverse collection of design projects, showcasing creativity and expertise across various design disciplines.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-primary mb-2">{project.category}</p>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;