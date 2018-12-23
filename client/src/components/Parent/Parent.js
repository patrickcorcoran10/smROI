import React, { Component } from "react";
import YearQ from "../YearQ/YearQ";
import TRRecruitmentSavings from "../TRRecruitmentSavings/TRRecruitmentSavings";
import PersonnelEfficiencies from "../PersonnelEfficiencies/PersonnelEfficiencies";
import Investment from "../Investment/Investment";
import PTEnrichment from "../PTEnrichment/PTEnrichment";
import ROI from "../ROI/ROI";
import Submit from "../Submit/Submit";
import Summary from "../Summary/Summary";

class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <YearQ />
                <TRRecruitmentSavings />
                <PersonnelEfficiencies />
                <Investment />
                <PTEnrichment />
                <ROI />
                <Submit />
                <Summary />
            </div>
        )
    }
}
export default Parent;