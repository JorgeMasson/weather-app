import React from "react";

const WeatherInfo = props => {

    //console.log(props)

    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div className="card card-body">
                        <p>
                            Coordinates: {props.latitude}, {props.longitude}
                        </p>
                        <p>
                            Temperature: {props.temperature} °C
                        </p>
                        <p>
                            Time: {props.time}
                        </p>
                        <p>
                            Wind Speed: {props.windspeed}
                        </p>

                    </div>
                :
                <div className="card card-body">
                    <p>No request yet</p>
                </div>
            }
            
        </div>

        

        
    )

}

export default WeatherInfo;