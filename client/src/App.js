import React, { Component } from 'react';
import './App.css';
// import Start from "./components/Start/Start";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Parent from "./components/Parent/Parent";
// import MultiyearROI from './components/MultiyearROI/MultiyearROI';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
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
