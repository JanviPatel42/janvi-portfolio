'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === '/';

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    ['/#about', 'About'],
    ['/#skills', 'Skills'],
    [home ? '/#work' : '/projects', 'Work'],
    ['/#process', 'Process'],
  ];

  return (
    <header className={'nav' + (open ? ' open' : '')}>
      <Link href="/" className="logo" onClick={() => setOpen(false)}>Janvi Vaghasiya</Link>
      <button type="button" className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav>
        {links.map(([href, label]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link href="/#contact" className="pill" onClick={() => setOpen(false)}>Let&apos;s talk</Link>
      </nav>
    </header>
  );
}
