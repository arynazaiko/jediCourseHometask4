import React, { useState, Fragment } from "react";

import Table from "./common/Table";
import Form from "./common/Form";

const data = [
  { first: "Mark", last: "Otto", handle: "@motto", id: "1" },
  { first: "Carl", last: "Reno", handle: "@ceno", id: "2" },
  { first: "Steve", last: "Smith", handle: "@ssteve", id: "3" },
];

const columns = Object.keys(data[0]);

const PeoplePage = () => {
  const [people, setPeople] = useState(data);

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
