import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import AskMyCV from './components/AskMyCV'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:bg-accent focus:text-c-bg focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <AskMyCV />
    </>
  )
}
