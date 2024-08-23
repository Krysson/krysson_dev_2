// src/components/Layout.tsx
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ThemeProvider } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'>
      <div className='min-h-screen flex flex-col bg-red-900 text-white'>
        <Navbar />
        <main className='flex-grow container mx-auto px-4 py-8'>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
