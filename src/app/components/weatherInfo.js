import React from "react";

const WeatherInfo = props => {

    console.log(props)

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
                    <section class="pp-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="section-header text-white text-center">
                                        <h2 class="sub-title">{props.latitude}, {props.longitude}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row plan-table">
                            <div class="col-lg-8 text-white col-md-6">
                                <div class="plan-style blue-shadow">
                                    <div class="plan-style-bg blue-bg-imh"></div>
                                    <div class="plan-header">
                                        <h3 class="bg-blue">{props.time[12].slice(0,10)}</h3>
                                    </div>
                                    <div class="plan-detail">
                                        <ul>
                                            <li>Temperature: {props.temperature[12]} °C</li>
                                            <li>Time: {props.time[12].slice(11, 16)}</li>
                                            <li>Elevation: {props.elevation}</li>
                                            <li>Wind Speed: {props.windspeed[1]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                :
                <div className="card card-body">
                    <p>No request yet</p>
                </div>
            }
            
        </div>

        

        
    )

}

export default WeatherInfo;