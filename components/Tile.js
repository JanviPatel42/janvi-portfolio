import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function Tile({ p }) {
  return (
    <Link href={`/projects/${p.slug}`} className="tile" data-tilt="">
      <div className={'shot' + (p.cover ? '' : ' ph')} style={{ background: p.color || '#55F2CF' }}>
        {p.cover && <img src={p.cover} alt={`${p.title} cover`} loading="lazy" />}
      </div>
      <h3>{p.title}</h3>
      <p>{[p.category, p.year].filter(Boolean).join(' · ')}</p>
    </Link>
  );
}
