import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// importing components
import Home from "./components/home";
import Header from "./components/Header.js";
import Checkout from "./components/checkout";
import Loginpage from "./components/loginPage";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Loginpage />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
