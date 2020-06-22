import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";

const Form = ({ initialData = {}, onSubmit, columns, validationSchema }) => {
  const [data, setData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();

    if (validateData()) {
      onSubmit(data);
    }
  };

  const validateData = () => {
    if (!validationSchema) {
      return true;
    }

    const { error } = validationSchema.validate(data);

    if (error) {
      setErrorMessage(error.message);
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    setData({ ...data, [input.name]: input.value });
  };

  return (
    <div>
      {errorMessage ? (
        <div className="alert alert-danger">{errorMessage}</div>
      ) : null}
      <form className="mb-3">
        {columns.map((columnName) => (
          <Input
            key={columnName}
            name={columnName}
            label={columnName}
            value={data[columnName] || ""}
            type="input"
            onChange={handleChange}
          />
        ))}
        <Button label="Save" classes="btn btn-primary" onClick={handleClick} />
      </form>
    </div>
  );
};

export default Form;
