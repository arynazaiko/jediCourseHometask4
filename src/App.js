import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { peopleData, planetsData, starshipsData } from "./components/data";

import NotFound from "./components/NotFound";
import PeoplePage from "./components/PeoplePage";
import PlanetsPage from "./components/PlanetsPage";
import StarshipsPage from "./components/StarshipsPage";

function App() {
  const [people, setPeople] = useState(peopleData);
  const [planets, setPlanets] = useState(planetsData);
  const [starships, setStarships] = useState(starshipsData);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
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
            <Route
              exact
              path="/"
              render={() => (
                <PeoplePage people={people} setPeople={setPeople} />
              )}
            />
            <Route
              path="/planets"
              render={() => (
                <PlanetsPage planets={planets} setPlanets={setPlanets} />
              )}
            />
            <Route
              path="/starships"
              render={() => (
                <StarshipsPage
                  starships={starships}
                  setStarships={setStarships}
                />
              )}
            />
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
