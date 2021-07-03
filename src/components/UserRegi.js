import React, { useState,useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegi.css";

export default function UserRegi(props) {
  const initialValues = {
    email: "",
    city: -1,
    type:"",
    intext: false,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [cities,setCities] = useState([]);
  const [types,setTypes] = useState([]);
  const [res,setRes] = useState(0);

  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log(formValues);
    console.log("Submitted");


    console.log("===" + Object.entries(formErrors).length)

    setSubmitted(true);

    const reqOptios = {
      method:"POST",
      headers : {
        "Content-Type":"application/json"   
      },
      body: JSON.stringify(formValues)
    };

    fetch("http://localhost:3001/user",reqOptios).then(res => res.json()).then(data=>{
      console.log("saved");
      console.log(data.id);
      setRes(data.id);
    })

    props.onUserAdd(formValues);
  };

  const handleOnChange = (event) => {
    const isInternalExternal = event.target.type === "checkbox";

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? event.target.checked : value,
      };
    });

    console.log(formValues);
  };

  const validate = (values) => {
    let errors = {};
    console.log(values);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (values.city < 0) {
      errors.city = "Please Select a city";
    }

    if (values.intext === false) {
      errors.intext = "Please accept the flag";
    }

    return errors;
  };


  useEffect(()=>{
    console.log("Executed after render method=======");
    fetch("http://localhost:3001/cities").then(res => res.json()).then(data=>{
      console.log(data);
      setCities(data);
    }).catch(e=>{
      console.error("ERR in CITIES...");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })


    fetch("http://localhost:3001/types").then(res => res.json()).then(data=>{
      console.log(data);
      setTypes(data);
    }).catch(e=>{
      console.error("ERR in CITIES...");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })
    console.log("===============")
  },[])


  return (
    <div>
      {res && submitted && <div>{res}</div> }
      {(Object.entries(formErrors).length===0) && submitted && <div> Form Gets Submitted Sucessfully </div>}
      <form onSubmit={handleDoSubmit} noValidate>
        <div>
          <label>username</label>
          <input
            value={formValues.email}
            name="email"
            type="email"
            id="email"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.email} />
        </div>

        <div>
          <label>City</label>
          <select name="city" onChange={handleOnChange} value={formValues.city}>
            <option value="-1">Please select a city</option>
            {cities.map((x) => {
              return <option key={x.id} value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.city} />
          </div>
        </div>


        <div>
          <label>Type</label>
          <select name="type" onChange={handleOnChange} value={formValues.type}>
            <option value="-1">Please select a type</option>
            {types.map((x) => {
              return <option key={x.id} value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.type} />
          </div>
        </div>

        <div>
          <label>Internal or External</label>
          <input type="checkbox" name="intext" onChange={handleOnChange} />
          <div>
            <ErrorMessage message={formErrors.intext} />
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}