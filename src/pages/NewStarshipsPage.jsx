import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/common/Form";

import { starshipsColumns as columns } from "../components/data";

const NewStarshipsPage = ({ starships, setStarships }) => {
  const history = useHistory();

  const handleAddStarship = (starshipData) => {
    const data = [...starships, starshipData];
    setStarships(data);
    history.push("/starships");
  };

  return (
    <div className="container">
      <Form onSubmit={handleAddStarship} columns={columns} />
    </div>
  );
};

export default NewStarshipsPage;
