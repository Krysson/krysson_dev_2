// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {new Date().getFullYear()} krysson.dev. All rights reserved.</p>
        <p className='mt-2 text-sm text-gray-400'>
          Leading the way in advanced technology and artificial intelligence
        </p>
      </div>
    </footer>
  );
};
