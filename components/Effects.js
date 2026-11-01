'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Site-wide effects: scroll progress bar, custom cursor, magnetic buttons, card tilt.
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      document.body.classList.add('loaded');
      document.body.classList.remove('light');
    }
    const t = setTimeout(() => window.dispatchEvent(new Event('resize')), 120);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const fine = matchMedia('(hover:hover)').matches;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const undo = [];
    const on = (target, ev, fn, opts) => { target.addEventListener(ev, fn, opts); undo.push(() => target.removeEventListener(ev, fn, opts)); };

    const progress = document.getElementById('progress');
    if (progress) {
      let busy = false;
      const upd = () => {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
        busy = false;
      };
      on(window, 'scroll', () => { if (!busy) { busy = true; requestAnimationFrame(upd); } }, { passive: true });
      on(window, 'resize', upd);
      upd();
    }

    if (fine) {
      const c = document.getElementById('cursor');
      if (c) {
        let x = 0, y = 0, cx = 0, cy = 0, raf;
        on(window, 'mousemove', (e) => { x = e.clientX; y = e.clientY; c.classList.add('on'); });
        const loop = () => {
          cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
          const half = c.offsetWidth / 2;
          c.style.transform = `translate(${cx - half}px, ${cy - half}px)`;
          raf = requestAnimationFrame(loop);
        };
        loop();
        undo.push(() => cancelAnimationFrame(raf));
        on(document, 'mouseover', (e) => {
          if (e.target instanceof Element) c.classList.toggle('big', !!e.target.closest('a, button, .btn, .skill-list li'));
        });
      }
      if (!reduce) {
        on(document, 'mousemove', (e) => {
          if (!(e.target instanceof Element)) return;
          const m = e.target.closest('.magnetic');
          if (m) {
            const r = m.getBoundingClientRect();
            m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
          }
          const t = e.target.closest('[data-tilt]');
          if (t) {
            const r = t.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
            t.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
          }
        });
        on(document, 'mouseout', (e) => {
          if (!(e.target instanceof Element)) return;
          const m = e.target.closest('.magnetic, [data-tilt]');
          if (m && !m.contains(e.relatedTarget)) m.style.transform = '';
        });
      }
    }
    return () => undo.forEach((f) => f());
  }, []);

  return null;
}
