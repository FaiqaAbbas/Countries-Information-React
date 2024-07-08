import { useState } from 'react'
import Header from './components/Header'
import '/App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDark')))
  return (
    <>
      <Header theme={[isDark,setisDark]}/>
      <Outlet context={[isDark,setisDark]}/>
    </>
  )
}

export default App
