import React from "react";
import { useHistory } from "react-router-dom";

import Button from "./Button";

const Table = ({ columns, data, tableDescriptor, onDelete, belovedStatus }) => {
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
              key={item.id}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <th scope="row">{++index}</th>
              {columns.map((columnTitle) => {
                return (
                  <td key={columnTitle}>
                    {columnTitle === "beloved" ? (
                      <input
                        type="checkbox"
                        key={item.id}
                        checked={item.beloved}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        onChange={(e) => {
                          belovedStatus(item.id);
                        }}
                      />
                    ) : (
                      item[columnTitle]
                    )}
                  </td>
                );
              })}
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
