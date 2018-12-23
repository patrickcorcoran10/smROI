// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI.css";

class YearQ extends Component {
    constructor(props) {
        super(props);
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
    };
    handleChange(event) {
        // let companyName = this.refs.companyNmae.value;
        console.log(event.target.value);
    };
    // this.setState({
    //     companyName: this.refs.companyNmae.value,
    //     lastFiscalYearEnd: refs.lastFiscalYearEnd.value
    // })

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
                    </div>
                </div>
            </div>
        )
    }
}

export default YearQ;