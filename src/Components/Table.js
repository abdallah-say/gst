import React from "react";
import "Styles/Desktop/Table.css";
export function Table({ rows, deleteRow, editRow, headers }) {
  return (
    <React.Fragment>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr
              style={{ gridTemplateColumns: `repeat(${headers.length},1fr)` }}
            >
              {headers.map((key) => (
                <th key={key}>{key}</th>
              ))}
              {headers ? null : <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((product, index) => (
              <tr
                key={index}
                style={{ gridTemplateColumns: `repeat(${headers.length},1fr)` }}
              >
                {headers.map((key) => (
                  <td key={key}>
                    {key === "Price"
                      ? `${product[key]}$`
                      : product[key] === null
                      ? "null"
                      : product[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
