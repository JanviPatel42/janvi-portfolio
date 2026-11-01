import ProjectGrid from '../../components/ProjectGrid';
import { projects } from '../../data/projects';

export const metadata = {
  title: 'Projects',
  description: 'UX/UI design projects: mobile apps, dashboards, websites and design systems.',
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page" data-theme="dark">
        <h1>Projects</h1>
        <p className="intro">A selection of UX/UI work across mobile apps, dashboards, websites and design systems.</p>
        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}
