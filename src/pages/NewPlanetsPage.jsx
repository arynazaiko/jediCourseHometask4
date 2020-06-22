import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/common/Form";

const NewPlanetsPage = ({ planets, setPlanets }) => {
  const history = useHistory();

  const handleAddPlanets = (planetData) => {
    const data = [...planets, planetData];
    setPlanets(data);
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
      <Form onSubmit={handleAddPlanets} columns={getColumnNames()} />
    </div>
  );
};

export default NewPlanetsPage;
