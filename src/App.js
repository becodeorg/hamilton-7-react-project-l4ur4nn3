import React, {useState} from 'react'
import './App.css'

function App() {

    const apiKey = '4429ca6618a5716e1f7211f2cc56404c'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")
    const [lat, setLat] = useState([{}])
    const [lon, setLong] = useState([{}])

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
        if (event.key == "Enter") {
            fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setLat(data)
                    setLong(data)
                }
            )
        }
    }
    console.log(weatherData)
    // const getLat = (event) => {
        
    // }

    return (
        <div className='container'>
            <input 
            className='input' 
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            placeholder='Enter city... '
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p>Please enter a city</p>
                </div>
            ): (
                <div>
                    <p>{weatherData.name}</p>
                    <p>{Math.round(weatherData.main.temp)}°C</p>
                    <p>{weatherData.weather[0].main}</p>
                    <p>{weatherData.coord.lat}</p>
                    <p>{weatherData.coord.lon}</p>
                </div>
            )
            }

        </div>
    )
}

export default App
