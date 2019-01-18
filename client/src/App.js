import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Parent from "./components/Parent/Parent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Wrapper>
              <Parent />
            </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
