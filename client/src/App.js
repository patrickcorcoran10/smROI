import React, { Component } from 'react';
import './App.css';
import Start from "./components/Start/Start";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Wrapper>
            <Start />
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
