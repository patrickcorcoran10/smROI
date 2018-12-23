// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI";
import axios from "axios";

class Submit extends Component {
    constructor() {
        super();
    
    }
    calculate = (event) => {
        console.log("Now we're clicking!");
            event.preventDefault();
            this.setState({
                companyName: this.refs.companyName.value,
                // Turnover and Recruitment Savings
                    // Employee Turnover Cost Savings Inputs
                    lastFiscalYearEnd: this.refs.lastFiscalYearEnd.value,
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
            }, () => {
                console.log(this.state);
            })
            axios.post("/api/multiyearROI", {
                companyName: this.refs.companyName.value,
            // Turnover and Recruitment Savings
                // Employee Turnover Cost Savings Inputs
                lastFiscalYearEnd: this.refs.lastFiscalYearEnd.value,
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
    reset = (event) => {
        console.log("We are resetting our state");
    };
    
        
    render() {
        console.log(this.state)
        return(
            <div className="containter">
                <div className="row" id="submit">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-outline-success" onClick={ this.calculate.bind(this) }>Calculate</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={ this.reset.bind(this) }>Reset</button>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        )
    }
};
export default Submit;