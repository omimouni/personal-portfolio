import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";

class App extends Component {
  componentDidMount() {
    document.title = "Oumar Mimouni | Portfolio";
  }

  render() {
    return (
      <div className="w-2/4 text-gray-800 m-auto flex items-center flex-col items-center justify-center min-h-screen">
        <Router>
          <Header />
          <Switch>
            <Route path="/about"></Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
