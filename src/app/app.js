import React, { Component } from 'react';

import WeatherInfo from './components/weatherInfo';
import WeatherForm from './components/weatherForm';

class App extends Component {

    state = {
        temperature: '',
        time: '',
        elevation: '',
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

        if (latitudeValue && longitudeValue) {
            const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitudeValue}&longitude=${longitudeValue}&hourly=temperature_2m&daily=weathercode,sunrise,sunset,windspeed_10m_max&timezone=America%2FSao_Paulo`;
            const response = await fetch(API_URL);
            const data = await response.json();


            this.setState({
                temperature: data.hourly.temperature_2m,
                time: data.hourly.time,
                elevation: data.elevation,
                windspeed: data.daily.windspeed_10m_max,
                latitude: data.latitude,
                longitude: data.longitude,
                error: null
            });
        } else {
            this.setState({error: 'Please Insert a Latitude and a Longitude'})
        }
        
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