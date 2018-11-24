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
        

        console.log(plan);

        
        // Data Collection Math
        let dataCollectionSavings = (((avgDataCollection * annualHours) * users) * cost) * dataCollectionValue;
        console.log(dataCollectionSavings);
        // Data Processing Math
        let dataProcessingSavings = (((avgDataProcessing * annualHours) * users) * cost) * dataProcessingValue;
        console.log(dataProcessingSavings);
        // Data Security Math
        let dataSecuritySavings = (avgDataSecurityRisk * chanceOfDataBreach) * dataSecurityValue;
        console.log(dataSecuritySavings);
        // Email Efficiency Math
        let emailEfficiencySavings = (users * avgEmailCost) * emailVolumeValue;
        console.log(emailEfficiencySavings);
        // ROI and Savings Math
        let yearlyCost = plan * users * 12;
        console.log(yearlyCost);
        let yearlySavings = (emailEfficiencySavings + dataSecuritySavings + dataProcessingSavings + dataCollectionSavings);
        console.log(yearlySavings);
        let ROI = parseFloat(yearlySavings/yearlyCost).toFixed(2);
        let savings = parseFloat(yearlySavings/users).toFixed(2);
        console.log(ROI)
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
            console.log(this.state);
        })
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
                                <option value="8">Standard</option>
                                <option value="15">Plus</option>
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
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="roi">Return on Investment: {this.state.ROI} %</div>
                        <div className="savingsPerUser">Savings Per User: ${this.state.savingsPerUser}</div>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
                
            </div>
        );
    };
}

export default Start;