import React from "react";

const WeatherForm = props => (
    <div>
        <div class="section-header text-white text-center">
        <h1 class="sub-title">WEATHER APP</h1>
        </div>
        <div className="card card-body bg-info mb-4">
            <form onSubmit={props.getWeather}>
                <div className="form-group mb-4">
                    <input type="text" name="latitude" placeholder="Latitude ej. 19.4271" className="form-control" autoFocus />
                </div>
                <div className="form-group mb-4">
                    <input type="text" name="longitude" placeholder="Longitude ej. -99.1276" className="form-control" />
                </div>
                <button className="btn btn-success btn-block">
                    Get Weather
                </button>
            </form>
        </div>
    </div>
    
);

export default WeatherForm;