import React, { useState } from "react";
import "./StdRegistration.css";
import ErrMsg from "./ErrMsg";
import swal from 'sweetalert';

function StdRegistration(props) {
    const initVal = {
        name: "",
        email: "",
        roll: "",
        phone: "",
        deptt: "",
        date: new Date().toISOString,
    };
    const deptt = [
        { id: 1, name: "MCA" },
        { id: 2, name: "BCA" },
        { id: 3, name: "MCOM" },
        { id: 4, name: "BCOM" },
    ];

    // {id:1, key:2345, reason:"Death"}
    // {id:2, reason:"Medical"}
    // {id:3, reason:"Office"}
    // {id:4, reason:"Wedding"}

    const [formValues, setFormValues] = useState(initVal);
    const [formError, setFormError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    //   const [postdata, setPostData] = useState();
    // const [res, setRes] = useState(0);
    // const [alertt, setAlertt] = useState(false);

    const handleSubmission = (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        console.log("Form length ===" + Object.entries(formValues).length);
        setSubmitted(true);
        console.log("Submitted Form!.....");

        // if(submitted){
        //     console.warn("if Working");
        // }
        // setPostData(formValues);
        // saveDate(postdata);

        fetch("http://localhost:4000/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                return response;

            } else {
                console.log('Somthing happened wrong');
            }
        }).catch(err => err);
        swal("Form Submitted!.", "Success");
    };


    //   function saveDate(items){

    //     console.log("datas",items);
    //     let datass = items;

    //       fetch("http://localhost:4000/student",{
    //           method:"POST",
    //           headers:{
    //               'Accept':'appication/json',
    //               'Content-Type':'appication/json',
    //           },
    //           body:JSON.stringify(datass)
    //       }).then(response => {
    //         if (response.status >= 200 && response.status < 300) {
    //             return response;

    //           } else {
    //            console.log('Somthing happened wrong');
    //           }
    //     }).catch(err => err);
    //   }

    const handleChanges = (event) => {
        const isInternalExternal = event.target.type === "checkbox";
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setFormValues((prev) => {
            return {
                ...prev,
                // [name]: value
                [name]: isInternalExternal ? event.target.checked : value,
            };
        });
    };

    const validate = (values) => {
        let errors = {};
        // console.log(values);
        if (!values.name) {
            errors.name = "Name cannot be Empyt";
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email cannot be blank";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }
        if (!values.roll) {
            errors.roll = "Roll Number cannot be Empyt";
        }
        const phoneRegExp =
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

        if (!values.phone) {
            errors.phone = "Phone number cannot be empty";
        }
        if (!phoneRegExp.test(values.phone)) {
            errors.phone = "Please enter only number.";
        }
        if (!values.date) {
            errors.date = "Date cannot be Empyt";
        }
        if (values.deptt < 0) {
            errors.deptt = "Please Select a department";
        }

        return errors;
    };

    //   console.log(formValues);

    return (
        <div className="container">
            <form onSubmit={handleSubmission} noValidate>
                <h1 className="txt">STUDENT FORM</h1>
                <div className="field" tabIndex="1">
                    <label>
                        <i className="far fa-user"></i>Name
                    </label>
                    <input
                        value={formValues.name}
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <ErrMsg msg={formError.name} />
                </div>
                <div className="field" tabIndex="2">
                    <label htmlFor="roll">
                        <i className="far fa-envelope"></i>Roll Number
                    </label>
                    <input
                        value={formValues.roll}
                        type="text"
                        name="roll"
                        id="roll"
                        onChange={handleChanges}
                    />
                    <ErrMsg msg={formError.roll} />
                </div>

                <div className="field" tabIndex="3">
                    <label htmlFor="dept">
                        <i className="far fa-envelope"></i>Department
                    </label>
                    <select
                        name="deptt"
                        onChange={handleChanges}
                        value={formValues.deptt}
                    >
                        <option value="Select">Select Department</option>
                        {deptt.map((x) => {
                            return (
                                <option key={x.id} value={x.name}>
                                    {x.name}
                                </option>
                            );
                        })}
                    </select>
                    <ErrMsg msg={formError.deptt} />
                </div>

                <div className="field" tabIndex="4">
                    <label htmlFor="date">
                        <i className="far fa-envelope"></i>Date of Birth
                    </label>
                    <input
                        value={formValues.date}
                        type="date"
                        name="date"
                        id="date"
                        onChange={handleChanges}
                    />
                    <ErrMsg msg={formError.date} />
                </div>

                <div className="field" tabIndex="5">
                    <label htmlFor="email">
                        <i className="far fa-envelope"></i>Your Email
                    </label>
                    <input
                        value={formValues.email}
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChanges}
                    />
                    <ErrMsg msg={formError.email} />
                </div>

                <div className="field" tabIndex="6">
                    <label htmlFor="phone">
                        <i className="far fa-envelope"></i>Phone
                    </label>
                    <input
                        value={formValues.phone}
                        type="phone"
                        name="phone"
                        id="phone"
                        onChange={handleChanges}
                    />
                    <ErrMsg msg={formError.phone} />
                </div>

                <div className="form-input-material">
                    <button className="btn btn-primary btn-ghost" type="submit">
                        Submit
                    </button>
                </div>
                <div>
                    {Object.entries(formError).length === 0 && submitted && (
                        <div> Submitted Sucessfully
                            <p>Name: {formValues.name} Roll Number: {formValues.roll} </p>
                            <p>Department: {formValues.deptt}</p>
                            <p>Email: {formValues.email} Phone: {formValues.phone}</p>
                        </div>
                    )}
                    {/* {Object.entries(formError).length === 0 && submitted && alertt && (
              
          )} */}
                    {/* {res && submitted && <div>{res}</div>} */}
                </div>
            </form>
        </div>
    );
}

export default StdRegistration;
