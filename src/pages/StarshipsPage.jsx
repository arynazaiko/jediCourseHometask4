import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { starshipsColumns as columns } from "../components/data.js";

const StarshipsPage = ({ starships, setStarships }) => {
  const history = useHistory();

  const deleteStarship = (id) => {
    setStarships(
      starships.filter((starship) => {
        return starship.id !== id;
      })
    );
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
            columns={columns}
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
