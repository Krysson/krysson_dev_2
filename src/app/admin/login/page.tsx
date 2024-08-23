// src/app/admin/login/page.tsx
'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await signIn('credentials', {
      redirect: false,
      username: credentials.username,
      password: credentials.password
    });

    if (result?.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-gray-800 p-8 rounded-lg shadow-lg w-96'>
        <h1 className='text-2xl font-bold text-blue-400 mb-6 text-center'>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-300 mb-2'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={credentials.username}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-300 mb-2'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          {error && <div className='mb-4 text-red-500 text-center'>{error}</div>}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'>
            Log In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
