import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/common/Form";

import shema from "../services/peopleValidationRules";
import { createPerson } from "../store/actions/people";
import { getAllPeople } from "../store/selectors/people";

const NewPeoplePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const people = useSelector((state) => getAllPeople(state));

  const handleAddPerson = (personData) => {
    const id = +localStorage.getItem("currentId");
    localStorage.setItem("currentId", id + 1);

    personData.id = id;
    const updatedPeople = [...people, personData];

    dispatch(createPerson(personData));

    localStorage.setItem("people", JSON.stringify(updatedPeople));
    history.push("/people");
  };

  const getColumnNames = () => {
    if (!people.length) {
      return [];
    }

    return Object.keys(people[0]);
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleAddPerson}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default NewPeoplePage;
