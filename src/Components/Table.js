import React from "react";
import "Styles/Desktop/Table.css";
export function Table({ rows, deleteRow, editRow, headers }) {
  return (
    <React.Fragment>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            {/* <tr
              style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
            >
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))} */}
            {/* </tr> */}
            <tr
              style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
            >
              {headers.map((key) => (
                <th key={key}>{key}</th>
              ))}
              {headers ? null : <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {/* {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return (
                <tr
                  key={idx}
                  style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
                >
                  <td>{row.fname}</td>
                  <td>{row.email}</td>
                  <td>
                    <span className={`label label-${row.status}`}>
                      {statusText}
                    </span>
                  </td>
                  <td className="fit">
                    <span className="actions">
                      <button
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                      <button className="edit-btn" onClick={() => editRow(idx)}>
                        <ion-icon name="create-outline"></ion-icon>
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })} */}
            {rows.map((element, index) => (
              <tr
                key={index}
                style={{
                  gridTemplateColumns: `repeat(${element.length}, 1fr)`,
                }}
              >
                {headers.map((key) => (
                  <td key={key}>
                    {key === "Price"
                      ? `${element[key]}$`
                      : element[key] === null
                      ? "null"
                      : element[key]}
                  </td>
                ))}
                <td id="products-action-Table">
                  <button>Update</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
