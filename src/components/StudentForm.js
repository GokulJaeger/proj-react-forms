import React, { useState } from 'react'
import './StudentForm.css';

function StudentForm() {

    const initVal = {
        name: '',
        email: '',
        roll: '',
        phone: '',
        dept:-1,
        date: new Date()

    }
    const dept=[
        {id:1, name:"MCA"},
        {id:2, name:"BCA"},
        {id:3, name:"MCOM"},
        {id:4, name:"BCOM"}
    ];

    const [formValues, setFormValues] = useState(initVal);
    const [formError, setFormError] = useState({});

    const handleSubmission = (e) => {
        e.preventDefalt();
        setFormError(validate(formValues));
        console.log("Submit Action !...");
    }

    const handleChanges = (event) => {

        const { name, value } = event.target;
        setFormValues((prev) => {

            return {
                ...prev,
                [name]: value
            }
        });
    }

    const validate = (values) => {
        let errors = {};

        if (!values.email ) {
            errors.email = "Email cannot be Empyt";
        }
        //else if (values.name === "") {
        //     errors.name = "Name cannot be empty";
        // } else if (values.phone === "") {
        //     errors.phone = "Phone cannot be empty";
        // } else if (values.deptt === "") {
        //     errors.dept = "Department cannot be empty";
        // } else if (values.date === "") {
        //     errors.date = "date cannot be empty";
        // } else if (values.roll === "") {
        //     errors.roll = "Roll cannot be empty";
        // }else{
        //     alert("Invalid Entery");
        // }

        return errors;
    }
    console.log(formValues);

    return (
        <div className="container">
            <form onSubmit={handleSubmission} noValidate>
                <h1 className="txt"><b>STUDENT FORM</b></h1>
                <div className="field" tabIndex="1">
                    <label>
                        <i className="far fa-user"></i>Name
                    </label>
                    <input value={formValues.name} type="text" name="name" id="name" onChange={handleChanges} />
                    {/* {formError.name && <span>{formError.name}</span>} */}
                </div>

                <div className="field" tabIndex="2">
                    <label htmlFor="roll">
                        <i className="far fa-envelope"></i>Roll Number
                    </label>
                    <input value={formValues.roll} type="text" name="roll" id="roll" onChange={handleChanges} />
                    {/* {formError.roll && <span>{formError.roll}</span>} */}
                </div>

                <div className="field" tabIndex="3">
                    <label htmlFor="dept">
                        <i className="far fa-envelope"></i>Department
                    </label>
                    <select name="deptt"onChange={handleChanges}
                        value={formValues.deptt}>
                        <option value="-1" >Select Department</option>
                        {
                            deptt.map(x=>{
                                return <option value={x.id}>{x.name}</option>
                            })
                        }
                    </select>
                    {/* {formError.dept && <span>{formError.dept}</span>} */}
                </div>

                <div className="field" tabIndex="4">
                    <label htmlFor="date">
                        <i className="far fa-envelope"></i>Date of Birth
                    </label>
                    <input value={formValues.date} type="date" name="date" id="date" onChange={handleChanges} />
                    {/* {formError.date && <span>{formError.date}</span>} */}
                </div>

                <div className="field" tabIndex="5">
                    <label htmlFor="email">
                        <i className="far fa-envelope"></i>Your Email
                    </label>
                    <input value={formValues.email} type="email" name="email" id="email" onChange={handleChanges} />
                    {formError.email && <span>{formError.email}</span>}
                </div>

                <div className="field" tabIndex="6">
                    <label htmlFor="phone">
                        <i className="far fa-envelope"></i>Phone
                    </label>
                    <input value={formValues.phoe} type="phone" name="phone" id="phone" onChange={handleChanges} />
                    {/* {formError.phone && <span>{formError.phone}</span>} */}
                </div>
                <div className="form-input-material">
                    <button className="btn btn-primary btn-ghost" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default StudentForm;