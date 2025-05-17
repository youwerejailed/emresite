import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'Security' | 'Blockchain' | 'Cloud' | 'Tools';
  imageUrl: string;
  githubUrl: string;
  stars?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Subfind3r',
    description: 'A powerful subdomain reconnaissance tool designed for security researchers and penetration testers. Features include fast enumeration, multiple data sources, and advanced filtering capabilities.',
    technologies: ['Python', 'DNS', 'Security Research', 'Reconnaissance', 'OSINT'],
    category: 'Security',
    imageUrl: '/images/subfinder-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/subfind3r',
    stars: 4
  },
  {
    id: 2,
    title: 'JailedLFI',
    description: 'Advanced Local File Inclusion (LFI) Scanner with sophisticated bypass techniques. Built for security professionals to identify and test LFI vulnerabilities with customizable payloads and automated analysis.',
    technologies: ['Python', 'Web Security', 'Penetration Testing', 'Vulnerability Assessment'],
    category: 'Security',
    imageUrl: '/images/lfi-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/jailedLFI',
    stars: 1
  },
  {
    id: 3,
    title: 'Crypto Finance',
    description: 'Comprehensive cryptocurrency analysis platform featuring real-time market data, portfolio tracking, and advanced technical analysis tools. Helps users make informed decisions in the crypto market.',
    technologies: ['Python', 'React', 'Cryptocurrency APIs', 'Data Analysis', 'Trading'],
    category: 'Blockchain',
    imageUrl: '/images/crypto-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/crypto-finance'
  },
  {
    id: 4,
    title: 'Azure Home SOC Lab',
    description: 'Complete Security Operations Center (SOC) lab environment in Azure. Includes SIEM integration, log analytics, and threat detection scenarios for hands-on security training and testing.',
    technologies: ['Azure', 'Security Operations', 'SIEM', 'Threat Detection', 'Log Analytics'],
    category: 'Cloud',
    imageUrl: '/images/soc-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/azure-home-soc-lab'
  },
  {
    id: 5,
    title: 'ADenum',
    description: '🛠 Powerful Active Directory enumeration tool built in PowerShell. Automates the discovery and assessment of AD environments with detailed reporting and minimal footprint.',
    technologies: ['PowerShell', 'Active Directory', 'Security', 'Enumeration', 'Windows'],
    category: 'Security',
    imageUrl: '/images/ad-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/ADenum'
  },
  {
    id: 6,
    title: 'CloudSec Docker Lab',
    description: 'Containerized security testing environment with pre-configured tools and scenarios for cloud security training. Perfect for learning cloud security concepts and practicing security techniques.',
    technologies: ['Docker', 'Cloud Security', 'DevSecOps', 'Container Security', 'Lab Environment'],
    category: 'Cloud',
    imageUrl: '/images/docker-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/CloudSec-Docker-Lab'
  },
  {
    id: 7,
    title: 'Crypto Token Risk Analyzer',
    description: 'Smart contract security analysis tool for cryptocurrency tokens. Identifies potential vulnerabilities, analyzes token economics, and provides risk assessment reports for crypto projects.',
    technologies: ['Python', 'Blockchain', 'Smart Contracts', 'Risk Analysis', 'Security'],
    category: 'Blockchain',
    imageUrl: '/images/token-preview.jpg',
    githubUrl: 'https://github.com/youwerejailed/crypto-token-risk-analyzer'
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'Security', 'Blockchain', 'Cloud', 'Tools'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Animation variants for the plane
  const planeVariants = {
    initial: { x: -100, y: 0, rotate: 0 },
    animate: {
      x: window.innerWidth + 100,
      y: [0, -20, 0, 20, 0],
      rotate: [0, -5, 0, 5, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark py-20 relative overflow-hidden">
      {/* Animated Plane */}
      <motion.div
        className="absolute top-20 z-10"
        variants={planeVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M22 16.5L12 21L2 16.5M22 12L12 16.5L2 12M22 7.5L12 12L2 7.5L12 3L22 7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-0">
              My Projects
            </h1>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x400';
                    }}
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <motion.span
                      className="px-3 py-1 bg-gray-900 bg-opacity-75 text-white rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.stars && (
                      <motion.div
                        className="flex items-center text-yellow-500"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm">{project.stars}</span>
                      </motion.div>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 