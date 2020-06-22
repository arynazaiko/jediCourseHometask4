import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Form from "../components/common/Form";

const EditPlanetsPage = ({ planets, setPlanets }) => {
  const history = useHistory();
  let { id } = useParams();

  const findPlanet = () => {
    return planets.find((planet) => {
      return planet.id === +id;
    });
  };

  const handleEditPlanet = (planetData) => {
    let planet = findPlanet();

    planet = { ...planet, ...planetData };

    const newPlanet = planets.map((p) => (p.id === planet.id ? planet : p));

    setPlanets(newPlanet);

    localStorage.setItem("planets", JSON.stringify(newPlanet));

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
      />
    </div>
  );
};

export default EditPlanetsPage;
