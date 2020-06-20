import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Table from "./common/Table";
import Button from "./common/Button";

import { peopleColumns as columns } from "./data.js";

const PeoplePage = ({ people, setPeople }) => {
  const history = useHistory();

  const deletePerson = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      })
    );
  };

  return (
    <div className="container">
      {people.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">People</h3>
          <Table
            columns={columns}
            data={people}
            tableDescriptor="People"
            onDelete={deletePerson}
          />
          <Button
            label="Add person"
            classes="btn btn-success"
            onClick={() => {
              history.push("/people/new");
            }}
          />
        </Fragment>
      )}
    </div>
  );
};

export default PeoplePage;
