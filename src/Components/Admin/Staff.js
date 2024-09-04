import React from 'react';
import "Styles/Desktop/Staff.css";
import { useState } from 'react';
import { Table } from 'Components/Table';

export default function Staff() {
    const [rows, setRows] = useState([
        {
            fname: 'Super Coordinator',
            email: 'Super@gastro-pos.com',
            pass: 'SuperPassword',
            status: 'Admin'
        },
        {
            fname: 'Grex',
            email: 'Grex@gastro-pos.com',
            pass: 'TheOssaLkbire',
            status: 'Admin'
        },
        {
            fname: 'flen',
            email: 'flen@gastro-pos.com',
            pass:'IamNothing',
            status: 'Staff'
        }
    ])
    const [rowToEdit, setRowToEdit] = useState(null);
    const handleDelete = ()=>{

    }
    const handleEdit = (index) => {
        setRowToEdit(rows.at(index));

        prompt(`Current Password: ${rowToEdit.pass}. New Password:`);
    }

    return (
        <React.Fragment>
            <div className='staff-container'>
                <div className="form-box">
                    <form className="form">
                        <span className="title">Welcome to Staff</span>
                        <div className="form-container">
                            <input type="text" className="input" placeholder="Full Name" />
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button>Add Staff</button>
                    </form>
                </div>
                <Table rows={rows} deleteRow={handleDelete} editRow={handleEdit}/>
            </div>
        </React.Fragment>
    )
}
