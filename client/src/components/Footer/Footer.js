import React, { Component } from "react";
// import "./Footer.css";

class Footer extends Component {
    render() {
        const style = {
            footer: {
                textAlign: "center",
                backgroundColor: "darkgrey",
                padding: "20px",
                position: "fixed",
                left: "0",
                bottom: "0",
                height: "30px",
                width: "100%",
            }
        }
        return(
            <div style={style.footer}>
                    <p className="footer">PCP &#169; 2019</p>
            </div>
        )
    }
}

export default Footer;