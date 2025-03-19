import Hero from '@/app/Hero/page';
import Education from '@/app/Education/page';
import Skills from './Skills/page';
import Experience from './Experience/page';
import Projects from './Projects/page';

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
