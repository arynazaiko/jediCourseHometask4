import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/common/Form";

import shema from "../services/starshipsValidationRules";
import { createStarship } from "../store/actions/starships";
import { getAllStarships } from "../store/selectors/starships";

const NewStarshipsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const starships = useSelector((state) => getAllStarships(state));

  const handleAddStarship = (starshipData) => {
    const id = +localStorage.getItem("currentId");
    localStorage.setItem("currentId", id + 1);

    starshipData.id = id;
    const updatedStarships = [...starships, starshipData];

    dispatch(createStarship(starshipData));

    localStorage.setItem("starships", JSON.stringify(updatedStarships));
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
