import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import YearQ from "../YearQ/YearQ";
// import TRRecruitmentSavings from "../TRRecruitmentSavings/TRRecruitmentSavings";
// import PersonnelEfficiencies from "../PersonnelEfficiencies/PersonnelEfficiencies";
// import Investment from "../Investment/Investment";
// import PTEnrichment from "../PTEnrichment/PTEnrichment";
// import ROI from "../ROI/ROI";
// import Submit from "../Submit/Submit";
// import Summary from "../Summary/Summary";
// import Wrapper from "../Wrapper/Wrapper";
// import MultiyearROI from "../MultiyearROI/MultiyearROI";
import Form from "../../pages/Form";
import SignIn from "../../pages/SignIn";
import UserView from "../../pages/UserView";
import Visuals from "../../pages/Visuals";
import Home from "../../pages/Home";

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
                <Route exact path="/" component={Home} />
                <Route exact path="/form" render={(props) => <Form {...props} sendForm={this.onChoice.bind(this)} />} />
                <Route exact path="/user-view" render={(props) => <UserView {...props} onClick={this.onChoice.bind(this)} />} />
                <Route exact path="/visuals" render={(props) => <Visuals {...props} onClick={this.toView.bind(this)} />} />
                <Route exact path="sign-in" component={SignIn} />
            </div>
        )
    }
}
export default Parent;