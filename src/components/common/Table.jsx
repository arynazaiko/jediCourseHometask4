import React from "react";
import { useHistory } from "react-router-dom";

import Button from "./Button";

const Table = ({ columns, data, tableDescriptor, onDelete }) => {
  let history = useHistory();

  const handleClick = (id) => {
    const routeName = tableDescriptor.toLowerCase();
    history.push(`/${routeName}/${id}/edit`);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">{tableDescriptor}</th>
            {columns.map((columnTitle, index) => (
              <th scope="col" key={index}>
                {columnTitle}
              </th>
            ))}
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <th scope="row">{++index}</th>
              {columns.map((columnTitle, index) => (
                <td key={index}>{item[columnTitle]}</td>
              ))}
              <td className="text-center">
                <Button
                  label="Delete"
                  classes="btn btn-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    return onDelete(item.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
