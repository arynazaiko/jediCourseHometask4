import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/common/Form";

import shema from "../services/peopleValidationRules";
import { editPerson } from "../store/actions/people";
import { getAllPeople } from "../store/selectors/people";

const EditPeoplePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const people = useSelector((state) => getAllPeople(state));
  let { id } = useParams();

  const findPerson = () => {
    return people.find((item) => {
      return item.id === +id;
    });
  };

  const handleEditPerson = (personData) => {
    let person = findPerson();

    person = { ...person, ...personData };
    const data = people.map((p) => (p.id === person.id ? person : p));

    dispatch(editPerson(personData));

    localStorage.setItem("people", JSON.stringify(data));
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
        initialData={findPerson()}
        onSubmit={handleEditPerson}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default EditPeoplePage;
