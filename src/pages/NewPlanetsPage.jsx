import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/common/Form";

import shema from "../services/planetsValidationRules";
import { createPlanet } from "../store/actions/planets";
import { getAllPlanets } from "../store/selectors/planets";

const NewPlanetsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const planets = useSelector((state) => getAllPlanets(state));

  const handleAddPlanets = (planetData) => {
    const id = +localStorage.getItem("currentId");
    localStorage.setItem("currentId", id + 1);

    planetData.id = id;
    const updatedPlanets = [...planets, planetData];

    dispatch(createPlanet(planetData));

    localStorage.setItem("planets", JSON.stringify(updatedPlanets));
    history.push("/planets");
  };

  const getColumnNames = () => {
    if (!planets.length) {
      return [];
    }

    return Object.keys(planets[0]);
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleAddPlanets}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default NewPlanetsPage;
