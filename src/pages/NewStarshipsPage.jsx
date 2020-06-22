import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/common/Form";

import shema from "../services/starshipsValidationRules";

const NewStarshipsPage = ({ starships, setStarships }) => {
  const history = useHistory();

  const handleAddStarship = (starshipData) => {
    const data = [...starships, starshipData];
    setStarships(data);
    localStorage.setItem("starships", JSON.stringify(data));
    history.push("/starships");
  };

  const getColumnNames = () => {
    if (!starships.length) {
      return [];
    }

    return Object.keys(starships[0]);
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleAddStarship}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default NewStarshipsPage;
