import { React, useState, useEffect,Link } from "react";
import "./CountryDetails.css";
import { useParams,Link } from "react-router-dom";
export default function CountryDetails() {
  const { countryName } = useParams();
  console.log(countryName);
  const [countryData, setCountryData] = useState("");
  useEffect(function () {
    fetch("https://reactcountriesdata.netlify.app/public/countriesdata.json")
      .then((raw) => raw.json())
      .then((data) => {
        var [country] = data.filter((country) => {
          return country.name.common.toLowerCase() === countryName.toLowerCase();
        });
        console.log(country)
        setCountryData({
          name:country.name.common?country.name.common:"Not Found",
          flag:country.flags.svg,
          officialName:country.name.official,
          nativeName:country.name.nativeName?
          <span>{Object.values(Object.values(country.name.nativeName)[0])[1]}</span>:'No native name found',

          population:country.population.toLocaleString("en-IN"),
          region: country.region,
          subRegion:country.subregion,
          capital:country.capital?country.capital[0]:'Not Found',
          tld:country.tld?country.tld[0]:"Not Found",
          curruncies:country.currencies?Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", "):'Not Found',
          languages:country.languages?Object.values(country.languages).join(", "):'No languages found',
          borders: []
        })

        if(!country.borders) {
          country.borders = []
        }

        Promise.all(country.borders.map(async (border) => {
          return await fetch(`https://reactcountriesdata.netlify.app/public/borders/${border.toLowerCase()}.json`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setCountryData((prevState) => ({...prevState, borders}))
        })
      
      });
  }, [countryName]);
  // console.log(countryData);
  return countryData === "" ? (
    "loading..."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img
            src={countryData.flag}
            alt={`${countryData.name} flag`}
          />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Official Name: {countryData.officialName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Native Name:{countryData.nativeName}
                  {}
                </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population:{countryData.population}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>
                  Currencies:{countryData.curruncies}
                </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>
                  Languages:
                  {countryData.languages}
                </b>
                <span className="languages"></span>
              </p>
              <p className="border-countries"> 
                <b>
                  Border-Countries:       
                  
                   {countryData.borders.length!=0?
                   countryData.borders.map((border)=>
                    <Link to={`/${border}`} className="link">{border}</Link>
                   ):"No bordering countries found"
                  }
                   
                
                </b>
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}
