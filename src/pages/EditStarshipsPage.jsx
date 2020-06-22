import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Form from "../components/common/Form";

const EditStarshipsPage = ({ starships, setStarships }) => {
  const history = useHistory();
  let { id } = useParams();

  const findStarship = () => {
    return starships.find((starship) => {
      return starship.id === +id;
    });
  };

  const handleEditStarship = (starshipData) => {
    let starship = findStarship();

    starship = { ...starship, ...starshipData };

    const newStarship = starships.map((s) =>
      s.id === starship.id ? starship : s
    );

    setStarships(newStarship);

    localStorage.setItem("starships", JSON.stringify(newStarship));

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
      />
    </div>
  );
};

export default EditStarshipsPage;
