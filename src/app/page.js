import Navbar from './components/Navbar';
import Hero from '@/app/sections/Hero';
import Education from '@/app/sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Education />
      <Skills/>
      <Experience/>
      <Projects/>
    </>
  );
}
