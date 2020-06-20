import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";

const Form = ({ initialData = {}, onSubmit, columns }) => {
  const [data, setData] = useState(initialData);

  const handleClick = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    setData({ ...data, [input.name]: input.value });
  };

  return (
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
  );
};

export default Form;
