import { useState} from 'react'
import Header from './components/Header'
import '/App.css'
import { Outlet } from 'react-router-dom'
import {ThemeProvider,themeContext} from './contexts/themeContext'
const App = () => {
  
  return (
    // <themeContext.Provider value={[isDark,setisDark]}></themeContext.Provider>
    <ThemeProvider>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App
