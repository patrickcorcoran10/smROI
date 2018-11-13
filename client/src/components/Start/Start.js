import React, { Component } from "react";
import "./Start.css";

class Start extends Component {
    calculate = () => {
        return console.log("Now we're clicking!");
    };

    render() {
        return (
            <div>
                <p>This is Scott's App</p>
                <button className="submit" 
                // onClick={ calculate }
                >Calculate</button>
            </div>
        );
    };
}

export default Start;