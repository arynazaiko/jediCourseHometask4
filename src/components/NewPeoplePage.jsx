import React from "react";
import { useHistory } from "react-router-dom";

import Form from "./common/Form";
import { peopleColumns as columns } from "./data";

const NewPeoplePage = ({ people, setPeople }) => {
  const history = useHistory();

  const handleAddPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
    history.push("people");
  };

  return (
    <div className="container">
      <Form onSubmit={handleAddPerson} columns={columns} />
    </div>
  );
};

export default NewPeoplePage;
