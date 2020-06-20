import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Form from "../components/common/Form";

import { starshipsColumns as columns } from "../components/data";

const EditStarshipsPage = ({ starships, setStarships }) => {
  const history = useHistory();
  let { id } = useParams();

  const findStarship = () => {
    return starships.find((starship) => {
      return starship.id === id;
    });
  };

  const handleEditStarship = (starshipData) => {
    let starship = findStarship();

    starship = { ...starship, ...starshipData };

    setStarships(starships.map((s) => (s.id === starship.id ? starship : s)));

    history.push("/starships");
  };

  return (
    <div className="container">
      <Form
        initialData={findStarship()}
        onSubmit={handleEditStarship}
        columns={columns}
      />
    </div>
  );
};

export default EditStarshipsPage;
