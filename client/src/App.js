import React, { Component } from 'react';
import './App.css';
// import Start from "./components/Start/Start";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
import MultiyearROI from "./components/MultiyearROI/MultiyearROI";
// import Visuals from "./components/Visuals";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
          <Wrapper>
            <MultiyearROI />
            {/* <Visuals /> */}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
