import React, { Fragment } from "react";

import Table from "../components/common/Table";
import Form from "../components/common/Form";

import { starshipsColumns as columns } from "../components/data.js";

const StarshipsPage = ({ starships, setStarships }) => {
  const handleAddStarships = (starship) => {
    const data = [...starships, starship];
    setStarships(data);
  };

  const getInitialStarshipssData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const deleteStarship = (id) => {
    console.log(starships);
    setStarships(
      starships.filter((starship) => {
        return starship.id !== id;
      })
    );
  };

  return (
    <div className="container">
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
      <Form
        initialData={getInitialStarshipssData()}
        columns={columns}
        onAddData={handleAddStarships}
      />
    </div>
  );
};

export default StarshipsPage;
