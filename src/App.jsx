import React, { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillSection from './components/Sections/SkillSection'
import ProjectSection from './components/Sections/ProjectSection'
import AboutSection from './components/Sections/AboutSection'
import ContactSection from './components/Sections/ContactSection'
import Footer from './components/Sections/Footer'

const App = () => {

// start from top 
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <Footer/>
      </div>
      
    </ThemeProvider>
  )
}

export default App