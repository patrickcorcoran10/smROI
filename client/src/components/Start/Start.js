// Dependencies
import React, { Component } from "react";
import "./Start.css";
import axios from "axios";

class Start extends Component {
    constructor() {
        super();
    // Setting Initial State
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
        event.preventDefault();
        // Creating Variables to do the Math
        const users = parseInt(this.refs.numOfUsers.value);
        const cost = parseInt(this.refs.employeeCost.value);
        const plan = parseInt(this.refs.planSelect.value);
        const dataCollectionValue = parseFloat(this.refs.dataCollection.value);
        const dataProcessingValue = parseFloat(this.refs.dataProcessing.value);
        const dataSecurityValue = parseFloat(this.refs.dataSecurity.value);
        const emailVolumeValue = parseFloat(this.refs.emailVolume.value);
        const annualHours = 2000;
        const avgDataCollection = .17;
        const avgDataProcessing = .16;
        const avgDataSecurityRisk = 1600000.00;
        const chanceOfDataBreach = .025;
        const avgEmailCost = 1800.00;
        
        // Data Collection Math
        let dataCollectionSavings = (((avgDataCollection * annualHours) * users) * cost) * dataCollectionValue;
        // Data Processing Math
        let dataProcessingSavings = (((avgDataProcessing * annualHours) * users) * cost) * dataProcessingValue;
        // Data Security Math
        let dataSecuritySavings = (avgDataSecurityRisk * chanceOfDataBreach) * dataSecurityValue;
        // Email Efficiency Math
        let emailEfficiencySavings = (users * avgEmailCost) * emailVolumeValue;
        // ROI and Savings Math
        let yearlyCost = plan * users * 12;
        let yearlySavings = (emailEfficiencySavings + dataSecuritySavings + dataProcessingSavings + dataCollectionSavings);
        let ROI = parseFloat(yearlySavings/yearlyCost).toFixed(2);
        let savings = parseFloat(yearlySavings/users).toFixed(2);
        // console.log(ROI)
        // Updating State with User Inputs
        this.setState({
            prospectName: this.refs.name.value,
            planSelect: this.refs.planSelect.value,
            numOfUsers: this.refs.numOfUsers.value,
            employeeCost: this.refs.employeeCost.value,
            dataCollection: this.refs.dataCollection.value,
            dataProcessing: this.refs.dataProcessing.value,
            dataSecurity: this.refs.dataSecurity.value,
            emailVolume: this.refs.emailVolume.value,
            ROI: ROI,
            savingsPerUser: savings
        }, () => {
            // console.log(this.state);
        })
        // Sending Inputs to the Database w/ Axios
        axios.post("/api/dataPoints", {
            prospectName: this.refs.name.value,
            planSelect: "standard",
            numOfUsers: this.refs.numOfUsers.value,
            employeeCost: this.refs.employeeCost.value,
            dataCollection: this.refs.dataCollection.value,
            dataProcessing: this.refs.dataProcessing.value,
            dataSecurity: this.refs.dataSecurity.value,
            emailVolume: this.refs.emailVolume.value,
            ROI: ROI,
            savingsPerUser: savings
            
        })
        // Response from the Database Route. 
        .then(function(response) {
            console.log(response);
        })
        // Error Catch if there's a problem. 
        .catch(function (error) {
            console.log(error);
        });
    };
    reset = (event) => {
        console.log("Let's reset the board!");
        this.setState({
            prospectName: "",
            planSelect: "",
            numOfUsers: "",
            employeeCost: "",
            dataCollection: "",
            dataProcessing: "",
            dataSecurity: "",
            emailVolume: "",
            ROI: "",
            savingsPerUser: ""
        }, () => {
            console.log(this.state);
        })
        // this.propectNameField.reset();
    }
    // We Start to Render in React
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header">
                            <h4>This is Scott's App</h4>
                            <h3>{this.state.prospectName}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6>Prospect Name: </h6>
                        <form ref="prospectNameField">
                            <input ref="name" placeholder=" Prospect Name" />
                        </form>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Plan Select </label>
                            <select className="planSelect" id="exampleFormControlSelect1" ref="planSelect">
                                <option value="8">Standard</option>
                                <option value="15">Plus</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="numOfUsers">
                            <form>
                            <p>Total Users</p>
                            <input ref="numOfUsers" placeholder="  Number of users"></input>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <form>
                            <div className="form-group">
                                <p>Employee Cost per Hour</p>
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
                                    <option value=".025">Low</option>
                                    <option value=".05">Medium</option>
                                    <option value=".075">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Time Spent Processing Data?</label>
                                <select ref="dataProcessing" className="dataProcessing" id="exampleFormControlSelect1">
                                    <option value=".025">Low</option>
                                    <option value=".05">Medium</option>
                                    <option value=".075">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Current Level of Data Security and Process Compliance?</label>
                                <select ref="dataSecurity" className="dataSecurity">
                                    <option value=".03">Low</option>
                                    <option value=".02">Medium</option>
                                    <option value=".01">High</option>
                                </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Characterize your Company's Current Email Volume?</label>
                                <select ref="emailVolume" className="emailVolume" id="exampleFormControlSelect1">
                                    <option value=".025">Low</option>
                                    <option value=".05">Medium</option>
                                    <option value=".075">High</option>
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
                            <button className="refresh"
                            onClick={ this.reset.bind(this) }
                            >Refresh</button>
                        </div>
                        <div className="refresh">
                            
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="roi">
                            <h6>Return on Investment: {this.state.ROI} %</h6>
                        </div>
                        <div className="savingsPerUser">
                            <h6>Savings Per User: ${this.state.savingsPerUser}</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                
            </div>
        );
    };
}

export default Start;