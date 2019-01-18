// Dependencies
import React, { Component } from "react";
import "../components/MultiyearROI/MultiyearROI";

class Visuals extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return(
            <div className="container">
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
                                        <th className="investmentTH">FY-2018</th>
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
                                        <th>FY-2018</th>
                                        <th>FY-2019</th>
                                        <th>FY-2020</th>
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
            </div>
        )
    }
}
export default Visuals;