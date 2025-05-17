import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Cloud & Infrastructure',
    skills: [
      { 
        name: 'Microsoft Azure', 
        level: 90, 
        color: 'bg-blue-500',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg'
      },
      { 
        name: 'AWS', 
        level: 85, 
        color: 'bg-yellow-500',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg'
      },
      { 
        name: 'Kubernetes', 
        level: 82, 
        color: 'bg-blue-600',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg'
      },
      { 
        name: 'Docker', 
        level: 88, 
        color: 'bg-blue-400',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
      },
      { 
        name: 'Linux', 
        level: 92, 
        color: 'bg-yellow-600',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'
      }
    ],
  },
  {
    name: 'Security Tools & Platforms',
    skills: [
      { 
        name: 'Burp Suite', 
        level: 88, 
        color: 'bg-orange-500',
        icon: '/images/burp-suite.svg'
      },
      { 
        name: 'Nmap', 
        level: 90, 
        color: 'bg-green-500',
        icon: '/images/nmap.svg'
      },
      { 
        name: 'Wireshark', 
        level: 85, 
        color: 'bg-blue-500',
        icon: '/images/wireshark.svg'
      },
      { 
        name: 'Metasploit', 
        level: 82, 
        color: 'bg-red-500',
        icon: '/images/metasploit.svg'
      },
      { 
        name: 'Kali Linux', 
        level: 95, 
        color: 'bg-gray-800',
        icon: '/images/kali.svg'
      }
    ],
  },
  {
    name: 'Development & Scripting',
    skills: [
      { 
        name: 'Python', 
        level: 92, 
        color: 'bg-blue-500',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
      },
      { 
        name: 'PowerShell', 
        level: 88, 
        color: 'bg-blue-600',
        icon: 'https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_128.svg'
      },
      { 
        name: 'Bash', 
        level: 85, 
        color: 'bg-gray-700',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg'
      },
      { 
        name: 'Git', 
        level: 90, 
        color: 'bg-orange-600',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
      }
    ],
  },
  {
    name: 'Web Technologies',
    skills: [
      { 
        name: 'JavaScript', 
        level: 85, 
        color: 'bg-yellow-400',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
      },
      { 
        name: 'React', 
        level: 80, 
        color: 'bg-blue-400',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      { 
        name: 'Node.js', 
        level: 82, 
        color: 'bg-green-600',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
      }
    ],
  }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-2">
        <img 
          src={skill.icon} 
          alt={`${skill.name} icon`}
          className="w-6 h-6 mr-3"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/24';
          }}
        />
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
            <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className={`h-2.5 rounded-full ${skill.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category.name}
                </h2>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  OSCP Trainee
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Offensive Security Certified Professional
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Azure Security Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Microsoft Certified
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  AWS Security Specialist
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Amazon Web Services
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 