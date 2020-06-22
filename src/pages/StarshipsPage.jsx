import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { getStarships } from "../services/swApiService";

const StarshipsPage = ({ starships, setStarships }) => {
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const data = await getStarships();
      setStarships(data);
    };
    getData();
  }, []);

  const deleteStarship = (id) => {
    const starship = starships.filter((starship) => {
      return starship.id !== id;
    });
    setStarships(starship);
    localStorage.setItem("starships", JSON.stringify(starship));
  };

  const getColumnNames = () => {
    if (!starships.length) {
      return [];
    }

    return Object.keys(starships[0]);
  };

  return (
    <div className="container">
      <Button
        label="Add starship"
        classes="btn btn-success"
        onClick={() => {
          history.push("/starships/new");
        }}
      />
      {starships.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">Starships</h3>
          <Table
            columns={getColumnNames()}
            data={starships}
            tableDescriptor="Starships"
            onDelete={deleteStarship}
          />
        </Fragment>
      )}
    </div>
  );
};

export default StarshipsPage;
