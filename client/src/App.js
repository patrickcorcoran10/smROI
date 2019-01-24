import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Parent from "./components/Parent/Parent";
// import MultiyearROI from './components/MultiyearROI/MultiyearROI';
import { Provider } from "react-redux";
import store from "../src/store";

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Parent />
      </Wrapper>
      <Footer />
    </div>
  </Router>
  </Provider>
)

export default App;
