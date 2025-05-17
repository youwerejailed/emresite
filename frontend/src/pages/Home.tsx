import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('greeting')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {t('role')}
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="btn btn-primary"
            >
              {t('viewMyWork')}
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary"
            >
              {t('contactTitle')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('webDev')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('webDevDescription')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('webSecurity')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('webSecurityDescription')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('backendDev')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('backendDevDescription')}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 