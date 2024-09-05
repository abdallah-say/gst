import React, { useCallback, useEffect, useRef } from "react";
import "Styles/Desktop/Staff.css";
import { useState } from "react";
import { Table } from "Components/Table";
import AddStaff from "Utilities/postStaff";
import fetchStaff from "Utilities/fetchStaff";

export default function Staff() {
  const [data, setData] = useState({
    Name: "",
    email: "",
    password: "",
    admin: false,
  });

  const [rows, setRows] = useState([]);
  const rowsKeys = rows.length > 0 ? Object.keys(rows[0]) : [];
  const TableConfig = ["Name", "Email", "Status", "Action"];

  const stopRender = useRef(true);

  const fetchStaffList = useCallback(
    async (e) => {
      e.preventDefault();
      const config = ["Name", "Email", "Status"];
      await fetchStaff(setRows, config);
    },
    [setRows]
  );

  useEffect(() => {
    if (stopRender.current === true) {
      fetchStaffList();
      stopRender.current = false;
    }
  }, [fetchStaffList]);

  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDelete = () => {};
  const handleEdit = (index) => {
    setRowToEdit(data.at(index));

    prompt(`Current Password: ${rowToEdit.pass}. New Password:`);
  };

  const handleDataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStaff = async (e) => {
    e.preventDefault(e);
    await AddStaff(data);
  };

  return (
    <React.Fragment>
      <div className="staff-container">
        <div className="form-box">
          <form className="form" onSubmit={handleAddStaff}>
            <span className="title">Welcome to Staff</span>
            <div className="form-container">
              <input
                name="Name"
                type="text"
                className="input"
                placeholder="Full Name"
                onChange={handleDataChange}
              />
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                onChange={handleDataChange}
              />
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                onChange={handleDataChange}
              />
            </div>
            <button type="submit">Add Staff</button>
          </form>
        </div>
        <Table
          rows={rows}
          deleteRow={handleDelete}
          editRow={handleEdit}
          headers={TableConfig}
        />
      </div>
    </React.Fragment>
  );
}
