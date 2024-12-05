import { useState } from 'react'

import './App.css'
 
import Header from './component/header'
import { ThemeProvider } from './context/ThemeContext'

function App() {
 

  return (
  <ThemeProvider>
    <Header/>
  </ThemeProvider>
  )
}

export default App
