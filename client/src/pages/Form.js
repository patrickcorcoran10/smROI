import React, { Component } from 'react';
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
                // YearQ Inputs
                    companyName: "",
                    tableYear: "",
                    lastFiscalYearEnd: "",
                    clientName: "",
                    clientEmail: "",
                // Turnover and Recruitment Savings
                    // Employee Turnover Cost Savings Inputs
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
        this.acceptCompanyName = this.acceptCompanyName.bind(this);
        this.acceptLastFiscalYearEnd = this.acceptLastFiscalYearEnd.bind(this);
        this.saveInputs = this.saveInputs.bind(this);
        this.resetButton = this.resetButton.bind(this);
        this.acceptName = this.acceptName.bind(this);
        this.acceptEmail = this.acceptEmail.bind(this);
        this.acceptTotEBOY = this.acceptTotEBOY.bind(this);
        this.accpetTotEEOY = this.accpetTotEEOY.bind(this);
        };
        acceptCompanyName(event) {
            this.setState({
                companyName: this.refs.companyName.value
            });
            console.log(this.state);
        };
        acceptLastFiscalYearEnd(event) {
            let year = parseInt(event.target.value.slice(0,4));
            this.setState({
                lastFiscalYearEnd: this.refs.lastFiscalYearEnd.value,
                tableYear: year,
            });
            console.log("The last fiscal year placeholder is ", year);
        };
        acceptTotEBOY(event) {
            this.setState({
                totEBOY: this.refs.totEBOY,
            })
        };
        saveInputs(event) {
            console.log("Now we're clicking...");
            event.preventDefault();
            axios.post("/api/multiyearROI", {
                    companyName: this.refs.companyName.value,
                    clientName: this.refs.name.value,
                    clientEmail: this.refs.email.value,
                    lastFiscalYearEnd: this.refs.lastFiscalYearEnd.value,
                // Turnover and Recruitment Savings
                    // Employee Turnover Cost Savings Inputs
                    totEBOY: this.refs.totEBOY.value,
                    totEEOY: this.refs.totEEOY.value,
                    totEEOY1: this.refs.totEEOY1.value,
                    totEwVoluntaryExit: this.refs.totEwVoluntaryExit.value,
                    avgTurnoverCostVoluntaryExit: this.refs.avgTurnoverCostVoluntaryExit.value,
                    productTurnoverSavings: this.refs.productTurnoverSavings.value,
                // Recruiting Cost Inputs
                    avgDaysPostingToAccept: this.refs.avgDaysPostingToAccept.value,
                    totRecruitingExpenses: this.refs.totRecruitingExpenses.value,
                    productRecruitingSavings: this.refs.productRecruitingSavings.value,
                // Personnel Efficiencies
                    // HR Admin Time Savings
                    totHREmployeesAdminEmployeePrograms: this.refs.totHREmployeesAdminEmployeePrograms.value,
                    totHREmployeesAdminEmployeePrograms1: this.refs.totHREmployeesAdminEmployeePrograms1.value,
                    percentageShareOfHREmployeesTimeAdminEmployeePrograms: this.refs.percentageShareOfHREmployeesTimeAdminEmployeePrograms.value,
                    avgSalaryHREmployee: this.refs.avgSalaryHREmployee.value,
                    reductionManagingProgramsHREmployee: this.refs.reductionManagingProgramsHREmployee.value,
                    // Employee Productiving Savings
                    avgAnnualSalaryGeneralEmployee: this.refs.avgAnnualSalaryGeneralEmployee.value,
                    increaseGeneralEmployeeProductivity: this.refs.increaseGeneralEmployeeProductivity.value,
                // Investment Inputs
                    suggestedUserMax: this.refs.suggestedUserMax.value,
                    annualSoftwareFees: this.refs.annualSoftwareFees.value,
                    oneTimeImplimentationFee: this.refs.oneTimeImplimentationFee.value,
                // Program and Tool Enrichment Inputs
                    existingProvidersCost: this.refs.existingProvidersCost.value,
                    rewardsProgramOtherCompany: this.refs.rewardsProgramOtherCompany.value,
                // ROI Inputs
                    savingsAssumption1: this.refs.savingsAssumption1.value,
                    savingsAssumption2: this.refs.savingsAssumption2.value,
    
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        };
        acceptName(event) {
            this.setState({
                clientName: this.refs.name.value,
            });
            console.log(event.target.value);
        };
        acceptEmail(event) {
            this.setState({
                clientEmail: this.refs.email.value,
            });
            console.log(this.state);
        };
        accpetTotEEOY(event) {
            this.setState({
                totEEOY: this.refs.totEEOY.value
            })
        };
        resetButton(event) {
            this.setState({
            // YearQ Inputs
                companyName: "",
                tableYear: "",
                lastFiscalYearEnd: "",
                clientName: "",
                clientEmail: "",
            // Turnover and Recruitment Savings
                // Employee Turnover Cost Savings Inputs
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
            })
            console.log("We have reset the state to ", this.state);
        };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Please fill out this form with information pertinent to your organization.</h4>
                        <br />
                        <p>Company Name:</p>
                        <input ref="companyName" onChange={this.acceptCompanyName}></input>
                        <br />
                        <p>Name</p>
                        <input ref="name" onChange={this.acceptName}></input>
                        <br />
                        <p>Email</p>
                        <input ref="email" onChange={this.acceptEmail}></input>
                        <br />
                        <h6>When did your last fiscal period end?</h6>
                        <input ref="lastFiscalYearEnd" type="date" placeholder="Enter Date" onChange={this.acceptLastFiscalYearEnd}></input>
                        <br />
                        <button onClick={this.saveInputs}>Save and Route</button>
                        <br />
                        <button onClick={this.resetButton}>Reset</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>Total Employees Beginning of Year `{this.state.year}`</p>
                        <input ref="totEBOY" onChange={this.acceptTotEBOY}></input>
                        <br />
                        <p>Total Employees End of Year {this.state.year}</p>
                        <input ref="totEEOY" onChange={this.accpetTotEEOY}></input>
                        <br />
                        <p>Total Employees End of Year </p>
                        <input></input>
                        <br />
                        <p></p>
                        <input></input>
                        <br />
                        <p></p>
                        <input></input>
                        <br />
                        <p></p>
                        <input></input>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}


export default Form;

