import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import NotFound from "./components/NotFound";
import PeoplePage from "./components/PeoplePage";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/planets">
                  Planets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/starships">
                  Starships
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={PeoplePage} />
            <Route path="/planets" />
            <Route path="/starships" />
            <Route path="/not-found" component={NotFound} />
            <Route path="*">
              <Redirect to="/not-found" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
