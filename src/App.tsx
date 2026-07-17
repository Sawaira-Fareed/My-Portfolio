import Hero from './sections/Hero'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import SplashCursor from './components/effects/SplashCursor'

function App() {
  return (
    <div className="min-h-screen bg-midnight-black">
      <SplashCursor />
      <Hero />
      <div id="about">
        {/* About section goes here next */}
      </div>
      <TechStack />
      <Projects />
    </div>
  )
}

export default App