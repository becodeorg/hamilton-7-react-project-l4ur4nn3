import React, { useState } from 'react'
import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/current-weather/current-weather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import Forecast from './components/forecast/forecast'

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    //    const apiKey = '4429ca6618a5716e1f7211f2cc56404c'
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    }

    console.log(currentWeather);
    console.log(forecast)

    // const [weatherData, setWeatherData] = useState([{}])
    // const [city, setCity] = useState("")
    // const [lon, setLon] = useState("")
    // const [lat, setLat] = useState("")

    // const getWeather = (event) => {
    //     if (event.key == "Enter") {
    //         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
    //             response => response.json()
    //         ).then(
    //             data => {
    //                 setWeatherData(data)
    //                 setCity("")
    //                 // setLat(data.coord.lat)
    //                 // setLon(data.coord.lon)
    //                 console.log(data.coord.lon)
    //             }
    //         )
    //         //     fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    //     }
    // }

    return (
        // <div className='container'>
        //     <input 
        //     className='input' 
        //     onChange={e => setCity(e.target.value)}
        //     value={city}
        //     onKeyPress={getWeather}
        //     placeholder='Enter city... '
        //     />

        //     {typeof weatherData.main === 'undefined' ? (
        <div>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {/* <p>Please enter a city</p> */}
            {forecast && <Forecast data={forecast} />}
        </div>
        //     ): (
        //         <div>
        //             <div>
        //             <p>{weatherData.name}</p>
        //             <p>{Math.round(weatherData.main.temp)}°C</p>
        //             <p>{weatherData.weather[0].main}</p>
        //             </div>
        //         </div>
        //     )}   
        // </div> */

    )
}

export default App