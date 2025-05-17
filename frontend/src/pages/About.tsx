import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi there! I'm Emre Sevim, a security-focused full-stack developer specializing in creating robust and functional web applications. With a strong foundation in both frontend and backend development, I integrate advanced security practices into every stage of the development lifecycle.

From building cloud-native infrastructures using Docker and Terraform to implementing real-time threat detection with Falco, Wazuh, and ELK Stack, I bring a unique blend of DevOps and cybersecurity expertise to my projects. Certified in OSCP and AWS, I thrive on transforming complex security challenges into scalable, resilient solutions.

Let’s connect to explore how I can help you build secure, high-performance web applications that stand strong against evolving threats.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My journey in web development started several years ago, and since then,
                I've worked on various projects that have helped me grow as a developer.
                I'm always excited to learn new technologies and stay up-to-date with
                the latest trends in web development.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h2>
                <ul className="space-y-4">
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Bachelor's in Computer Science</span>
                    <br />
                    Akdeniz University Information Department, 2020-2022
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Frontend
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    React, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Backend
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Node.js, Express.js, MySQL, MongoDB, RESTful APIs
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Tools & Others
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Git, Docker, AWS, Agile Methodology, CI/CD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 