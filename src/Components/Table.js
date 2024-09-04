import React from 'react'
import "Styles/Desktop/Table.css"
export function Table({ rows, deleteRow, editRow }) {
    return (
        <React.Fragment>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => {
                            const statusText =
                                row.status.charAt(0).toUpperCase() + row.status.slice(1);

                            return (
                                <tr key={idx}>
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
                                            ><ion-icon name="trash-outline"></ion-icon></button>
                                            <button
                                                className="edit-btn"
                                                onClick={() => editRow(idx)}    
                                            ><ion-icon name="create-outline"></ion-icon></button>
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

