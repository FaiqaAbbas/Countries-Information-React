import React from 'react'
import './CountriesListShimmer.css'
export default function CountriesListShimmer() {
  return (
    
    <div class='countries-container'>
        {
            Array.from({length:10}).map((elem,index)=>{
                return ( 
                <a className="shimmer-card shimmer-card">
                <div className='image-container'>
                  <img />
                </div>
                <div className="shimmer-text">
                  <h3 className="shimmer-title">Moldova</h3>
                  <p>Population: 3123123</p>
                  <p>Region alskdjfa</p>
                  <p>aldsf asldfj</p>
                </div>
              </a>
          
                )
            })
        }
    {/* <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div>
    <div className="country-card shimmer-card"></div> */}
    </div>
  )
}
