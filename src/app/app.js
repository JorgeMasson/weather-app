import React, { Component } from 'react';

import WeatherInfo from './components/weatherInfo';
import WeatherForm from './components/weatherForm';

class App extends Component {

    state = {
        temperature: '',
        time: '',
        windspeed: '',
        latitude: '',
        longitude: '',
        error: null
    };

    getWeather = async e => {
        e.preventDefault()
        const {latitude, longitude} = e.target.elements;
        const latitudeValue = latitude.value;
        const longitudeValue = longitude.value;
        
        const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitudeValue}&longitude=${longitudeValue}&hourly=temperature_2m&current_weather=true`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(this.state)

        this.setState({
            temperature: data.current_weather.temperature,
            time: data.current_weather.time,
            windspeed: data.current_weather.windspeed,
            latitude: data.latitude,
            longitude: data.longitude,
            error: null
        }, () => console.log(this.state));
    }

    render() {
        return(
            <div className="container p-4">
                <div className="col-md-4 mx-auto">
                    <WeatherForm getWeather={this.getWeather} />
                    <WeatherInfo {...this.state} />
                </div>
            </div>
        )
    }
}

export default App;