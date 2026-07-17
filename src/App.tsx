import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import SplashCursor from './components/effects/SplashCursor'

function App() {
  return (
    <div className="min-h-screen bg-midnight-black">
      <SplashCursor />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App