import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
function App() {
  return (
    <>
      <Header/>
      <Nav></Nav>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App