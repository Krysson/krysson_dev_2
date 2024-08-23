// src/components/BackgroundImage.tsx
import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  return (
    <div className='absolute inset-0 z-0'>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        quality={100}
      />
    </div>
  );
};
