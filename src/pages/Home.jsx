import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Work from './Work'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home