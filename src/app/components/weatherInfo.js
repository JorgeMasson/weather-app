import React from "react";

const WeatherInfo = props => {

    console.log(props)

    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger col-md-4 text-center mx-auto">
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
                        <div class="row plan-table col-md-4">
                            <div class="col-lg-7 text-white col-md-6">
                                <div class="plan-style blue-shadow">
                                    <div class="plan-style-bg blue-bg-imh"></div>
                                    <div class="plan-header">
                                        <h3 class="bg-blue">{props.time[12].slice(0,10)}</h3>
                                    </div>
                                    <div class="plan-detail">
                                        <ul>
                                            <li>Temperature: {props.temperature[12]} °C</li>
                                            <li>Time: {props.time[12].slice(11, 16)}pm</li>
                                            <li>Elevation: {props.elevation}</li>
                                            <li>Wind Speed: {props.windspeed[1]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 text-white col-md-6">
                                <div class="plan-style orange-shadow active">
                                    <div class="plan-style-bg orange-bg-imh"></div>
                                    <div class="plan-header">
                                        <h3 class="bg-orange">{props.time[36].slice(0,10)}</h3>
                                    </div>
                                    <div class="plan-detail">
                                        <ul>
                                            <li>Temperature: {props.temperature[36]} °C</li>
                                            <li>Time: {props.time[36].slice(11, 16)}pm</li>
                                            <li>Elevation: {props.elevation}</li>
                                            <li>Wind Speed: {props.windspeed[2]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 text-white col-md-6">
                                <div class="plan-style green-shadow active">
                                    <div class="plan-style-bg green-bg-imh"></div>
                                    <div class="plan-header">
                                        <h3 class="bg-green">{props.time[60].slice(0,10)}</h3>
                                    </div>
                                    <div class="plan-detail">
                                        <ul>
                                            <li>Temperature: {props.temperature[60]} °C</li>
                                            <li>Time: {props.time[60].slice(11, 16)}pm</li>
                                            <li>Elevation: {props.elevation}</li>
                                            <li>Wind Speed: {props.windspeed[3]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 text-white col-md-6">
                                <div class="plan-style yellow-shadow active">
                                    <div class="plan-style-bg yellow-bg-imh"></div>
                                    <div class="plan-header">
                                        <h3 class="bg-yellow">{props.time[84].slice(0,10)}</h3>
                                    </div>
                                    <div class="plan-detail">
                                        <ul>
                                            <li>Temperature: {props.temperature[84]} °C</li>
                                            <li>Time: {props.time[84].slice(11, 16)}pm</li>
                                            <li>Elevation: {props.elevation}</li>
                                            <li>Wind Speed: {props.windspeed[4]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 text-white col-md-6">
                                <div class="plan-style red-shadow active">
                                    <div class="plan-style-bg red-bg-imh"></div>
                                    <div class="plan-header">
                                        <h3 class="bg-red">{props.time[108].slice(0,10)}</h3>
                                    </div>
                                    <div class="plan-detail">
                                        <ul>
                                            <li>Temperature: {props.temperature[108]} °C</li>
                                            <li>Time: {props.time[108].slice(11, 16)}pm</li>
                                            <li>Elevation: {props.elevation}</li>
                                            <li>Wind Speed: {props.windspeed[5]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                :
                <div className="col-md-4 mx-auto">
                    <div className="card card-body bg-light text-center">
                        <p>No request yet</p>
                    </div>                    
                </div>
            }
            
        </div>

        

        
    )

}

export default WeatherInfo;