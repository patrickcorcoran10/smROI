// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI";

class PTEnrichment extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="container">
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
                                        <th>FY-2018</th>
                                        <th>FY-2018</th>
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
            </div>
        )
    }
}
export default PTEnrichment;