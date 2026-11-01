import { Fragment } from 'react';

const intro =
  "I'm a Lead UX/UI Designer with 5+ years of experience designing digital products across mobile applications, websites, and dashboards. I enjoy understanding user needs, turning complex requirements into simple experiences, and creating intuitive interfaces with consistent design systems.";

export default function About() {
  return (
    <section className="about" id="about" data-theme="dark">
      <h2>About me</h2>
      <p className="words big">
        {intro.split(' ').map((w, i) => (
          <Fragment key={i}><span className="word">{w}</span>{' '}</Fragment>
        ))}
      </p>
      <p className="about-more">
        I collaborate with developers and cross-functional teams to bring design ideas to life, maintain quality, and ensure smooth implementation. I also enjoy sharing design knowledge, improving workflows, and supporting team collaboration.
      </p>
    </section>
  );
}
