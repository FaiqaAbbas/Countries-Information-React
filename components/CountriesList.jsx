import React, {useState,useEffect} from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'
export default function CountriesList({searchQuery}) {
  const [countriesData, setcountriesData] = useState([])
  useEffect(()=>{
    fetch('https://vercel-countries-hosted.vercel.app/countriesdata.json')
    .then((raw)=>raw.json())
    .then((data) => {
     setcountriesData(data)
  })
  },[])

    
    // return countriesData.length===0 ? <h1>Loading..</h1>:  (
    return countriesData.length==0?  <CountriesListShimmer />: (
    <>
    
    <div className="countries-container">
      {
        countriesData.
        filter((country)=>{
         return country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        })
        .map((country)=>{
          return(
            <CountryCard 
            key={country.name.common}
            name={country.name.common} 
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            />
          )
        })
      }
    </div>
    </>
    )
     
}
