import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CountriesList from './components/CountriesList'
import { useState } from 'react'
import '/App.css'

const App = () => {
  const [searchQuery, setsearchQuery] = useState("")
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar  setsearchQuery={setsearchQuery}/>
        </div>
        <CountriesList searchQuery={searchQuery}/>
      </main>
    </>
  )
}

export default App
