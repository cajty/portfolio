import { About } from './components/sections/About';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Navbar } from './components/layout/Navbar';
import CareerSection from "./components/sections/CareerSection.tsx";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
          <CareerSection />
      </main>
    </div>
  );
}

export default App;