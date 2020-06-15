import React from "react";

import Button from "./Button";

const Table = ({ columns, data, tableDescriptor, onDelete }) => {
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
            <tr key={index}>
              <th scope="row">{++index}</th>
              {columns.map((columnTitle, index) => (
                <td key={index}>{item[columnTitle]}</td>
              ))}
              <td className="text-center">
                <Button
                  label="Delete"
                  classes="btn btn-danger"
                  onClick={() => onDelete(item.id)}
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
