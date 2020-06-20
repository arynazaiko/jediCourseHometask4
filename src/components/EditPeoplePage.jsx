import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Form from "./common/Form";

const EditPeoplePage = ({ people, setPeople }) => {
  const history = useHistory();
  let { id } = useParams();

  const findPerson = () => {
    return people.find((item) => {
      return item.id === id;
    });
  };

  const handleEditPerson = (personData) => {
    let person = findPerson();

    person = { ...person, ...personData };

    setPeople(people.map((p) => (p.id === person.id ? person : p)));
    history.push("people");
  };

  return (
    <div className="container">
      <Form data={findPerson()} onSubmit={handleEditPerson} />
    </div>
  );
};

export default EditPeoplePage;
