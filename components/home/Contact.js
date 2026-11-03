import { site } from '../../data/site';

export default function Contact() {
  return (
    <section className="contact" id="contact" data-theme="dark">
      <div className="contact-card">
        <div className="contact-copy">
          <h2>Let&apos;s connect</h2>
          <p className="sub">Have a project or opportunity in mind? I&apos;m always open to connecting with people who value thoughtful design, collaboration, and meaningful digital experiences.</p>
        </div>
        <ul className="links">
          <li><a href={`mailto:${site.email}`}><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 8l9 6 9-6" /></svg></span>{site.email}</a></li>
          {/* <li><a href={`tel:${site.phone}`}><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg></span>{site.phoneDisplay}</a></li> */}

          <li><a href={site.linkedin} target="_blank" rel="noopener"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7" /></svg></span>LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
}
