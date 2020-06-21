import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { getPlanets } from "../services/swApiService";

const PlanetsPage = ({ planets, setPlanets }) => {
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const data = await getPlanets();
      setPlanets(data);
    };
    getData();
  }, []);

  const deletePlanet = (id) => {
    const planet = planets.filter((planet) => {
      return planet.id !== id;
    });
    setPlanets(planet);
    localStorage.setItem("planets", JSON.stringify(planet));
  };

  const getColumnNames = () => {
    if (!planets.length) {
      return [];
    }

    return Object.keys(planets[0]);
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
            columns={getColumnNames()}
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
