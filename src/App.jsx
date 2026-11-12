import './styles/app.css'
import './styles/animations.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import Events from './sections/Events.jsx'
import Gallery from './sections/Gallery.jsx'
import Hero from './sections/Hero.jsx'
import KapeBlanko from './sections/KapeBlanko.jsx'
import Menu from './sections/Menu.jsx'
import Story from './sections/Story.jsx'
import Visit from './sections/Visit.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Intro />
      <Header />
      <main id="main">
        <Hero />
        {/* the rest of the site; on big screens it slides over the held hero like a new page */}
        <div className="page">
          <KapeBlanko />
          <Menu />
          <Story />
          <Events />
          <Gallery />
          <Visit />
        </div>
      </main>
      <Footer />
    </>
  )
}
