export default function Hero() {
  return (
<section className="hero" data-theme="dark">
    <div className="blob b1" data-speed="0.1"></div>
    <div className="blob b2" data-speed="-0.08"></div>
    <div className="hero-text">
      <p className="label">Lead UX/UI Designer · 5+ years</p>
      <h1>Designing digital experiences that feel simple and intuitive.</h1>
      <p className="lead">I turn complex requirements into thoughtful experiences for mobile apps, websites, and dashboards.</p>
      <div className="cta-row">
        <a className="btn magnetic" href="#work"><span>Explore my work ↗</span></a>
        <a className="btn ghost magnetic" href="#about"><span>About me</span></a>
      </div>
    </div>

    <div className="hero-art" id="heroArt">
      <svg className="hero-svg" viewBox="0 0 520 460" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a website and mobile app being designed">
        <rect x="20" y="50" width="340" height="250" rx="20" fill="var(--panel)" stroke="var(--line)"/>
        <circle cx="44" cy="76" r="5" fill="#FF9B71"/><circle cx="62" cy="76" r="5" fill="#FFD98A"/><circle cx="80" cy="76" r="5" fill="#55F2CF"/>
        <rect x="40" y="98" width="70" height="182" rx="10" fill="var(--line)"/>
        <rect x="126" y="98" width="214" height="26" rx="8" fill="var(--line)"/>
        <rect x="126" y="136" width="100" height="70" rx="12" fill="#55F2CF"/>
        <rect x="238" y="136" width="102" height="70" rx="12" fill="#FF9B71"/>
        <rect x="126" y="218" width="214" height="62" rx="12" fill="var(--line)"/>
        <path d="M140 262l22-20 18 12 28-26 24 14 30-22" stroke="#55F2CF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <g transform="translate(300 140)">
          <rect width="160" height="290" rx="30" fill="#0d1321" stroke="#55F2CF" strokeWidth="3"/>
          <rect x="58" y="12" width="44" height="8" rx="4" fill="#26324d"/>
          <rect x="18" y="40" width="90" height="12" rx="6" fill="#fff" opacity=".85"/>
          <rect x="18" y="60" width="60" height="8" rx="4" fill="#fff" opacity=".35"/>
          <rect x="18" y="86" width="124" height="86" rx="16" fill="#8EC5FF"/>
          <circle cx="104" cy="120" r="18" fill="#fff" opacity=".6"/>
          <rect x="18" y="186" width="124" height="14" rx="7" fill="#fff" opacity=".18"/>
          <rect x="18" y="208" width="124" height="14" rx="7" fill="#fff" opacity=".18"/>
          <rect x="18" y="236" width="124" height="34" rx="17" fill="#FF9B71"/>
        </g>
        <path d="M30 400C90 320 150 430 230 350" stroke="#55F2CF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 400L90 320M230 350L150 430" stroke="var(--fg)" strokeOpacity=".4" strokeDasharray="4 4"/>
        <circle cx="90" cy="320" r="5" fill="#0d1321" stroke="#55F2CF" strokeWidth="2"/>
        <circle cx="150" cy="430" r="5" fill="#0d1321" stroke="#55F2CF" strokeWidth="2"/>
        <rect x="24" y="394" width="12" height="12" fill="#fff" stroke="#55F2CF" strokeWidth="2"/>
        <rect x="224" y="344" width="12" height="12" fill="#fff" stroke="#55F2CF" strokeWidth="2"/>
        <circle cx="400" cy="30" r="12" fill="#55F2CF"/><circle cx="430" cy="30" r="12" fill="#FF9B71"/><circle cx="460" cy="30" r="12" fill="#FFD98A"/><circle cx="490" cy="30" r="12" fill="#8EC5FF"/>
        <g transform="translate(236 196)">
          <path d="M0 0v24l6-5 5 11 5-2-5-11h8z" fill="#55F2CF" stroke="#0d1321" strokeWidth="1.5" strokeLinejoin="round"/>
          <rect x="18" y="24" width="58" height="24" rx="12" fill="#55F2CF"/>
          <text x="47" y="40" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fontWeight="700" fill="#0d1321">Janvi</text>
        </g>
      </svg>

      <span className="chip ch1" style={{ '--d': 18 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="7" height="6" rx="3"/><rect x="12" y="2" width="7" height="6" rx="3"/><rect x="5" y="8" width="7" height="6" rx="3"/><circle cx="15.5" cy="11" r="3.5"/><path d="M5 17a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>Figma</span>
      <span className="chip ch2" style={{ '--d': -14 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="4"/><path d="M10 9l5 3-5 3z"/></svg>Prototype</span>
      <span className="chip ch3" style={{ '--d': 24 }}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.3L20.5 10l-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-1.7z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>AI workflows</span>
      <span className="chip ch4" style={{ '--d': -20 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>Design systems</span>
    </div>
  </section>
  );
}
