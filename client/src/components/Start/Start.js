import React, { Component } from "react";
import "./Start.css";
import axios from "axios";

class Start extends Component {
    constructor() {
        super();
    

    this.state = {
        prospectName: "",
        planSelect: "",
        numOfUsers: "",
        employeeCost: "",
        dataCollection: "",
        dataProcessing: "",
        dataSecurity: "",
        emailVolume: "",
        ROI: 0.00,
        savingsPerUser: 0.00
    };
}

    calculate = (event) => {
        console.log("Now we're clicking!");
        this.setState({
            prospectName: this.refs.name.value,
            planSelect: this.refs.planSelect.value,
            numOfUsers: this.refs.numOfUsers.value,
            employeeCost: this.refs.employeeCost.value,
            dataCollection: this.refs.dataCollection.value,
            dataProcessing: this.refs.dataProcessing.value,
            dataSecurity: this.refs.dataSecurity.value,
            emailVolume: this.refs.emailVolume.value,
            ROI: 0,
            savingsPerUser: 0
        }, () => {
            console.log(this.state);
        })
        axios.post("/api/dataPoints", {
            prospectName: this.refs.name.value,
            planSelect: "standard",
            numOfUsers: this.refs.numOfUsers.value,
            employeeCost: this.refs.employeeCost.value,
            dataCollection: this.refs.dataCollection.value,
            dataProcessing: "low",
            dataSecurity: "low",
            emailVolume: "low",
            ROI: 10,
            savingsPerUser: 10
            
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header">
                            <h4>This is Scott's App</h4>
                            <p>{this.state.prospectName}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6>Prospect Name: </h6>
                        <form>
                            <input ref="name" placeholder=" Prospect Name" />
                        </form>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Plan Select </label>
                            <select className="planSelect" id="exampleFormControlSelect1" ref="planSelect">
                                <option value="standard">Standard</option>
                                <option value="plus">Plus</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="numOfUsers">
                            <form>
                            <p>Total Users</p>
                            <input ref="numOfUsers" placeholder="  Number of users"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"> 
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Employee Cost per Hour</label>
                                <input ref="employeeCost" placeholder=" Employee Cost"/>
                            </div>
                        </form>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Time Spent Collecting Data?</label>
                                <select ref="dataCollection" className="dataCollection" id="exampleFormControlSelect1">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Time Spent Processing Data?</label>
                                <select ref="dataProcessing" className="dataProcessing" id="exampleFormControlSelect1">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Current Level of Data Security and Process Compliance?</label>
                                <select ref="dataSecurity" className="dataSecurity">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Current Email Volume?</label>
                                <select ref="emailVolume" className="emailVolume" id="exampleFormControlSelect1">
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
                            onClick={ this.calculate.bind(this) }
                            >Calculate</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="roi">Return on Investment: {this.state.ROI}</div>
                        <div className="savingsPerUser">Savings Per User: {this.state.savingsPerUser}</div>
                    </div>
                    <div className="col-md-8">
                    </div>
                </div>
                
            </div>
        );
    };
}

export default Start;