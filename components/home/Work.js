import Link from 'next/link';
import Tile from '../Tile';
import { projects } from '../../data/projects';

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const list = (featured.length ? featured : projects).slice(0, 6);
  return (
    <section className="work" id="work" data-theme="dark">
      <div className="work-head">
        <h2>Selected work</h2>
        <Link className="btn ghost" href="/projects"><span>View all projects →</span></Link>
      </div>
      <div className="work-grid">
        {list.map((p) => <Tile key={p.slug} p={p} />)}
      </div>
    </section>
  );
}
