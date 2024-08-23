// src/app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='text-center'>
        <h1 className='text-9xl font-bold text-indigo-900 mb-4 '>Krysson.Dev</h1>
        <p className='text-xl mb-8'>
          Leading the way in advanced technology and artificial intelligence
        </p>
        {/* animate-pulse - this will make tailwinds animate */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
        {[
          {
            title: 'Our Projects',
            link: '/projects',
            description: 'Explore our cutting-edge projects'
          },
          { title: 'Blog', link: '/blog', description: 'Read about the latest in tech' },
          { title: 'Contact Us', link: '/contact', description: 'Get in touch with our team' }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-blue-400 mb-2'>{item.title}</h2>
            <p className='text-gray-300 mb-4'>{item.description}</p>
            <Link
              href={item.link}
              className='text-purple-400 hover:text-purple-300 transition-colors'>
              Learn more →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
