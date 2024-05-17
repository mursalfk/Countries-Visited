import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MapChart from "./Maps";
import Sidebar from "./Sidebar";
import CustomAutocomplete from "./CustomAutocomplete";
import "../styles/style.css";
import { doc, getDoc, collection, writeBatch, getDocs, deleteDoc } from 'firebase/firestore';

function Home() {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [initialCountries, setInitialCountries] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error)
        });
    }

    const handleUpdate = async () => {
        if (userLoggedIn) {
            const userDocRef = doc(db, 'users', auth.currentUser.uid);
            const countriesCollectionRef = collection(userDocRef, 'countries');

            const batch = writeBatch(db);

            // Add or update selected countries
            selectedCountries.forEach((country) => {
                const countryDocRef = doc(countriesCollectionRef, country.Code);
                batch.set(countryDocRef, country);
            });

            // Find and delete removed countries
            const removedCountries = initialCountries.filter(initialCountry => 
                !selectedCountries.some(selectedCountry => selectedCountry.Code === initialCountry.Code)
            );

            removedCountries.forEach((country) => {
                const countryDocRef = doc(countriesCollectionRef, country.Code);
                batch.delete(countryDocRef);
            });

            try {
                await batch.commit();
                console.log("Countries updated successfully");
                alert("Countries updated successfully!");
                setInitialCountries([...selectedCountries]); // Update initialCountries to the current selection
            } catch (error) {
                console.error("Error updating countries:", error);
                alert("Error updating countries: " + error.message);
            }
        } else {
            console.log("No user is logged in.");
            alert("No user is logged in.");
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid);
                setUserLoggedIn(true);

                const userDocRef = doc(db, 'users', uid);
                try {
                    const userDocSnap = await getDoc(userDocRef);
                    if (userDocSnap.exists()) {
                        console.log("Document data:", userDocSnap.data());
                        setUserData(userDocSnap.data());

                        const countriesCollectionRef = collection(userDocRef, 'countries');
                        const countriesSnapshot = await getDocs(countriesCollectionRef);
                        const countriesList = countriesSnapshot.docs.map(doc => doc.data());
                        setSelectedCountries(countriesList);
                        setInitialCountries(countriesList); // Store initial countries
                        console.log("Countries:", countriesList);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error getting document:", error);
                }
            } else {
                console.log("No User Logged In");
                setUserLoggedIn(false);
            }
        });
    }, []);

    const handleAddCountry = (country) => {
        setSelectedCountries([...selectedCountries, { ...country, disabled: true }]);
    };

    const handleRemoveCountry = (countryToRemove) => {
        setSelectedCountries(selectedCountries.filter(country => country.Code !== countryToRemove.Code));
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
                userData={userData}
                handleUpdate={handleUpdate}
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
            )}
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
