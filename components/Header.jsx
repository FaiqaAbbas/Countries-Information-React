import { useState } from "react"
export default function Header() {
  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDark')))
  if(isDark==true){
    document.body.classList.add('dark')
  }
  else{
      document.body.classList.toggle('dark')
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          isDark==false?setisDark(true):setisDark(false)
          localStorage.setItem('isDark',isDark)
    
        }}>
          <i className={`fa-regular fa-${isDark?'sun':'moon'}`} />
          &nbsp;&nbsp;{`${isDark?'Light':'Dark'}`}
        </p>
      </div>
    </header>
  )
}
