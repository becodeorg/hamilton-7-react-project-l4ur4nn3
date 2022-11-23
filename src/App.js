import React, {useState} from 'react'
import './App.css'

function App() {

    const apiKey = '4429ca6618a5716e1f7211f2cc56404c'
    const [weatherData, setWeatherData] = useState([{}])

  return (
    <div className='container'>
      <input className='input' placeholder='Enter city...'></input>
    </div>
  )
}

export default App
