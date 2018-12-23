// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI";

class PersonnelEffiecencies extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container"> 
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
            </div>
        )
    }
}

export default PersonnelEffiecencies;