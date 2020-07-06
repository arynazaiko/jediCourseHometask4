import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/common/Form";

import shema from "../services/starshipsValidationRules";
import { editStarship } from "../store/actions/starships";
import { getAllStarships } from "../store/selectors/starships";

const EditStarshipsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const starships = useSelector((state) => getAllStarships(state));
  let { id } = useParams();

  const findStarship = () => {
    return starships.find((starship) => {
      return starship.id === +id;
    });
  };

  const handleEditStarship = (starshipData) => {
    let starship = findStarship();

    starship = { ...starship, ...starshipData };
    const data = starships.map((s) => (s.id === starship.id ? starship : s));

    dispatch(editStarship(starshipData));

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
        initialData={findStarship()}
        onSubmit={handleEditStarship}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default EditStarshipsPage;
