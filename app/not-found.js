import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="page">
        <h1>Page not found</h1>
        <p className="intro">The page you are looking for does not exist.</p>
        <div className="cta-row"><Link className="btn" href="/"><span>Back home</span></Link></div>
      </section>
    </main>
  );
}
