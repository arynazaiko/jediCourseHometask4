import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/common/Form";

import shema from "../services/planetsValidationRules";
import { editPlanet } from "../store/actions/planets";
import { getAllPlanets } from "../store/selectors/planets";

const EditPlanetsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const planets = useSelector((state) => getAllPlanets(state));
  let { id } = useParams();

  const findPlanet = () => {
    return planets.find((planet) => {
      return planet.id === +id;
    });
  };

  const handleEditPlanet = (planetData) => {
    let planet = findPlanet();

    planet = { ...planet, ...planetData };
    const data = planets.map((p) => (p.id === planet.id ? planet : p));

    dispatch(editPlanet(planetData));

    localStorage.setItem("planets", JSON.stringify(data));
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
        initialData={findPlanet()}
        onSubmit={handleEditPlanet}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default EditPlanetsPage;
