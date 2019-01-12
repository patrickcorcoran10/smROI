import React, { Component } from 'react';
import './App.css';
// import Start from "./components/Start/Start";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Parent from "./components/Parent/Parent";
// import MultiyearROI from './components/MultiyearROI/MultiyearROI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Wrapper>
            <Parent />
            {/* <MultiyearROI /> */}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
