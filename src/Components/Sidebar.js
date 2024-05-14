import React from "react";
import ReactCountryFlag from "react-country-flag";

function Sidebar({ selectedCountries, onRemoveCountry }) {
    return (
        <div className="">
            <h2>Visited Countries</h2>
            <ul className="countryListUL">
                {selectedCountries.map((country, index) => (
                    <li key={index}>
                        <ReactCountryFlag countryCode={country.Code} svg />
                        <span className="countryNameSidebar">
                            {country.CountryName} ({country.Code}){" "}
                        </span>
                        <button className="removeButton" onClick={() => onRemoveCountry(country)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
