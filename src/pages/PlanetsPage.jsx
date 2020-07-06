import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { getPlanets } from "../services/swApiService";
import {
  setPlanets,
  deletePlanet,
  changeBelovedStatus,
} from "../store/actions/planets";
import { getAllPlanets } from "../store/selectors/planets";

const PlanetsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const planets = useSelector((state) => getAllPlanets(state));

  useEffect(() => {
    const getData = async () => {
      const data = await getPlanets();
      dispatch(setPlanets(data));
    };
    getData();
  }, []);

  const handleDeletePlanet = (id) => {
    const filteredPlanets = planets.filter((planet) => {
      return planet.id !== id;
    });
    dispatch(deletePlanet(id));
    localStorage.setItem("planets", JSON.stringify(filteredPlanets));
  };

  const handleBelovedStatus = (id) => {
    const data = planets.map((planets) => {
      return planets.id === +id
        ? { ...planets, beloved: !planets.beloved }
        : planets;
    });

    dispatch(changeBelovedStatus(id));
    localStorage.setItem("planets", JSON.stringify(data));
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
        label="Create planet"
        classes="btn btn-warning text-white"
        onClick={() => {
          history.push("/planets/new");
        }}
      />
      {planets.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">Planets from Star Wars Universe</h3>
          <Table
            columns={getColumnNames()}
            data={planets}
            tableDescriptor="Planets"
            onDelete={handleDeletePlanet}
            belovedStatus={handleBelovedStatus}
          />
        </Fragment>
      )}
    </div>
  );
};

export default PlanetsPage;
