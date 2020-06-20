import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { planetsColumns as columns } from "../components/data.js";

const PlanetsPage = ({ planets, setPlanets }) => {
  const history = useHistory();

  const deletePlanet = (id) => {
    setPlanets(
      planets.filter((planet) => {
        return planet.id !== id;
      })
    );
  };

  return (
    <div className="container">
      <Button
        label="Add planet"
        classes="btn btn-success"
        onClick={() => {
          history.push("/planets/new");
        }}
      />
      {planets.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">Planets</h3>
          <Table
            columns={columns}
            data={planets}
            tableDescriptor="Planets"
            onDelete={deletePlanet}
          />
        </Fragment>
      )}
    </div>
  );
};

export default PlanetsPage;
