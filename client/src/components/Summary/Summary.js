// Dependencies
import React, { Component } from "react";
import "../MultiyearROI/MultiyearROI";

class Summary extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="container">
                <div className="summary">
                    <div className="row">
                        <div className="col-md-5">
                            <p className="divTitle">Summary</p>   
                        </div>
                        <div className="col-md-7">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <h3>X</h3>
                            <h3>ROI in Year 1 for X Company</h3>
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
}
export default Summary;