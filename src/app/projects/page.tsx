// src/app/projects/page.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'AI-Driven Analytics Platform',
    description: 'Advanced analytics using machine learning algorithms.'
  },
  {
    id: 2,
    title: 'Quantum Computing Simulator',
    description: 'A web-based quantum circuit simulator for educational purposes.'
  },
  {
    id: 3,
    title: 'Blockchain-based Supply Chain',
    description: 'Transparent and secure supply chain management system.'
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-4xl font-bold text-blue-400 mb-8 text-center'>
        Our Projects
      </motion.h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-blue-400 mb-2'>{project.title}</h2>
              <p className='text-gray-300'>{project.description}</p>
            </div>
            <div className='bg-gray-700 px-6 py-4'>
              <button className='text-purple-400 hover:text-purple-300 transition-colors'>
                Learn more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
