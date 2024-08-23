// src/app/admin/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [blogPost, setBlogPost] = useState({ title: '', content: '' });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/admin/login');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the blog post data to your backend
    console.log('New blog post:', blogPost);
    // Reset form after submission
    setBlogPost({ title: '', content: '' });
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-4xl font-bold text-blue-400 mb-8 text-center'>
        Admin Dashboard
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-blue-400 mb-6'>Add New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-300 mb-2'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={blogPost.title}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='content'
              className='block text-gray-300 mb-2'>
              Content
            </label>
            <textarea
              id='content'
              name='content'
              value={blogPost.content}
              onChange={handleChange}
              required
              rows={6}
              className='w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'>
            Add Blog Post
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
