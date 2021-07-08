import React, { useState, useEffect } from "react";
import './Weather.css';

function Weather() {
    const key = '9a5f1044e1422e7134801ff2fc7dfe06';
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [country, setCountry] = useState('');
    // const [iconID,setIconID] = useState('dfhhs');

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&APPID=' + key + '&units=metric')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeelsLike(data.main.feels_like);
                setMainTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setCountry(data.sys.country);
                // setIconID(data.weather[0].icon);
            })
    }, [])
    return (
        <div className="rainbow1">
            {/* <div>
                <>
            </div> */}
            <div>
                <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
                <h2>Feels like: {feels_like} Degrees Celsius</h2>
                <h3>Weather Parameter: {main}</h3>
                <h5>Description : {description}</h5>
                <h2>Country : {country}</h2>
                {/* <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/> */}
            </div>
        </div>
    )
}

export default Weather;