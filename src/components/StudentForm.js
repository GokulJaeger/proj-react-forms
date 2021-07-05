import React, { useState } from 'react'
import './StudentForm.css';
import ErrorMsg from './ErrorMsg';

function StudentForm() {

    const initVal = {
        name: '',
        email: '',
        roll: '',
        phone: '',
        deptt: -1,
        date: new Date()

    }
    const deptt = [
        { id: 1, name: "MCA" },
        { id: 2, name: "BCA" },
        { id: 3, name: "MCOM" },
        { id: 4, name: "BCOM" }
    ];

    const [formValues, setFormValues] = useState(initVal);
    const [formError, setFormError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleSubmission = (e) => {
        e.preventDefalt();
        setFormError(validate(formValues));
        console.log("===" + Object.entries(formError).length);
        setSubmitted(true);
        console.log("Submit Action !...");
    }

    const handleChanges = (event) => {
        const isInternalExternal = event.target.type === "checkbox";

        const { name, value } = event.target;
        setFormValues((prev) => {

            return {
                ...prev,
                // [name]: value
                [name]: isInternalExternal ? event.target.checked : value,
           
            }
        });
    }

    const validate = (values) => {
        let errors = {};
        console.log(values);

        if (!values.name) {
            errors.name = "Name cannot be Empyt";
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.roll) {
            errors.roll = "Roll Number cannot be Empyt";
        }
        if (!values.phone) {
            errors.phone = "Phone cannot be Empyt";
        }
        if (!values.date) {
            errors.date = "Email cannot be Empyt";
        }
        if (values.deptt< 0) {
            errors.deptt = "Please Select a department";
        }

        return errors;
    };
    console.log(formValues);

    return (
        <div className="container">
            {Object.entries(formError).length === 0 && submitted && (
                <div> Submitted Sucessfully </div>
                           )}
            <form onSubmit={handleSubmission} noValidate>
                <h1 className="txt">STUDENT FORM</h1>
                <div className="field" tabIndex="1">
                    <label>
                        <i className="far fa-user"></i>Name
                    </label>
                    <input value={formValues.name} type="text" name="name" id="name" onChange={handleChanges} />
                    
                </div>
<div><ErrorMsg msg={formError.name}/></div>
                <div className="field" tabIndex="2">
                    <label htmlFor="roll">
                        <i className="far fa-envelope"></i>Roll Number
                    </label>
                    <input value={formValues.roll} type="text" name="roll" id="roll" onChange={handleChanges} />
                    <ErrorMsg msg={formError.roll}/>
                </div>

                <div className="field" tabIndex="3">
                    <label htmlFor="dept">
                        <i className="far fa-envelope"></i>Department
                    </label>
                    <select name="deptt" onChange={handleChanges} value={formValues.deptt}>
                        <option value="-1" >Select Department</option>
                        {
                            deptt.map((x) => {
                                return <option key={x.id} value={x.id}>{x.name}</option>;
                            })
                        }
                    </select>
                    <ErrorMsg msg={formError.deptt}/>
                </div>

                <div className="field" tabIndex="4">
                    <label htmlFor="date">
                        <i className="far fa-envelope"></i>Date of Birth
                    </label>
                    <input value={formValues.date} type="date" name="date" id="date" onChange={handleChanges} />
                    <ErrorMsg msg={formError.date}/>
                </div>

                <div className="field" tabIndex="5">
                    <label htmlFor="email">
                        <i className="far fa-envelope"></i>Your Email
                    </label>
                    <input value={formValues.email} type="email" name="email" id="email" onChange={handleChanges} />
                    <ErrorMsg msg={formError.email}/>
                </div>

                <div className="field" tabIndex="6">
                    <label htmlFor="phone">
                        <i className="far fa-envelope"></i>Phone
                    </label>
                    <input value={formValues.phone} type="phone" name="phone" id="phone" onChange={handleChanges} />
                    <ErrorMsg msg={formError.phone}/>
                </div>
                <div className="form-input-material">
                    <button className="btn btn-primary btn-ghost" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default StudentForm;