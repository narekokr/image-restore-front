import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-8"
    >
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 mt-4 block">Go to Home</Link>
    </motion.div>
  </div>
);

export default NotFoundPage;
