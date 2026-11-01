'use client';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const RATIOS = ['4/5', '16/10', '1/1', '3/4'];

export default function Gallery({ images, color, title }) {
  const real = images.filter((x) => x.src);
  const [open, setOpen] = useState(null); // index of the open image, or null
  const items = real.length ? real : Array.from({ length: 8 }, () => ({}));
  const go = (k) => setOpen((k + real.length) % real.length);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % real.length);
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + real.length) % real.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, real.length]);

  const cur = open !== null ? real[open] : null;

  return (
    <>
      <div className="gallery">
        {items.map((im, k) => (
          <figure className="g-item" key={k}>
            {im.src ? (
              <div className="g-img" tabIndex={0} role="button" aria-label={`Open image ${k + 1}`}
                onClick={() => setOpen(k)} onKeyDown={(e) => e.key === 'Enter' && setOpen(k)}>
                <img src={im.src} alt={im.alt || im.caption || `${title} screen ${k + 1}`} loading="lazy" />
              </div>
            ) : (
              <div className="g-img ph" style={{ background: color || '#55F2CF', aspectRatio: RATIOS[k % 4] }} />
            )}
            {im.caption && <figcaption>{im.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {cur && (
        <div className="lb open" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button type="button" className="x" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
          {real.length > 1 && <button type="button" className="prev" aria-label="Previous image" onClick={() => go(open - 1)}>‹</button>}
          {real.length > 1 && <button type="button" className="next" aria-label="Next image" onClick={() => go(open + 1)}>›</button>}
          <img src={cur.src} alt={cur.alt || cur.caption || ''} />
          <p>{open + 1} / {real.length}{cur.caption ? ' — ' + cur.caption : ''}</p>
        </div>
      )}
    </>
  );
}
