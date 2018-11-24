import React, { Component } from 'react';
import './App.css';
import Start from "./components/Start/Start";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
// import Visuals from "./components/Visuals";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Wrapper>
            <Start />
            {/* <Visuals /> */}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
