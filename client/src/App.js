import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Parent from "./components/Parent/Parent";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Parent />
      </Wrapper>
      <Footer />
    </div>
  </Router>
)

export default App;
