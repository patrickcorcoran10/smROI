import React, { Component } from "react";
import axios from "axios";

class Signin extends Component {
    constructor() {
        super();
    };

    render() {
        return( 
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <h6>User Name</h6>
                        <input></input>
                        <br />
                        <h6>Password</h6>
                        <input></input>
                        <br />
                        <button>Sign In</button>
                        <button>Register</button>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;