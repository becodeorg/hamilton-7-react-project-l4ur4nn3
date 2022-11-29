import React, {useState} from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import {
    WEATHER_API_KEY,
    WEATHER_API_URL,
    UNSPLASH_API_ACCESS_KEY,
    UNSPLASH_API_URL,
} from "./api";
import Forecast from "./components/forecast/forecast";
import Unsplash from "./components/unsplash/unsplash";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [unsplash, setUnsplash] = useState();

    const handleOnSearchChange = searchData => {
        const cityName = searchData.label.split(" ");
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        );
        const forecastWeatherFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        );
        const unsplashFetch = fetch(
            `${UNSPLASH_API_URL}/?query=${cityName}&per_page=1&client_id=${UNSPLASH_API_ACCESS_KEY}`,
        );

        Promise.all([currentWeatherFetch, forecastWeatherFetch, unsplashFetch])
            .then(async response => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();
                const unsplashResponse = await response[2].json();

                setCurrentWeather({city: searchData.label, ...weatherResponse});
                setForecast({city: searchData.label, ...forecastResponse});
                setUnsplash({city: searchData.label, ...unsplashResponse});
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1 className="text-3xl p-5 text-center bg-stone-900 text-stone-400">Weather App</h1>
            {unsplash && <Unsplash data={unsplash} />}
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
            <Search onSearchChange={handleOnSearchChange} />
        </div>
    );
}

export default App;
