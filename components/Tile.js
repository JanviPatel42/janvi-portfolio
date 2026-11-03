import Link from 'next/link';
import { coverOf } from '../data/projects';

/* eslint-disable @next/next/no-img-element */
export default function Tile({ p }) {
  const cover = coverOf(p);
  return (
    <Link href={`/projects/${p.slug}`} className="tile" data-tilt="">
      <div className={'shot' + (cover ? '' : ' ph')} style={{ background: p.color || '#55F2CF' }}>
        {cover && <img src={cover} alt={`${p.title} cover`} loading="lazy" />}
      </div>
      <h3>{p.title}</h3>
      <p>{p.categories.join(' · ')}</p>
    </Link>
  );
}