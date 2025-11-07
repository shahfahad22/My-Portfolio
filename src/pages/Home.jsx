import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import FloatingWhatsApp from '../Components/FloatingWhatsApp/FloatingWhatsApp'
import About from '../Components/About/About'
import Skills from "../Components/Skills/Skills"
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import Loader from "../Components/Loader/Loader"
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
     <div className="bg-[#030A19] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Loader />
      <FloatingWhatsApp />
    </div>
  )
}

export default Home