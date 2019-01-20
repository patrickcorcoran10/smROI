import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../pages/Home.js";
import UserView from "../../pages/UserView";
import Form from "../../pages/Form";
import Visuals from "../../pages/Visuals";
import Signin from "../../pages/Signin";


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
    onUpdate(idChosen) {
        this.setState({
            id: idChosen
        })
    };
    render() {
        return (
            <div className="parent">
                <Route exact path="/" render={(props) => <Home {...props} click={this.onUpdate.bind(this)} />} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/view" render={(props) => <UserView {...props} id={this.state.id} />} />
                <Route exact path="/visuals" component={Visuals} />
                <Route exact path="/signin" component={Signin} />
            </div>
        )
    }
}
export default Parent;