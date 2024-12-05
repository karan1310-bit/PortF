import React, { useEffect } from 'react'
import Hero from './components/Hero'
import CustomCursor from './CustomCursor'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from "./components/Footer";

const App = () => {

  useEffect(() => {(
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      })()
  }, [])

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}

export default App