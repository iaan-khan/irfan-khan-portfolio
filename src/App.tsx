import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Architecture } from './components/Architecture'
import { Stack } from './components/Stack'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-dark-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Architecture />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}

export default App
