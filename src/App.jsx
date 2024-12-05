import { useState } from 'react'

import './App.css'
 
import Header from './component/header'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Skills from './component/skills'

function App() {
 

  return (
    
  <ThemeProvider>
    <LanguageProvider>
      
    <Header/>
    <Skills/>
    
    </LanguageProvider>
  </ThemeProvider>
  
  )
}

export default App
