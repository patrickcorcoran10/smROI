import React, { Component } from "react";
// import YearQ from "../YearQ/YearQ";
// import TRRecruitmentSavings from "../TRRecruitmentSavings/TRRecruitmentSavings";
// import PersonnelEfficiencies from "../PersonnelEfficiencies/PersonnelEfficiencies";
// import Investment from "../Investment/Investment";
// import PTEnrichment from "../PTEnrichment/PTEnrichment";
// import ROI from "../ROI/ROI";
// import Submit from "../Submit/Submit";
// import Summary from "../Summary/Summary";
// import Wrapper from "../Wrapper/Wrapper";
import MultiyearROI from "../MultiyearROI/MultiyearROI";

class Parent extends Component {
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
    companyYear(companyName, lastFiscalYearEnd) {
        this.setState({
            companyName: companyName,
            lastFiscalYearEnd: lastFiscalYearEnd,
        })
        
    };

    

    render() {
        return (
            <div className="parent">
                <Wrapper >
                    {/* <YearQ 
                     click={this.companyYear.bind(this)}
                    />
                    <TRRecruitmentSavings />
                    <PersonnelEfficiencies />
                    <Investment />
                    <PTEnrichment />
                    <ROI />
                    <Submit />
                    <Summary /> */}
                    <MultiyearROI />
                </Wrapper>
            </div>
        )
    }
}
export default Parent;