'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import AlphaForm from './AlphaForm';

export default function CTAButton({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open &&
        createPortal(
          <AlphaForm onClose={() => setOpen(false)} />,
          document.body
        )}
    </>
  );
}
