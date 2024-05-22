import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({searchQuery}) {
  console.log(searchQuery)
  return (
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
    )
     
}
