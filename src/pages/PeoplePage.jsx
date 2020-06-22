import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { getPeople } from "../services/swApiService";

const PeoplePage = ({ people, setPeople }) => {
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople();
      setPeople(data);
    };
    getData();
  }, []);

  const deletePerson = (id) => {
    const person = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(person);
    localStorage.setItem("people", JSON.stringify(person));
  };

  const getColumnNames = () => {
    if (!people.length) {
      return [];
    }

    return Object.keys(people[0]);
  };

  return (
    <div className="container">
      <Button
        label="Add person"
        classes="btn btn-success"
        onClick={() => {
          history.push("/people/new");
        }}
      />
      {people.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">People</h3>
          <Table
            columns={getColumnNames()}
            data={people}
            tableDescriptor="People"
            onDelete={deletePerson}
          />
        </Fragment>
      )}
    </div>
  );
};

export default PeoplePage;
