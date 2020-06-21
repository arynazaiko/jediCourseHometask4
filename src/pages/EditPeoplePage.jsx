import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Form from "../components/common/Form";

const EditPeoplePage = ({ people, setPeople }) => {
  const history = useHistory();
  let { id } = useParams();

  const findPerson = () => {
    return people.find((item) => {
      return item.id === +id;
    });
  };

  const handleEditPerson = (personData) => {
    let person = findPerson();

    person = { ...person, ...personData };

    const newPerson = people.map((p) => (p.id === person.id ? person : p));

    setPeople(newPerson);

    localStorage.setItem("people", JSON.stringify(newPerson));

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
      />
    </div>
  );
};

export default EditPeoplePage;
