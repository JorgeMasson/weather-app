import React from "react";

const WeatherForm = props => (
    <div className="card card-body bg-info mb-4">
        <form onSubmit={props.getWeather}>
            <div className="form-group mb-4">
                <input type="text" name ="latitude" placeholder="Latitude" className="form-control" autoFocus />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="longitude" placeholder="Longitude" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;