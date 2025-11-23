"use client"
import React from 'react'
import Hero from './components/Hero/page'
import AboutPage from './components/About/page'
import Services from './components/Services/page'
import Projects from './Projects/page'

export default function HomePage() {
  return (
    <div>
        <Hero/>
        <AboutPage/>
        {/* <Services/> */}
        <Projects/>
    </div>
  )
}


