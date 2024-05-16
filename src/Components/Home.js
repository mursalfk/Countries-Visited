// Home.js
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MapChart from "./Maps";
import Sidebar from "./Sidebar";
import CustomAutocomplete from "./CustomAutocomplete";
import "../styles/style.css";
import Footer from "./Footer";
import { signOut } from "firebase/auth";

function Home() {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // refresh the page only
            window.location.reload();
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid)
                uid ? setUserLoggedIn(true) : setUserLoggedIn(false);
                // Fetch USer's data from the database 'users' collection
                // const docRef = doc(db, "users", uid);
            } else {
                console.log("No User Logged In")
            }
        });

    }, [])

    const handleAddCountry = (country) => {
        setSelectedCountries([...selectedCountries, { ...country, disabled: true }]);
    };

    const handleRemoveCountry = (countryToRemove) => {
        setSelectedCountries(selectedCountries.filter(country => country !== countryToRemove));
    };

    const addCountryByClick = (event) => {
        const clickedCountryName = event.countryName;
        const clickedCountryCode = event.countryCode;
        const index = selectedCountries.findIndex((country) => country.CountryName === clickedCountryName && country.Code === clickedCountryCode);
        if (index === -1) {
            setSelectedCountries([...selectedCountries, { CountryName: clickedCountryName, Code: clickedCountryCode, disabled: true }]);
        } else {
            setSelectedCountries(selectedCountries.filter(country => country.CountryName !== clickedCountryName || country.Code !== clickedCountryCode));
        }
    };

    return (
        <div className="homeApp">
            <Navbar
                handleLogout={handleLogout}
                userLoggedIn={userLoggedIn}
            />
            <MapChart
                selectedCountries={selectedCountries}
                addCountryByClick={addCountryByClick}
            />
            {userLoggedIn ? (
                <>
                    <div className="sidebar">
                        <CustomAutocomplete onSelect={handleAddCountry} />
                        <Sidebar
                            selectedCountries={selectedCountries}
                            onRemoveCountry={handleRemoveCountry}
                        />
                    </div>
                </>
            ) : (
                null
            )
            }
            <Footer />
        </div>
    );
}

export default Home;
