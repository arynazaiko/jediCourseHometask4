import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink,
} from "react-router-dom";

import {
  NotFound,
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  EditPeoplePage,
  NewPeoplePage,
  EditPlanetsPage,
  NewPlanetsPage,
  EditStarshipsPage,
  NewStarshipsPage,
} from "./pages";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-3">
          <NavLink className="navbar-brand" to="/">
            JEDI
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/people">
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
            <Route exact path="/people" render={() => <PeoplePage />} />
            <Route exact path="/planets" render={() => <PlanetsPage />} />
            <Route exact path="/starships" render={() => <StarshipsPage />} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/people/:id/edit" render={() => <EditPeoplePage />} />
            <Route path="/people/new" render={() => <NewPeoplePage />} />
            <Route
              path="/planets/:id/edit"
              render={() => <EditPlanetsPage />}
            />
            <Route path="/planets/new" render={() => <NewPlanetsPage />} />
            <Route
              path="/starships/:id/edit"
              render={() => <EditStarshipsPage />}
            />
            <Route path="/starships/new" render={() => <NewStarshipsPage />} />
            <Route path="/">
              <Redirect to="/people" />
            </Route>
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
