// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI.css";

class YearQ extends Component {
    constructor() {
        super()
    this.state = {
            companyName: "",
        // Turnover and Recruitment Savings
            // Employee Turnover Cost Savings Inputs
            lastFiscalYearEnd: "",
            totEBOY: "",
            totEEOY: "",
            totEEOY1: "",
            totEwVoluntaryExit: "",
            avgTurnoverCostVoluntaryExit: "",
            productTurnoverSavings: "",
            // Recruiting Cost Inputs
            avgDaysPostingToAccept: "",
            totRecruitingExpenses: "",
            productRecruitingSavings: "",
        // Personnel Efficiencies
            // HR Admin Time Savings
            totHREmployeesAdminEmployeePrograms: "",
            totHREmployeesAdminEmployeePrograms1: "",
            percentageShareOfHREmployeesTimeAdminEmployeePrograms: "",
            avgSalaryHREmployee: "",
            reductionManagingProgramsHREmployee: "",
            // Employee Productiving Savings
            avgAnnualSalaryGeneralEmployee: "",
            increaseGeneralEmployeeProductivity: "",
        // Investment Inputs
            suggestedUserMax: "",
            annualSoftwareFees: "",
            oneTimeImplimentationFee: "",
        // Program and Tool Enrichment Inputs
            existingProvidersCost: "",
            rewardsProgramOtherCompany: "",
        // ROI Inputs
            savingsAssumption1: "",
            savingsAssumption2: "",
        };
    
    }
    onClick() {
        this.setState({
            companyName: this.refs.companyName.value,
            lastFiscalYearEnd: this.refs.lastFiscalYearEnd.value
        }, () => {
        console.log("YearQ click");
        console.log(this.state);
        
        let year = parseInt(this.refs.lastFiscalYearEnd.value.slice(0,4));
        let yearPlusOne = year + 1;
        let yearPlusTwo = year + 2;
        console.log(year+""+yearPlusOne+""+yearPlusTwo);
        });    
    };
    
    render() {
        return(
            <div className="containter">
                <div className="row" id="header">
                    <div className="col-md-12">
                        <h4>The Employee Experience ROI Calculator</h4>
                        <br />
                        <h6>Company Name: </h6>
                        <input ref="companyName" placeholder="Company Name"></input>
                        <br />
                        <h6>When did your last fiscal period end?</h6>
                        <input ref="lastFiscalYearEnd" type="date" placeholder="Enter Date"></input>
                        <button onClick={this.onClick.bind(this)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default YearQ;