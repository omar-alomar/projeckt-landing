'use client';

import { useState } from 'react';

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

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} className="lightbox-img" />
        </div>
      )}
    </>
  );
}
