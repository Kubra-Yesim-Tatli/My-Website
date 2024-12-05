import { useState } from 'react'

import './App.css'
 
import Header from './component/header'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

function App() {
 

  return (
    <LanguageProvider>
  <ThemeProvider>
    
      <div>
    <Header/>
    </div>
    
  </ThemeProvider>
  </LanguageProvider>
  )
}

export default App
