import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import SkillsSection from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactForm from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <SkillsSection />
      <AboutMe />
      <Projects />
      <ContactForm />
    </>
  )
}

export default App
