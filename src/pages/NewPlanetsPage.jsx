import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/common/Form";

import { planetsColumns as columns } from "../components/data";

const NewPlanetsPage = ({ planets, setPlanets }) => {
  const history = useHistory();

  const handleAddPlanets = (planetData) => {
    const data = [...planets, planetData];
    setPlanets(data);
    history.push("/planets");
  };

  return (
    <div className="container">
      <Form onSubmit={handleAddPlanets} columns={columns} />
    </div>
  );
};

export default NewPlanetsPage;
