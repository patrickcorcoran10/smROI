import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import UserView from "./pages/UserView";
import Form from "./pages/Form";
import Visuals from "./pages/Visuals";
import Signin from "./pages/Signin";
// import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
// import Parent from "./components/Parent/Parent";
// import MultiyearROI from './components/MultiyearROI/MultiyearROI';

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/view" component={UserView} />
        <Route exact path="/visuals" component={Visuals} />
        <Route exact path="/signin" component={Signin} />
      </Wrapper>
      <Footer />
    </div>
  </Router>


)

export default App;
