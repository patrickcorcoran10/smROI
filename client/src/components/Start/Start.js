import React, { Component } from "react";
import "./Start.css";

class Start extends Component {

    state = {
        prospectName: "",
        planSelect: "",
        numOfUsers: 0,
        employeeCost: 0,
        dataCollection: "",
        dataProcessing: "",
        dataSecurity: "",
        emailVolume: "",
        roi: 0,
        savingsPerUser: 0
    };


    calculate = () => {
        return console.log("Now we're clicking!");
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header">
                            <h4>This is Scott's App</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6>Prospect Name: </h6>
                        <form>
                            <input placeholder="Prospect Name">
                            </input>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Plan Select</label>
                            <select className="planSelect" id="exampleFormControlSelect1">
                                <option>Standard</option>
                                <option>Plus</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="numOfUsers">
                            <form>
                            <p>Total Users</p>
                            <input placeholder="Number of users"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"> 
                        <form>
                            <div className="form-group">
                                <label for="formControlRange">Employee Cost per Hour</label>
                                <input type="range" min="25" max="150" value="50" className="form-control-range" id="formControlRange"></input>
                                <div className="employeeCost">Cost Goes Here</div>
                            </div>
                        </form>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Characterize your Company's Time Spent Collecting Data?</label>
                                <select className="dataCollection" id="exampleFormControlSelect1">
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Characterize your Company's Time Spent Processing Data?</label>
                                <select className="dataProcessing" id="exampleFormControlSelect1">
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Characterize your Company's Current Level of Data Security and Process Compliance?</label>
                                <select className="dataSecurity" id="exampleFormControlSelect1">
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Characterize your Company's Current Email Volume?</label>
                                <select className="emailVolume" id="exampleFormControlSelect1">
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="button">
                            <button className="submit" 
                            // onClick={ calculate }
                            >Calculate</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="roi">Return on Investment: </div>
                        <div className="savingsPerUser">Savings Per User: </div>
                    </div>
                    <div className="col-md-8">
                    </div>
                </div>
                
            </div>
        );
    };
}

export default Start;