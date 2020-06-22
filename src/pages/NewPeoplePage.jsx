import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/common/Form";

import shema from "../services/peopleValidationRules";

const NewPeoplePage = ({ people, setPeople }) => {
  const history = useHistory();

  const handleAddPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
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
        onSubmit={handleAddPerson}
        columns={getColumnNames()}
        validationSchema={shema}
      />
    </div>
  );
};

export default NewPeoplePage;
