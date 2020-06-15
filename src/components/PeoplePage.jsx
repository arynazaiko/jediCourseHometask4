import React, { Fragment } from "react";

import Table from "./common/Table";
import Form from "./common/Form";

import { peopleColumns as columns } from "./data.js";

const PeoplePage = ({ people, setPeople }) => {
  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

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
        </Fragment>
      )}
      <Form
        initialData={getInitialPeopleData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  );
};

export default PeoplePage;
