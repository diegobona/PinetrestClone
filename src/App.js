import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="spacer" style={{ marginTop: 65 + "px" }} />
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />

      </div>
    );
  }
}

export default App;
