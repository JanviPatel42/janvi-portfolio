'use client';
import { useEffect, useState } from 'react';

// Counter shown once per visit on the home page. Adds "loaded" to <body> when done.
export default function Preloader() {
  const [n, setN] = useState(0);

  useEffect(() => {
    const b = document.body;
    if (b.classList.contains('loaded')) { setN(100); return; }
    b.style.overflow = 'hidden';
    let v = 0;
    let timeout;
    const t = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9));
      setN(v);
      if (v === 100) {
        clearInterval(t);
        timeout = setTimeout(() => { b.classList.add('loaded'); b.style.overflow = ''; }, 300);
      }
    }, 50);
    return () => { clearInterval(t); clearTimeout(timeout); b.style.overflow = ''; };
  }, []);

  return (
    <div className="preloader" aria-hidden="true">
      <div className="pre-name">Janvi Vaghasiya</div>
      <div className="pre-count">{n}%</div>
    </div>
  );
}
