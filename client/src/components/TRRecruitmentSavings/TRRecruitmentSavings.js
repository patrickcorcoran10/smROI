// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI";

class TRRecruitmentSavings extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container">
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
                                        <th>FY-2017</th>
                                        <th>FY-2018</th>
                                        <th>FY-2018</th>
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
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Total Employees at End of Year</td>
                                        <td><input className="tableInput" ref="totEEOY" placeholder="0"></input></td>
                                        <td><input className="tableInput" ref="totEEOY1" placeholder="0"></input></td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td className="leftTH">Total Employees with Voluntary Exit</td>
                                        <td><input className="tableInput" ref="totEwVoluntaryExit" placeholder="0"></input></td>
                                        <td>x</td>
                                        <td>x</td>
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
                                        <td>%</td>
                                        <td>%</td>
                                        <td>%</td>
                                        <td>%</td>
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
                                        <th>FY-2017</th>
                                        <th>FY-2018</th>
                                        <th>FY-2018</th>
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
                </div>
            </div>
        )
    }
}

export default TRRecruitmentSavings;