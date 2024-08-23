// src/components/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <nav className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <Link
            href='/'
            className='text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors'>
            krysson.dev
          </Link>
        </motion.div>
        <ul className='flex space-x-6'>
          {['Home', 'Blog', 'Projects', 'Contact'].map(item => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className='hover:text-blue-300 transition-colors'>
                {item}
              </Link>
            </motion.li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};
