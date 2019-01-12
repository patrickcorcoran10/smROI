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
        this.acceptTotEEOY1 = this.acceptTotEEOY1.bind(this);
        this.acceptTotEwVoluntaryExit = this.acceptTotEwVoluntaryExit.bind(this);
        this.acceptAvgTurnoverCostVoluntaryExit = this.acceptAvgTurnoverCostVoluntaryExit.bind(this);
        this.acceptAvgDaysPostingToAccept = this.acceptAvgDaysPostingToAccept.bind(this);
        this.acceptTotRecruitingExpenses = this.acceptTotRecruitingExpenses.bind(this);
        this.acceptTotHREmployeesAdminEmployeePrograms = this.acceptTotHREmployeesAdminEmployeePrograms.bind(this);
        this.acceptTotHREmployeesAdminEmployeePrograms1 = this.acceptTotHREmployeesAdminEmployeePrograms1.bind(this);
        this.acceptPercentageShareOfHREmployeesTimeAdminEmployeePrograms = this.acceptPercentageShareOfHREmployeesTimeAdminEmployeePrograms.bind(this);
        this.acceptAvgSalaryHREmployee = this.acceptAvgSalaryHREmployee.bind(this);
        this.acceptReductionManagingProgramsHREmployee = this.acceptReductionManagingProgramsHREmployee.bind(this);
        this.acceptAvgAnnualSalaryGeneralEmployee = this.acceptAvgAnnualSalaryGeneralEmployee.bind(this);
        this.acceptSuggestedUserMax = this.acceptSuggestedUserMax.bind(this);
        this.acceptAnnualSoftwareFees = this.acceptAnnualSoftwareFees.bind(this);
        this.acceptOneTimeImplimentationFee = this.acceptOneTimeImplimentationFee.bind(this);
        this.acceptExistingProvidersCost = this.acceptExistingProvidersCost.bind(this);
        this.acceptRewardsProgramOtherCompany = this.acceptRewardsProgramOtherCompany.bind(this);
        };
        acceptCompanyName(event) {
            this.setState({
                companyName: this.refs.companyName.value
            });
            console.log(event.target.value);
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
                totEBOY: this.refs.totEBOY.value,
            })
        };
        acceptTotEwVoluntaryExit(event) {
            this.setState({
                totEwVoluntaryExit: this.refs.totEwVoluntaryExit.value,
            })
        };
        acceptAvgTurnoverCostVoluntaryExit(event) {
            this.setState({
                avgTurnoverCostVoluntaryExit: this.refs.avgTurnoverCostVoluntaryExit.value,
            })
        };
        acceptTotEEOY1(event) {
            this.setState({
                totEEOY1: this.refs.totEEOY1.value,
            })
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
        acceptAvgDaysPostingToAccept(event) {
            this.setState({
                avgDaysPostingToAccept: this.refs.avgDaysPostingToAccept.value,
            })
        };
        acceptTotRecruitingExpenses(event) {
            this.setState({
                totRecruitingExpenses: this.refs.totRecruitingExpenses.value,
            })
        };
        acceptTotHREmployeesAdminEmployeePrograms(evemt) {
            this.setState({
                totHREmployeesAdminEmployeePrograms: this.refs.totHREmployeesAdminEmployeePrograms.value,
            })
        };
        acceptTotHREmployeesAdminEmployeePrograms1(event) {
            this.setState({
                totHREmployeesAdminEmployeePrograms1: this.refs.totHREmployeesAdminEmployeePrograms1.value,
            })
        };
        acceptPercentageShareOfHREmployeesTimeAdminEmployeePrograms(event) {
            this.setState({
                percentageShareOfHREmployeesTimeAdminEmployeePrograms: this.refs.percentageShareOfHREmployeesTimeAdminEmployeePrograms.value,
            })
        };
        acceptAvgSalaryHREmployee(event) {
            this.setState({
                avgSalaryHREmployee: this.refs.avgSalaryHREmployee.value,
            })
        };
        acceptReductionManagingProgramsHREmployee(event) {
            this.setState({
                reductionManagingProgramsHREmployee: this.refs.reductionManagingProgramsHREmployee.value,
            })
        };
        acceptAvgAnnualSalaryGeneralEmployee(event) {
            this.setState({
                avgAnnualSalaryGeneralEmployee: this.refs.avgAnnualSalaryGeneralEmployee.value,
            })
        };
        acceptSuggestedUserMax(event) {
            this.setState({
                suggestedUserMax: this.refs.suggestedUserMax.value,
            })
        };
        acceptAnnualSoftwareFees(event) {
            this.setState({
                annualSoftwareFees: this.refs.annualSoftwareFees.value,
            })
        };
        acceptOneTimeImplimentationFee(event) {
            this.setState({
                oneTimeImplimentationFee: this.refs.oneTimeImplimentationFee.value,
            })
        };
        acceptExistingProvidersCost(event) {
            this.setState({
                existingProvidersCost: this.refs.existingProvidersCost.value,
            })
        };
        acceptRewardsProgramOtherCompany(event) {
            this.setState({
                rewardsProgramOtherCompany: this.refs.rewardsProgramOtherCompany.value,
            });
            console.log(this.state);
        };
        saveInputs(event) {
            console.log("Now we're clicking...");
            // event.preventDefault();
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
                    productTurnoverSavings: "",
                // Recruiting Cost Inputs
                    avgDaysPostingToAccept: this.refs.avgDaysPostingToAccept.value,
                    totRecruitingExpenses: this.refs.totRecruitingExpenses.value,
                    productRecruitingSavings: "",
                // Personnel Efficiencies
                    // HR Admin Time Savings
                    totHREmployeesAdminEmployeePrograms: this.refs.totHREmployeesAdminEmployeePrograms.value,
                    totHREmployeesAdminEmployeePrograms1: this.refs.totHREmployeesAdminEmployeePrograms1.value,
                    percentageShareOfHREmployeesTimeAdminEmployeePrograms: this.refs.percentageShareOfHREmployeesTimeAdminEmployeePrograms.value,
                    avgSalaryHREmployee: this.refs.avgSalaryHREmployee.value,
                    reductionManagingProgramsHREmployee: "",
                    // Employee Productiving Savings
                    avgAnnualSalaryGeneralEmployee: this.refs.avgAnnualSalaryGeneralEmployee.value,
                    increaseGeneralEmployeeProductivity: "",
                // Investment Inputs
                    suggestedUserMax: this.refs.suggestedUserMax.value,
                    annualSoftwareFees: this.refs.annualSoftwareFees.value,
                    oneTimeImplimentationFee: this.refs.oneTimeImplimentationFee.value,
                // Program and Tool Enrichment Inputs
                    existingProvidersCost: this.refs.existingProvidersCost.value,
                    rewardsProgramOtherCompany: this.refs.rewardsProgramOtherCompany.value,
                // ROI Inputs
                    savingsAssumption1: "",
                    savingsAssumption2: "",
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
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
                        <h2>Company and Contact Information</h2>
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
                        <h2>Turnover and Recruitment Information</h2>
                        <p>Total Employees Beginning of Year `{this.state.year}`</p>
                        <input ref="totEBOY" onChange={this.acceptTotEBOY}></input>
                        <br />
                        <p>Total Employees End of Year {this.state.year}</p>
                        <input ref="totEEOY" onChange={this.accpetTotEEOY}></input>
                        <br />
                        <p>Total Employees at End of Year +1</p>
                        <input ref="totEEOY1" onChange={this.acceptTotEEOY1}></input>
                        <br />
                        <p>Total Employees With Voluntary Exit</p>
                        <input ref="totEwVoluntaryExit" onChange={this.acceptTotEwVoluntaryExit}></input>
                        <br />
                        <p>Average Turnover Cost for a Voluntary Exit</p>
                        <input ref="avgTurnoverCostVoluntaryExit" onChange={this.acceptAvgTurnoverCostVoluntaryExit}></input>
                        <br />
                        <p>Average Number of Days From Job Posting until Job Filled</p>
                        <input ref="avgDaysPostingToAccept" onChange={this.acceptAvgDaysPostingToAccept}></input>
                        <br />
                        <p>Total Recruiting Expenses</p>
                        <input ref="totRecruitingExpenses" onChange={this.acceptTotRecruitingExpenses}></input>
                        <br />
                        <h2>Personnel Questions</h2>
                        <p>Total Human Resources Employees Administering Employee Programs</p>
                        <input ref="totHREmployeesAdminEmployeePrograms" onChange={this.acceptTotHREmployeesAdminEmployeePrograms}></input>
                        <br />
                        <p>Total Human Resources Employees Administering Employee Programs in Year +1</p>
                        <input ref="totHREmployeesAdminEmployeePrograms1" onChange={this.acceptTotHREmployeesAdminEmployeePrograms1}></input>
                        <br />
                        <p>% Share of HR Employees' Time Spent Managing Company Employee Programs</p>
                        <input ref="percentageShareOfHREmployeesTimeAdminEmployeePrograms" onChange={this.acceptPercentageShareOfHREmployeesTimeAdminEmployeePrograms}></input>
                        <br />
                        <p>Average Annual Salary & Benefits of Human Resource Employee</p>
                        <input ref="avgSalaryHREmployee" onChange={this.acceptAvgSalaryHREmployee}></input>
                        <br />
                        <p>Average Employees through Year</p>
                        <input ref="reductionManagingProgramsHREmployee" onChange={this.acceptReductionManagingProgramsHREmployee}></input>
                        <br />
                        <p>Average Annual Salary & Benefits of General Employee</p>
                        <input ref="avgAnnualSalaryGeneralEmployee" onChange={this.acceptAvgAnnualSalaryGeneralEmployee}></input>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Investment Questions</h2>
                        <p>Suggested User Max</p>
                        <input ref="suggestedUserMax" onChange={this.acceptSuggestedUserMax}></input>
                        <br />
                        <p>Annual Software Fees</p>
                        <input ref="annualSoftwareFees" onChange={this.acceptAnnualSoftwareFees}></input>
                        <br />
                        <p>One-Time Implementation Service Fee</p>
                        <input ref="oneTimeImplimentationFee" onChange={this.acceptOneTimeImplimentationFee}></input>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Program & Tool Enrichment Questions</h2>
                        <p>Existing technology providers to be enriched or replaced by Ex. Co.</p>
                        <input ref="existingProvidersCost" onChange={this.acceptExistingProvidersCost}></input>
                        <br />
                        <p>Non-Ex. Co. rewards programs (gift cards, anniversaries, giveaways, contests, etc. now managed out of Ex. Co. Rewards Budget above)</p>
                        <input ref="rewardsProgramOtherCompany" onChange={this.acceptRewardsProgramOtherCompany}></input>
                        <br />
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        )
    }
};
export default Form;

