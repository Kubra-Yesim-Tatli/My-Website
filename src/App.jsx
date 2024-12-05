import { useState } from 'react'

import './App.css'
 
import Header from './component/header'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Skills from './component/skills'
import Profile from './component/profile'
import Projects from './component/Projects'

function App() {
 

  return (
    
  <ThemeProvider>
    <LanguageProvider>
      
    <Header/>
    <Skills/>
    <Profile/>
    <Projects/>
    
    </LanguageProvider>
  </ThemeProvider>
  
  )
}

export default App
