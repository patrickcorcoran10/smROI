import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
    constructor() {
        super()
        this.searchDB = this.searchDB.bind(this);
    };
    componentDidMount() {
        // Remind yourself how this works. There will be a get route from the db here. And then we display with for loop into cards. 
    }

    searchDB(event) {
        var searchTerm = {
            search: this.refs.searchTerm.value,
        };
        axios.get("/")
        // this will include a get route that will search by company name and perhaps client name and client email.
    };

    deleteEntry = (event) => {
        event.preventDefault();
        var deleteId = {
            deleteId: event.target.value,
        }
        axios.post("/Home/delete", {

        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h6>Search Clients</h6>
                        <input ref="searchTerm"></input>
                        <button onClick={this.searchDB}>Search Database</button>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                    <div className="card">
                        <h5 className="card-header">(Company Name)</h5>
                        <div className="card-body">
                            <h5 className="card-title">(Client Name)</h5>
                            <p className="card-text">(With supporting text below as a natural lead-in to additional content.)</p>
                            <button>View</button>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;