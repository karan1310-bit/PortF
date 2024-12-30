import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import CustomCursor from './CustomCursor'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from "./components/Footer";
import Lenis from 'lenis'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'

const App = () => {

  const [ loading, setLoading ] = useState(true) 
  
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      window.scrollTo(0, 0);
    }, 2500);
  }, [])

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <CustomCursor />
      <AnimatePresence mode="wait">
      { 
        loading && <Loader />
      }
      </AnimatePresence>
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