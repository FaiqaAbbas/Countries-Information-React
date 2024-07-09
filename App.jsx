import { useState} from 'react'
import Header from './components/Header'
import '/App.css'
import { Outlet } from 'react-router-dom'
import {themeContext} from './contexts/themeContext'
console.log(themeContext)
const App = () => {
  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDark')))
  return (
    <themeContext.Provider value={[isDark,setisDark]}>
      <Header/>
      <Outlet/>
    </themeContext.Provider>
  )
}

export default App
