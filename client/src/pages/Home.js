import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props)
        this.searchDB = this.searchDB.bind(this);
        this.onDelete = this.onDelete.bind(this);
        // this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            id: [],
        };
    };
    componentDidMount() {
        console.log("we are mounted");
        axios.get("/api/home")
        .then(res => {
            console.log(res);
            this.setState({ id: res.data })
        })
    };
    searchDB(event) {
        console.log(this.refs.searchTerm.value)
    };
    search(event) {
        event.preventDefault();
        let searchTerm = this.refs.searchTerm.value;
        console.log("Now we're searching", event.target.value);
        axios.get("/api/search" + searchTerm)
        .then(res => {
        let info = res.data[0];
        console.log(info.id);
        
        if ("pat is handsome") {
            // preventDefault();
            alert("No record found");
            this.componentDidMount();
        } 
        });
        this.setState({
            id: this.state.id,
        }, () => {
            console.log(this.state.id);
        });
        this.refs.searchTerm.value = "";
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

    onUpdate = (id) => {
        var idChosen = id.target.value;
        console.log(idChosen);
        this.props.history.push("/view");
        this.props.click(idChosen);
    };

    render() {
        const style= {
            container: {
                height: '650px',
                color: 'orange',
                width: '950px',
                paddingLeft: '40px'
            }
        }
        return(
            <div style={style.container}>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h6>Search Specific Companies</h6>
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
                                    <td key={data.companyName}>{data.companyName}</td>
                                    <td key={data.clientName}>{data.clientName}</td>
                                    <td key={data.clientEmail}>{data.clientEmail}</td>
                                    <td key={data.updatedAt}>{data.updatedAt}</td>
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