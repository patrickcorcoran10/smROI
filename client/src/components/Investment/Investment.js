// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI";

class Investment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="container">
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
                                        <th className="investmentTH">FY-2018</th>
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
                </div>
            </div>
        )
    }
}
export default Investment;