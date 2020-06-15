import React, { Fragment } from "react";

import Table from "./common/Table";
import Form from "./common/Form";

import { planetsColumns as columns } from "./data.js";

const PlanetsPage = ({ planets, setPlanets }) => {
  const handleAddPlanets = (planet) => {
    const data = [...planets, planet];
    setPlanets(data);
  };

  const getInitialPlanetsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const deletePlanet = (id) => {
    setPlanets(
      planets.filter((planet) => {
        return planet.id !== id;
      })
    );
  };

  return (
    <div className="container">
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
      <Form
        initialData={getInitialPlanetsData()}
        columns={columns}
        onAddData={handleAddPlanets}
      />
    </div>
  );
};

export default PlanetsPage;
