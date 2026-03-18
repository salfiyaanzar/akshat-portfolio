import BackgroundCanvas from './components/BackgroundCanvas.jsx'
import Contact from './components/Contact.jsx'
import ContributionGraph from './components/ContributionGraph.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import HeaderBio from './components/HeaderBio.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import TopNav from './components/TopNav.jsx'

export default function App() {
  return (
    <div className="antialiased selection:bg-neutral-800 selection:text-white min-h-screen flex flex-col items-center text-neutral-200 font-sans bg-[#050505] pb-24 relative">
      <BackgroundCanvas />
      <TopNav />

      <main className="z-10 flex flex-col gap-20 w-full max-w-[700px] mt-36 pr-5 pl-5 relative gap-x-20 gap-y-20">
        <HeaderBio />
        <ContributionGraph />
        <hr className="border-white/10" />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <hr className="border-white/10 mt-4" />
        <Contact />
      </main>
    </div>
  )
}
