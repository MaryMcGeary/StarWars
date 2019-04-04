import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlanetListPage from "./PlanetListPage";
import PlanetDetailsPage from "./PlanetDetailsPageContainer";
import "./StarWarsApp.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/planet"> Home </Link>
            <Link to="/planet/4">Details</Link>
            <a href="https://www.google.com">Google</a>
          </nav>

          <Route exact path="/" component={PlanetListPage} />
          <Route exact path="/planet" component={PlanetListPage} />
          <Route path="/planet/:planetId" component={PlanetDetailsPage} />
          {/* <Route component={() => <div>Not Found!</div>} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
