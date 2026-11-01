import Link from 'next/link';
import { notFound } from 'next/navigation';
import Gallery from '../../../components/Gallery';
import { projects } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: p.cover ? [p.cover] : undefined },
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
  const meta = [['Category', p.category], ['Year', p.year], ['Role', p.role], ['Duration', p.duration], ['Tools', (p.tools || []).join(', ')]].filter(([, v]) => v);
  const story = [['Overview', p.overview], ['Challenge', p.challenge], ['Solution', p.solution], ['Outcome', p.outcome]].filter(([, v]) => v);

  return (
    <main>
      <section className="page" data-theme="dark">
        <header className="proj-head">
          <Link href="/projects" className="back">← All projects</Link>
          <h1>{p.title}</h1>
          <p className="intro">{p.summary}</p>
        </header>

        <dl className="meta">
          {meta.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>

        <div className={'cover' + (p.cover ? '' : ' ph')} style={{ background: p.color || '#55F2CF' }}>
          {p.cover && <img src={p.cover} alt={`${p.title} cover`} />}
        </div>

        <div className="story">
          {story.map(([k, v]) => (
            <div className="row" key={k}><h2>{k}</h2><p>{v}</p></div>
          ))}
        </div>

        <div className="gal">
          <h2>Screens</h2>
          <Gallery images={p.images || []} color={p.color} title={p.title} />
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
