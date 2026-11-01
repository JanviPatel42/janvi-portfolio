'use client';
import { useState } from 'react';
import Tile from './Tile';

export default function ProjectGrid({ projects }) {
  const cats = ['All', ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const [cat, setCat] = useState('All');
  const list = projects.filter((p) => cat === 'All' || p.category === cat);

  return (
    <>
      <div className="filters">
        {cats.map((c) => (
          <button key={c} type="button" className={'filter' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="work-grid three">
        {list.length ? list.map((p) => <Tile key={p.slug} p={p} />) : <p className="empty">Projects coming soon.</p>}
      </div>
    </>
  );
}
