import { useState } from "react"
import { useOutletContext } from "react-router-dom"
export default function Header({theme}) {
  const [isDark,setisDark]=theme


  return (
    <header className= {`header-container ${isDark?'dark':'light'}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          localStorage.setItem('isDark',!isDark)
          isDark?setisDark(false):setisDark(true)
    
        }}>
          <i className={`fa-regular fa-${isDark?'sun':'moon'}`} />
          &nbsp;&nbsp;{`${isDark?'Light':'Dark'}`}
        </p>
      </div>
    </header>
  )
}
