import React, { Component } from "react";
import "./Start.css";
import axios from "axios";

class Start extends Component {
    constructor(props) {
        super(props);
    

    this.state = {
        prospectName: "",
        planSelect: "",
        numOfUsers: 0,
        employeeCost: 50.01,
        dataCollection: "",
        dataProcessing: "",
        dataSecurity: "",
        emailVolume: "",
        roi: 0,
        savingsPerUser: 0
    };
}

    calculate = (event) => {
        console.log("Now we're clicking!");
        this.setState({
            prospectName: "pat",
            planSelect: "standard",
            numOfUsers: 0,
            employeeCost: 50.01,
            dataCollection: this.refs.dataCollection,
            dataProcessing: this.refs.dataProcessing,
            dataSecurity: this.refs.dataSecurity,
            emailVolume: this.refs.emailVolume,
            roi: 0,
            savingsPerUser: 0
        })        
        axios.post("/api/dataPoints", {
            DataPoints: {
            prospectName: this.refs.prospectName,
            planSelect: this.refs.planSelect,
            numOfUsers: 0,
            employeeCost: 50.01,
            dataCollection: this.refs.dataCollection,
            dataProcessing: this.refs.dataProcessing,
            dataSecurity: this.refs.dataSecurity,
            emailVolume: this.refs.emailVolume,
            roi: 0,
            savingsPerUser: 0
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    render() {
        console.log(this.state);
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
                            <input ref="prospectName" placeholder="  Prospect Name">
                            </input>
                        </form>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Plan Select </label>
                            <select className="planSelect" id="exampleFormControlSelect1" refs="planSelect">
                                <option value="standard">Standard</option>
                                <option value="plus">Plus</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="numOfUsers">
                            <form>
                            <p>Total Users</p>
                            <input refs="numOfUsers" placeholder="  Number of users"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"> 
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Employee Cost per Hour</label>
                                <input type="range" min="25" max="150" value="50" className="form-control-range" id="formControlRange"></input>
                                <div className="employeeCost">Cost Goes Here</div>
                            </div>
                        </form>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Time Spent Collecting Data?</label>
                                <select refs="dataCollection" className="dataCollection" id="exampleFormControlSelect1">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Time Spent Processing Data?</label>
                                <select refs="dataProcessing" className="dataProcessing" id="exampleFormControlSelect1">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Current Level of Data Security and Process Compliance?</label>
                                <select refs="dataSecurity" className="dataSecurity" id="exampleFormControlSelect1">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Current Email Volume?</label>
                                <select refs="emailVolume" className="emailVolume" id="exampleFormControlSelect1">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="button">
                            <button className="submit" 
                            onClick={ this.calculate }
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