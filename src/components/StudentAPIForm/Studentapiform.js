import React, { useState, useEffect } from 'react'

export default function Studentapiform() {


    const [studentd, setStudentd] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/student").then((result) => {
            result.json().then((resp) => {
                // console.warn(resp);
                setStudentd(resp);
            })
        })
    }, [])
    console.warn(studentd);

    return (
        <div>
            <h2>The Student Api Call</h2>
            <table border="2">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Roll Number</td>
                        <td>Department</td>
                        <td>Phone</td>
                    </tr>
                    {
                        studentd.map((items) => {
                            return (
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.roll}</td>
                                    <td>{items.dept}</td>
                                    <td>{items.phone}</td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
