import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { getPeople } from "../services/swApiService";
import {
  setPeople,
  deletePerson,
  changeBelovedStatus,
} from "../store/actions/people";
import { getAllPeople } from "../store/selectors/people";

const PeoplePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const people = useSelector((state) => getAllPeople(state));

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople();
      dispatch(setPeople(data));
    };
    getData();
  }, []);

  const handleDeletePerson = (id) => {
    const filteredPeople = people.filter((person) => {
      return person.id !== id;
    });

    dispatch(deletePerson(id));
    localStorage.setItem("people", JSON.stringify(filteredPeople));
  };

  const handleBelovedStatus = (id) => {
    const data = people.map((person) => {
      return person.id === +id
        ? { ...person, beloved: !person.beloved }
        : person;
    });

    dispatch(changeBelovedStatus(id));
    localStorage.setItem("people", JSON.stringify(data));
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
        label="Create person"
        classes="btn btn-warning text-white"
        onClick={() => {
          history.push("/people/new");
        }}
      />
      {people.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">People from Star Wars Universe</h3>
          <Table
            columns={getColumnNames()}
            data={people}
            tableDescriptor="People"
            onDelete={handleDeletePerson}
            belovedStatus={handleBelovedStatus}
          />
        </Fragment>
      )}
    </div>
  );
};

export default PeoplePage;
