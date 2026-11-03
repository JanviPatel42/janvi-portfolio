import Link from 'next/link';
import { notFound } from 'next/navigation';
import Gallery from '../../../components/Gallery';
import { projects, imagesOf, coverOf } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const cover = coverOf(p);
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: cover ? [cover] : undefined },
  };
}

/* eslint-disable @next/next/no-img-element */
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const prev = projects[i - 1];
  const next = projects[i + 1];
  const cover = coverOf(p);

  const meta = [
    ['Category', p.categories.join(', ')],
    ['Audience', p.audience],
    ['Tools', (p.tools || []).join(', ')],
  ].filter(([, v]) => v);

  const buttons = [
    ...(p.figma ? [{ label: 'View in Figma', url: p.figma }] : []),
    ...(p.live || []).map((l) => ({ label: l.label, url: l.url })),
  ];

  return (
    <main>
      <section className="page" data-theme="dark">
        <header className="proj-head">
          <Link href="/projects" className="back">← All projects</Link>
          <h1>{p.title}</h1>
          <p className="intro">{p.summary}</p>
          {buttons.length > 0 && (
            <div className="proj-links">
              {buttons.map((b, k) => (
                <a key={b.label} className={'btn' + (k ? ' ghost' : '')} href={b.url} target="_blank" rel="noopener noreferrer">
                  <span>{b.label} ↗</span>
                </a>
              ))}
            </div>
          )}
        </header>

        <dl className="meta">
          {meta.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>

        <div className={'cover' + (cover ? '' : ' ph')} style={{ background: p.color || '#55F2CF' }}>
          {cover && <img src={cover} alt={`${p.title} cover`} />}
        </div>

        <div className="story">
          <div className="row"><h2>Overview</h2><p>{p.overview}</p></div>
          {p.features?.length > 0 && (
            <div className="row">
              <h2>Key features</h2>
              <ul className="features">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className="gal">
          <h2>Screens</h2>
          <Gallery images={imagesOf(p)} color={p.color} title={p.title} />
        </div>

        <nav className="pn">
          {[[prev, 'Previous'], [next, 'Next']].map(([q, label], k) =>
            q ? (
              <Link key={label} href={`/projects/${q.slug}`} className={'pn-item' + (k ? ' r' : '')}>
                <span>{label}</span><strong>{q.title}</strong>
              </Link>
            ) : (
              <span key={label} className="pn-item off" />
            )
          )}
        </nav>
      </section>
    </main>
  );
}