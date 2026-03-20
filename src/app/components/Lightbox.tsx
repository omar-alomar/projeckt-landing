'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Lightbox({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onClick={() => setOpen(true)}
      />
      {open &&
        mounted &&
        createPortal(
          <div className="lightbox-overlay" onClick={() => setOpen(false)}>
            <img src={src} alt={alt} className="lightbox-img" />
          </div>,
          document.body
        )}
    </>
  );
}
