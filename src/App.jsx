import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhatWeDevelop from './components/WhatWeDevelop'
import Projects from './pages/Projects'

import Booking from './pages/Booking'
import LandingProcess from './components/LandingProcess'
gsap.registerPlugin(ScrollTrigger)

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])
  return (
    <main>
      <section data-reveal>
        <Hero />
      </section>
      <section data-reveal>
        <WhatWeDevelop />
      </section>
      <LandingProcess />
      <section className="border-t border-neutral-200" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white">
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">Want us to build your project?</h3>
              <p className="mt-1 text-neutral-600">Book now — we’ll share a mini‑proposal within 24 hours.</p>
            </div>
            <a href="/booking" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white text-sm font-semibold">Book your slot</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
