import React, {useState} from 'react'
import './App.css'
import Search from './components/search/search'



function App() {

//    const apiKey = '4429ca6618a5716e1f7211f2cc56404c'
    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }

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
                    {/* <p>Please enter a city</p> */}
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