'use client';
import { useEffect, useRef, useState } from 'react';

// One number that counts up from 0 when it scrolls into view.
function Num({ value, suffix = '' }) {
    const ref = useRef(null);
    const [n, setN] = useState(value); // final value first, so the server HTML is correct

    useEffect(() => {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let raf;
        setN(0);
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            const t0 = performance.now();
            const dur = 1400;
            const step = (t) => {
                const k = Math.min(1, (t - t0) / dur);
                setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
                if (k < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
        }, { threshold: 0.6 });
        io.observe(ref.current);
        return () => { io.disconnect(); cancelAnimationFrame(raf); };
    }, [value]);

    return <b ref={ref}>{n}{suffix}</b>;
}

export default function Stats({ items }) {
    return (
        <div className="stats-card">
            {items.map((s) => (
                <div className="stat" key={s.label}>
                    <Num value={s.value} suffix={s.suffix} />
                    <span>{s.label}</span>
                </div>
            ))}
        </div>
    );
}