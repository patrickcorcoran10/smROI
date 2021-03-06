// Dependencies
import React, { Component } from "react";
import "./MultiyearROI.css";
import axios from "axios";

class MultiyearROI extends Component {
    constructor() {
        super();
    
    this.state = {
        // YearQ Inputs
            companyName: "",
            tableYear: "",
            tableYearPlusOne: "",
            tableYearPlusTwo: "",
            tableYearPlusThree: "",
            lastFiscalYearEnd: "",
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
    };

    companyYear = (event) => {
        event.preventDefault(); 
        let year = parseInt(this.refs.lastFiscalYearEnd.value.slice(0,4));
        let yearPlusOne = year + 1;
        let yearPlusTwo = year +2;
        let yearPlusThree = year + 3;
        this.setState({
            companyName: this.refs.companyName.value,
            lastFiscalYearEnd: this.refs.lastFiscalYearEnd.value,
            tableYear: "FY-"+year,
            tableYearPlusOne: "FY-"+yearPlusOne,
            tableYearPlusTwo: "FY-"+yearPlusTwo,
            tableYearPlusThree: "FY-"+yearPlusThree,
        }, () => {
        console.log(this.state);    
        });
    }
    turnoverRecruitmentSavings = (event) => {
        event.preventDefault();
        let totEBOYwithoutCoYearPlusOne = this.refs.totEEOY.value;
        let totEBOYwithCoYearPlusOne = totEBOYwithoutCoYearPlusOne;
        let overallEmployeeTurnoverPlusOne = (.126 * (1 - (parseInt(this.refs.productTurnoverSavings.value))));
        let impactOverallEmployeeTurnoverPlusOne = overallEmployeeTurnoverPlusOne - 12.6;
        let totEmployeesWithVoluntaryExitPlusOnewithoutCompany = .126 * ((totEBOYwithoutCoYearPlusOne + totEBOYwithoutCoYearPlusOne)/2);
        // let totEmployeesWithVoluntaryExitPlusOnewithCompany = .114 * ((totEBOYwithoutCoYearPlusOne + this.state.totEEOY1.value)/2);
        this.setState({
            totEBOY: this.refs.totEBOY.value,
            totEBOYwoCoYearPlusOne: totEBOYwithoutCoYearPlusOne,
            totEBOYwithCoYearPlusOne: totEBOYwithCoYearPlusOne,
            totEEOY: this.refs.totEEOY.value,
            totEEOY1: this.refs.totEEOY1.value,
            totEmployeesWithVoluntaryExitPlusOnewithoutCompany: totEmployeesWithVoluntaryExitPlusOnewithoutCompany,
            totEwVoluntaryExit: this.refs.totEwVoluntaryExit.value,
            avgTurnoverCostVoluntaryExit: this.refs.avgTurnoverCostVoluntaryExit.value,
            productTurnoverSavings: this.refs.productTurnoverSavings.value,
            overallEmployeeTurnoverPlusOne: overallEmployeeTurnoverPlusOne,
            impactOverallEmployeeTurnoverPlusOne: impactOverallEmployeeTurnoverPlusOne,
        }, () => {
            console.log(this.state);

        })
    }

    calculate = (event) => {
        console.log("Now we're clicking");
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
    }

    reset = (event) => {
        console.log("We are resetting our state");
    }
    render() {
        return (
            <div className="container">
                <div className="row" id="header">
                    <div className="col-md-12">
                        <h4>The Employee Experience ROI Calculator</h4>
                        <br />
                        <h6>Company Name: </h6>
                        <input ref="companyName" placeholder="Company Name"></input>
                        <br />
                        <h6>When did your last fiscal period end?</h6>
                        <input ref="lastFiscalYearEnd" type="date" placeholder="Enter Date"></input>
                        <br />
                        <button onClick={this.companyYear.bind(this)}>Confirm</button>
                    </div>
                </div>
                <div id="trSavings">
                    <div className="row">
                        <div className="col-md-5">
                            <p className="divTitle">Turnover and Recruitment Savings</p>   
                        </div>
                        <div className="col-md-7">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="employeeTurnoverCostSavingsTable">
                                <tbody>
                                    <tr>
                                        <th className="leftTH">Employee Turnover Costs</th>
                                        <th>{this.state.tableYear}</th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th className="impactTH">IMPACT</th>
                                    </tr>
                                    <tr className="smallTR">
                                        <td></td>
                                        <td></td>
                                        <td>Without Ex. Company</td>
                                        <td>With Ex. Company</td>
                                        <td>Due to Ex. Company</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Total Employees at Beginning of Year</td>
                                        <td><input className="tableInput" ref="totEBOY" placeholder="0"></input></td>
                                        <td>{this.state.totEBOYwithCoYearPlusOne}</td>
                                        <td>{this.state.totEBOYwithCoYearPlusOne}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Total Employees at End of Year</td>
                                        <td><input className="tableInput" ref="totEEOY" placeholder="0"></input></td>
                                        <td><input className="tableInput" ref="totEEOY1" placeholder="0"></input></td>
                                        <td>{this.state.totEEOY1}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Total Employees with Voluntary Exit</td>
                                        <td><input className="tableInput" ref="totEwVoluntaryExit" placeholder="0"></input></td>
                                        <td>{this.state.totEmployeesWithVoluntaryExitPlusOnewithoutCompany}</td>
                                        <td>{this.state.totEmployeesWithVoluntaryExitPlusOnewithoutCompany}</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Average Turnover Cost per Voluntary Exit</td>
                                        <td><input className="tableInput" ref="avgTurnoverCostVoluntaryExit" placeholder="$0.00" type="currency"></input></td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH" id="footnote">*If you don't know your average turnover cost, you can use the average annual salary of employees</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="midTableInput">
                            <p id="midTableInput">Product Reduces Turnover By:</p><input type="percentage" placeholder="0" className="tableInput" ref="productTurnoverSavings"></input>
                            </div>
                            <br />
                            <table id="midTable">
                                <tbody>
                                    <tr>
                                        <td>Overall Employee Turnover</td>
                                        <td>12.6%</td>
                                        <td>12.6%</td>
                                        <td>{this.state.overallEmployeeTurnoverPlusOne}</td>
                                        <td>{this.state.impactOverallEmployeeTurnoverPlusOne}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Employee Turnover Costs</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="recruitingCostSavingsTable">
                                <tbody>
                                    <tr>
                                        <th className="leftTH">Recruiting Cost Savings</th>
                                        <th>{this.state.tableYear}</th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th className="impactTH">IMPACT</th>
                                    </tr>
                                    <tr className="smallTR">
                                        <td></td>
                                        <td></td>
                                        <td>Without Ex. Company</td>
                                        <td>With Ex. Company</td>
                                        <td>Due to Ex. Company</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">New Hires</td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Average Days from Job Posting to Offer Acceptance</td>
                                        <td><input className="tableInput" ref="avgDaysPostingToAccept" placeholder="0"></input></td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Total Recruiting Expenses</td>
                                        <td><input type="currancy" className="tableInput" ref="totRecruitingExpenses" placeholder="$0.00"></input></td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH" id="footnote">*If you already factored in recruiting costs in the turnover costs above, you can skip this section</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="midTableInput">
                            <p id="midTableInput">Product reduces recruiting expenses and days to hire by:</p><input type="percentage" placeholder="0" className="tableInput" ref="productRecruitingSavings"></input>
                            </div>
                            <br />
                            <table id="midTable">
                                <tbody>
                                    <tr>
                                        <td>Recruiting Cost per Hire</td>
                                        <td>%</td>
                                        <td>%</td>
                                        <td>%</td>
                                        <td>%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <button onClick={this.turnoverRecruitmentSavings.bind(this)}>Turnover and Recruitment Calculation</button>
                        </div>
                    </div>
                </div>
                <div className="personnelEfficiencies">
                <div className="row" id="personnelEfficiencies">
                    <div className="col-md-5">
                                <p className="divTitle">Personnel Efficiencies</p>   
                            </div>
                            <div className="col-md-7">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="personnelEfficienciesTable">
                                    <tbody>
                                        <tr>
                                            <th className="leftTH">HR Administration Time Savings</th>
                                            <th>{this.state.tableYear}</th>
                                            <th>{this.state.tableYearPlusOne}</th>
                                            <th>{this.state.tableYearPlusOne}</th>
                                            <th className="impactTH">IMPACT</th>
                                        </tr>
                                        <tr className="smallTR">
                                            <td></td>
                                            <td></td>
                                            <td>Without Ex. Company</td>
                                            <td>With Ex. Company</td>
                                            <td>Due to Ex. Company</td>
                                        </tr>
                                        <tr>
                                            <td className="leftTH">Total Human Resources Employees Administering Employee Programs</td>
                                            <td><input className="tableInput" ref="totHREmployeesAdminEmployeePrograms" placeholder="0"></input></td>
                                            <td><input className="tableInput" ref="totHREmployeesAdminEmployeePrograms1" placeholder="0"></input></td>
                                            <td>x</td>
                                            <td>x</td>
                                        </tr>
                                        <tr>
                                            <td className="leftTH">% Share of HR Employees' Time Spent Managing Company Employee Programs</td>
                                            <td><input className="tableInput" ref="percentageShareOfHREmployeesTimeAdminEmployeePrograms" placeholder="0"></input></td>
                                            <td>x</td>
                                            <td>x</td>
                                            <td>x</td>
                                        </tr>
                                        <tr>
                                            <td className="leftTH">Average Annual Salary & Benefits of Human Resource Employee</td>
                                            <td><input className="tableInput" ref="avgSalaryHREmployee" type="currency" placeholder="$0.00"></input></td>
                                            <td>x</td>
                                            <td>x</td>
                                            <td>x</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div id="midTableInput">
                                <p id="midTableInput">Assumption: With Ex. Co., reduce time spent managing employee programs by:</p><input type="percentage" placeholder="0" className="tableInput" ref="reductionManagingProgramsHREmployee"></input>
                                </div>
                                <br />
                                <table id="midTable">
                                    <tbody>
                                        <tr>
                                            <td>Administration Cost of Employee Programs</td>
                                            <td>%</td>
                                            <td>%</td>
                                            <td>%</td>
                                            <td>%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="generalEmployeeProductivitySavingsTable">
                                    <tbody>
                                        <tr>
                                            <th className="leftTH">General Employee Productivity Savings Table</th>
                                            <th>{this.state.tableYear}</th>
                                            <th>{this.state.tableYearPlusOne}</th>
                                            <th>{this.state.tableYearPlusOne}</th>
                                            <th className="impactTH">IMPACT</th>
                                        </tr>
                                        <tr className="smallTR">
                                            <td></td>
                                            <td></td>
                                            <td>Without Ex. Company</td>
                                            <td>With Ex. Company</td>
                                            <td>Due to Ex. Company</td>
                                        </tr>
                                        <tr>
                                            <td className="leftTH">Average Employees through Year</td>
                                            <td>x</td>
                                            <td>x</td>
                                            <td>x</td>
                                            <td>x</td>
                                        </tr>
                                        <tr>
                                            <td className="leftTH">Average Annual Salary & Benefits of General Employee</td>
                                            <td><input className="tableInput" ref="avgAnnualSalaryGeneralEmployee" placeholder="0"></input></td>
                                            <td>x</td>
                                            <td>x</td>
                                            <td>x</td>
                                        </tr>
                                        <tr>
                                            <td className="leftTH" id="footnote">*If you don't know your benefits, you can use an industry standard of 30% annual salary</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div id="midTableInput">
                                <p id="midTableInput">Assumption: Ex. Co. increases productivity by:</p><input type="percentage" placeholder="0" className="tableInput" ref="increaseGeneralEmployeeProductivity"></input>
                                </div>
                                <br />
                                <table id="midTable">
                                    <tbody>
                                        <tr>
                                            <td>Productivity Cost per Hour of Work</td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td>$</td>
                                        </tr>
                                        <tr>
                                            <td>Annual Productivity Costs</td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td>$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                <div className="investments">
                    <div className="row">
                        <div className="col-md-5">
                                <p className="divTitle">Investment</p>   
                        </div>
                        <div className="col-md-7">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="investmentWordBubble">
                                <p>- The product requires an annual (or multi-year) commitment, which gives employees access to the software at anytime from their computers or mobile devices.</p>            
                                <p>- Pricing is tied to the number of users needed through the term of your contract, and as the number of users increases, the cost per user decreases.</p>
                                <p>- Customers decide on a rewards budget that covers an entire employee base, and then allocate points that employees can give to each other.</p>
                                <p>- Finally, there is a one-time implementation service fee.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <table className="investmentTable">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th className="investmentTH">{this.state.tableYearPlusOne}</th>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="smallTR">WITH Ex. Co.</td>
                                    </tr>
                                    <tr>
                                        <td>Suggested User Max</td>
                                        <td><input className="tableInput" ref="suggestedUserMax" placeholder="0"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Annual Software Fees</td>
                                        <td><input className="tableInput" ref="annualSoftwareFees" type="currency" placeholder="$0.00"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Cost per User per Month</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Annual Rewards Budget per Employee</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Total Rewards Budget</td>
                                        <td>$</td>   
                                    </tr>
                                    <tr>
                                        <td>Anticipated Redemptions from Rewards Budget in Year 1</td>
                                        <td>%</td>
                                    </tr>
                                    <tr>
                                        <td>Anticipated Rewards Spend in Year 1</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>One-Time Implementation Service Fee</td>
                                        <td><input className="tableInput" ref="oneTimeImplimentationFee" placeholder="$0.00" type="currency"></input></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total Fees and Employee Rewards Spend</strong></td>
                                        <td>$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div> */}
                <div className="ptEnrichment">
                    <div className="row">
                        <div className="col-md-5">
                                <p className="divTitle">Program and Tool Enrichment</p>   
                            </div>
                            <div className="col-md-7">
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="ptEnrichment">
                                <tbody>
                                    <tr>
                                        <th className="leftTH">Program & Tool Replacement Savings</th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th className="impactTH">IMPACT</th>
                                    </tr>
                                    <tr className="smallTR">
                                        <td></td>
                                        <td>Without Ex. Company</td>
                                        <td>With Ex. Company</td>
                                        <td>Due to Ex. Company</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Existing technology providers to be enriched or replaced by Ex. Co.</td>
                                        <td><input className="tableInput" ref="existingProvidersCost" placeholder="$0.00" type="currency"></input></td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Non-Ex. Co. rewards programs (gift cards, anniversaries, giveaways, contests, etc. now managed out of Ex. Co. Rewards Budget above)</td>
                                        <td><input className="tableInput" ref="rewardsProgramOtherCompany" placeholder="$0.00" type="currency"></input></td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <th><strong>Cost of Tools & Programs Replaced by Ex. Co.</strong></th>
                                        <th>$</th>
                                        <th>$</th>
                                        <th>$</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="roi">
                    <div className="row" id="roi">
                        <div className="col-md-5">
                            <p className="divTitle">Return on Investment</p>   
                        </div>
                        <div className="col-md-7">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                        </div>
                        <div className="col-md-6">
                            <table className="investmentTable">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th className="investmentTH">{this.state.tableYearPlusOne}</th>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="smallTR">WITH Ex. Co.</td>
                                    </tr>
                                    <tr>
                                        <td>Cost of Investment</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain from Turnover Savings</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain from Recruiting Savings</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain from HR Administration Savings</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain for General Employee Efficiency Savings</td>
                                        <td>$</td>   
                                    </tr>
                                    <tr>
                                        <td>Gain from Program/Tool Savings</td>
                                        <td>%</td>
                                    </tr>
                                    <tr>
                                        <td>Gross Gain</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Net Gain</td>
                                        <td>$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-7">
                        </div>
                        <div className="col-md-5">
                            <h6>ROI of X in Year 1</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                        </div>
                        <div className="col-md-7">
                            <table className="threeYearTable">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>{this.state.tableYearPlusOne}</th>
                                        <th>{this.state.tableYearPlusTwo}</th>
                                        <th>{this.state.tableYearPlusThree}</th>
                                        <th>3 Years</th>
                                    </tr>
                                    <tr className="smallTR">
                                        <td></td>
                                        <td>WITH Ex. Co.</td>
                                        <td>WITH Ex. Co.</td>
                                        <td>WITH Ex. Co.</td>
                                        <td>WITH Ex. Co.</td>
                                    </tr>
                                    <tr className="smallTR">    
                                        <td>Assumption: Employee growth increases software fees</td>
                                        <td></td>
                                        <td>%</td>
                                        <td>%</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Cost of Investment</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Assumption: Increasing savings impact of Ex. Co.</td>
                                        <td></td>
                                        <td><input className="tableInput" ref="savingsAssumption1" type="percentage" placeholder="0%"></input></td>
                                        <td><input className="tableInput" ref="savingsAssumption2" type="percentage" placeholder="0%"></input></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Gain from Turnover Savings</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain from Recruiting Savings</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain from HR Administration Savings</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain for Employee Efficiency Savings</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gain from Program/Tool Savings</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Gross Gain</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                        <td>Net Gain</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                        <td>$</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                    <tr className="roiShowcase">
                                        <td>ROI</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
                <div className="summary">
                    <div className="row">
                        <div className="col-md-5">
                            <h3>X</h3>
                            <h3>`ROI in Year 1 for 
                            {/* {this.refs.companyName.value}  */}
                            Company`</h3>
                        </div>
                        <div className="col-md-2">
                            <h6>Turnover Recruitment Savings</h6>
                            <br />
                        </div>
                        <div className="col-md-2">
                            <h6>Personnel Efficiences</h6>   
                            <br />
                        </div>
                        <div className="col-md-2">
                            <h6>Program Tool Replacement</h6>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
};
// Exporting the Calculator Class
export default MultiyearROI;