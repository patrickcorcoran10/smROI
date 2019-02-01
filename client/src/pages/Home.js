import React, { Component } from "react";
import axios from "axios";
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');

class Home extends Component {
    constructor(props) {
        super(props)
        this.searchDB = this.searchDB.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        // this.onModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        this.state = {
            inputs: [
            // // YearQ Inputs
            //     modalIsOpen: false,
            //     id: [],
            //     companyName: "",
            //     clientName: '',
            //     clientEmail: '',
            //     tableYear: "",
            //     tableYearPlusOne: "",
            //     tableYearPlusTwo: "",
            //     tableYearPlusThree: "",
            //     lastFiscalYearEnd: "",
            // // Turnover and Recruitment Savings
            //     // Employee Turnover Cost Savings Inputs
            //     totEBOY: "",
            //     totEEOY: "",
            //     totEEOY1: "",
            //     totEwVoluntaryExit: "",
            //     avgTurnoverCostVoluntaryExit: "",
            //     productTurnoverSavings: "",
            //     // Recruiting Cost Inputs
            //     avgDaysPostingToAccept: "",
            //     totRecruitingExpenses: "",
            //     productRecruitingSavings: "",
            // // Personnel Efficiencies
            //     // HR Admin Time Savings
            //     totHREmployeesAdminEmployeePrograms: "",
            //     totHREmployeesAdminEmployeePrograms1: "",
            //     percentageShareOfHREmployeesTimeAdminEmployeePrograms: "",
            //     avgSalaryHREmployee: "",
            //     reductionManagingProgramsHREmployee: "",
            //     // Employee Productiving Savings
            //     avgAnnualSalaryGeneralEmployee: "",
            //     increaseGeneralEmployeeProductivity: "",
            // // Investment Inputs
            //     suggestedUserMax: "",
            //     annualSoftwareFees: "",
            //     oneTimeImplimentationFee: "",
            // // Program and Tool Enrichment Inputs
            //     existingProvidersCost: "",
            //     rewardsProgramOtherCompany: "",
            // // ROI Inputs
            //     savingsAssumption1: "",
            //     savingsAssumption2: "",
            ]
            };
    
    };
    componentDidMount() {
        console.log("we are mounted");
        axios.get("/api/home")
        .then(res => {
            console.log(res);
            this.setState({ inputs: res.data })
        })
    };
    searchDB(event) {
        console.log(this.refs.searchTerm.value)
    };
    // openModal(event) {
    //     event.preventDefault();
    //     this.setState({
    //         modalIsOpen: true,
    //     }, () => {
    //         console.log("modal time")
    //     })
    // };
    // afterOpenModal() {
    //     this.subtite.style.color = 'black';
    // };
    // closeModal() {
    //     this.setState({
    //         modalIsOpen: false
    //     });
    //     this.props.history.push('/');
    // };
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
                paddingLeft: '40px',
                align: 'center',
                paddingTop: '80px',
                paddingBottom: '180px'
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
                                {this.state.inputs.map((data, index) => (
                                <tr key={data.id}>
                                    <td>{data.companyName}</td>
                                    <td>{data.clientName}</td>
                                    <td>{data.clientEmail}</td>
                                    <td>{data.updatedAt}</td>
                                    <td><button value={data.id} onClick={this.onUpdate}>Company View</button></td>
                                    <td><button value={data.id} onClick={this.openModal}>Delete</button></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  >
                    <h2>Are you sure you want to delete this record?</h2>
                    <form>
                        <div className="text-center">
                            <button className="btn btn-outline-dark" onClick={this.closeModal}>Yes, delete record.</button>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-dark" onClick={this.componentDidMount}>No, keep the record.</button>
                        </div>
                    </form>
                  </Modal>
                <br />
            </div>
            
        )
    }
}

export default Home;