import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Form from "../components/common/Form";

import { planetsColumns as columns } from "../components/data";

const EditPlanetsPage = ({ planets, setPlanets }) => {
  const history = useHistory();
  let { id } = useParams();

  const findPlanet = () => {
    return planets.find((planet) => {
      return planet.id === id;
    });
  };

  const handleEditPlanet = (planetData) => {
    let planet = findPlanet();

    planet = { ...planet, ...planetData };

    setPlanets(planets.map((p) => (p.id === planet.id ? planet : p)));

    history.push("/planets");
  };

  return (
    <div className="container">
      <Form
        initialData={findPlanet()}
        onSubmit={handleEditPlanet}
        columns={columns}
      />
    </div>
  );
};

export default EditPlanetsPage;
