'use client';
import { useEffect } from 'react';

// Home-page only: word-by-word About reveal, stacking process cards, parallax blobs,
// dark/light section flip, hero chips following the mouse.
export default function HomeEffects() {
  useEffect(() => {
    const $$ = (s, c = document) => [...c.querySelectorAll(s)];
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(hover:hover)').matches;
    const undo = [];
    const on = (target, ev, fn, opts) => { target.addEventListener(ev, fn, opts); undo.push(() => target.removeEventListener(ev, fn, opts)); };

    const words = $$('.words').map((p) => ({ p, w: $$('.word', p) }));
    const steps = $$('.step');
    steps.forEach((s, i) => s.style.setProperty('--i', i));
    const parallax = $$('[data-speed]');

    const onScroll = () => {
      const y = scrollY, vh = innerHeight;
      if (!reduce) parallax.forEach((el) => { el.style.transform = `translateY(${y * el.dataset.speed}px)`; });
      words.forEach(({ p, w }) => {
        const r = p.getBoundingClientRect();
        const prog = clamp((vh * 0.8 - r.top) / (r.height + vh * 0.2), 0, 1);
        const n = Math.round(prog * w.length);
        w.forEach((el, i) => el.classList.toggle('on', i < n));
      });
      if (!reduce) steps.forEach((s, i) => {
        const next = steps[i + 1];
        if (!next) return;
        const top = parseFloat(getComputedStyle(s).top);
        const p = clamp((vh - next.getBoundingClientRect().top) / (vh - top), 0, 1);
        s.style.transform = `scale(${1 - p * 0.05})`;
        s.style.filter = `brightness(${1 - p * 0.1})`;
      });
    };
    let busy = false;
    on(window, 'scroll', () => { if (!busy) { busy = true; requestAnimationFrame(() => { onScroll(); busy = false; }); } }, { passive: true });
    on(window, 'resize', onScroll);
    onScroll();

    const themeIO = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) document.body.classList.toggle('light', e.target.dataset.theme === 'light');
    }), { rootMargin: '-50% 0px -50% 0px' });
    $$('[data-theme]').forEach((s) => themeIO.observe(s));

    const art = document.getElementById('heroArt');
    if (art && fine && !reduce) {
      on(window, 'mousemove', (e) => {
        art.style.setProperty('--mx', (e.clientX / innerWidth - 0.5) * 2);
        art.style.setProperty('--my', (e.clientY / innerHeight - 0.5) * 2);
      });
    }

    return () => {
      undo.forEach((f) => f());
      themeIO.disconnect();
      document.body.classList.remove('light');
    };
  }, []);

  return null;
}
