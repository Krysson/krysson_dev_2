// src/app/blog/page.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    date: '2024-08-15',
    excerpt: 'Exploring how AI is revolutionizing the way we build and interact with websites.'
  },
  {
    id: 2,
    title: 'Quantum Computing: A Web Developer&rsquo;s Perspective',
    date: '2024-08-10',
    excerpt: 'Understanding the potential impact of quantum computing on web technologies.'
  },
  {
    id: 3,
    title: 'Building Scalable Web Applications with Microservices',
    date: '2024-08-05',
    excerpt: 'A deep dive into microservices architecture for modern web applications.'
  }
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-4xl font-bold text-blue-400 mb-8 text-center'>
        Our Blog
      </motion.h1>
      <div className='space-y-8'>
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-blue-400 mb-2'>{post.title}</h2>
              <p className='text-gray-400 text-sm mb-4'>{post.date}</p>
              <p className='text-gray-300 mb-4'>{post.excerpt}</p>
              <button className='text-purple-400 hover:text-purple-300 transition-colors'>
                Read more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
