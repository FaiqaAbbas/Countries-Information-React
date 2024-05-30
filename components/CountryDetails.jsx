import { React, useState, useEffect } from "react";
import "./CountryDetail.css";
import { useParams } from "react-router-dom";
export default function CountryDetails() {
  const { countryName } = useParams();
  console.log(countryName);
  const [countryData, setCountryData] = useState("");
  // useEffect(function(){
  //     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  //     .then((raw)=>raw.json())
  //     .then((data)=>{
  //             setCountryData(data)
  //         }
  //     )
  // },[])

  useEffect(function () {
    fetch("https://restcountries.com/v3.1/all")
      .then((raw) => raw.json())
      .then((data) => {
        const filteredCountryData = data.filter((country) => {
          return country.name.common === countryName;
        });
        setCountryData(filteredCountryData);
      });
  }, []);
  console.log(countryData);
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
            src={countryData[0].flags.svg}
            alt={`${countryData[0].name.common} flag`}
          />
          <div className="details-text-container">
            <h1>{countryData[0].name.common}</h1>
            <div className="details-text">
              <p>
                <b>Official Name: {countryData[0].name.official}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Native Name:{" "}
                  {Object.keys(countryData[0].name.nativeName).map((key) => (
                    <span key={key}>
                      {countryData[0].name.nativeName[key].common}
                    </span>
                  ))}
                </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population:{" "}
                  {countryData[0].population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData[0].region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData[0].subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData[0].capital[0]}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData[0].tld[0]}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>
                  Currencies:
                  {Object.values(countryData[0].currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>
                  Languages:
                  {Object.values(countryData[0].languages).join(", ")}
                </b>
                <span className="languages"></span>
              </p>
              <p>
                <b>
                  Border-Countries:
                  
                  {countryData[0].borders? Object.values(countryData[0].borders).join(", "):'No Bordering Countries Found'}
                </b>
                <span className="languages"></span>
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}
