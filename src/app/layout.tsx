// src/app/layout.tsx
import { Navbar } from '@/components/Navbar';
import { Providers } from './providers';
import '@/styles/globals.css';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'krysson.dev - Advanced Web Development & AI Solutions',
  description: 'Leading the way in advanced technology and artificial intelligence'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body>
        <div
          className='bg-scroll'
          style={{ backgroundImage: `url('/images/modern-bg.jpg')`, height: '100vh' }}>
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
