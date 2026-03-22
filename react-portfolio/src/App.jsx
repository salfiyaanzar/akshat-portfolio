import BackgroundCanvas from './components/BackgroundCanvas.jsx'
import Contact from './components/Contact.jsx'
import ContributionGraph from './components/ContributionGraph.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Hero from './components/Hero.jsx'
import Hobbies from './components/Hobbies.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import TopNav from './components/TopNav.jsx'

export default function App() {
  return (
    <div className="antialiased selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-800 dark:selection:text-white min-h-screen flex flex-col items-center text-neutral-800 font-sans bg-white relative dark:bg-[#050505] dark:text-neutral-200 pb-[max(6rem,env(safe-area-inset-bottom))]">
      <BackgroundCanvas />
      <TopNav />

      <section id="hero" className="z-10 w-full max-w-[700px] w-full px-4 sm:px-5 pt-20 sm:pt-24 flex flex-col items-center gap-4 sm:gap-6">
        <Hero />
        <ContributionGraph />
      </section>

      <main className="z-10 flex flex-col gap-6 sm:gap-8 w-full max-w-[700px] w-full px-4 sm:px-5 relative mt-8 sm:mt-12">
        <hr className="border-neutral-200 dark:border-white/10" />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Hobbies />
        <hr className="border-neutral-200 dark:border-white/10 mt-2" />
        <Contact />
      </main>
    </div>
  )
}
