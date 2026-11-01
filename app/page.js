import Preloader from '../components/Preloader';
import HomeEffects from '../components/HomeEffects';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Work from '../components/home/Work';
import Process from '../components/home/Process';
import Ai from '../components/home/Ai';
import Tools from '../components/home/Tools';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Preloader />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Process />
        <Ai />
        <Tools />
        <Contact />
      </main>
      <HomeEffects />
    </>
  );
}
