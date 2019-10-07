import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Head from "./Components/Header";
import Game from "./Components/Game";
import Game1 from "./Components/Game1";
import Game2 from "./Components/Game2";
import "./Components/style.css";
import Help from "./Components/Help";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Head/>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <NavLink to="/Game" className="nav-link">
                  <button>Riddle 1</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Game1" className="nav-link">
                  <button>Riddle 2</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Game2" className="nav-link">
                  <button>Riddle 3</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Help" className="nav-link">
                  <button>Help</button>
                </NavLink>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/Game" component={Game} />
            <Route path="/Game1" component={Game1} />
            <Route path="/Game2" component={Game2} />
            <Route path="/Help" component={Help} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
