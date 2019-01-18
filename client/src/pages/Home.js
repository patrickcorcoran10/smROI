import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
    constructor() {
        super()
        this.searchDB = this.searchDB.bind(this);
        this.onDelete = this.onDelete.bind(this);
        // this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            id: [],
        };
    };

    searchDB(event) {
        console.log(this.refs.searchTerm.value)
        
    };

    search(event) {
        event.preventDefault();
        let searchTerm = this.refs.searchTerm.value;
        console.log("Now we're searching", event.target.value);
        axios.get("/api/search" + searchTerm).then(res => {
        console.log(res);
        
        if (res === null) {
            alert("No records with that name.");
        }
        else {
            alert(
                "You did it"
            );
        };
    });
    }

    componentDidMount() {
        console.log("we are mounted");
        axios.get("/api/home")
        .then(res => {
            console.log(res);
            this.setState({ id: res.data })
        })
    };
    
    onDelete = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        var deleteId = event.target.value;
        
        axios.delete("/api/delete" + deleteId)
        .then((response) => {
            this.componentDidMount();
        })
        .catch(function (error) {
            console.log(error);
        });
        alert("You have deleted a record");
        
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h6>Search Specific Clients</h6>
                        <input ref="searchTerm" onChange={this.searchDB} placeholder=" Company Name"></input>
                        <button onClick={this.search.bind(this)}>Search the Database</button>
                        <br />
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <br />
                <div className="row">
                    
                    <div className="col-md-12">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Client Name</th>
                                    <th>Client Email</th>
                                    <th>Last Update</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                                {this.state.id.map((data, index) => (
                                <tr>
                                    <td>{data.companyName}</td>
                                    <td>{data.clientName}</td>
                                    <td>{data.clientEmail}</td>
                                    <td>{data.updatedAt}</td>
                                    <td><button value={data.id} onClick={this.onUpdate}>Update</button></td>
                                    <td><button value={data.id} onClick={this.onDelete}>Delete</button></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <br />
            </div>
            
        )
    }
}

export default Home;