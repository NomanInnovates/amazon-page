import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// importing components
import Header from "./Header.js";
import Loginpage from './loginPage'
import Home from "./home";
import Checkout from "./checkout";
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
        </div>
      </Router>
    );
  }
}

export default App;
