import React from 'react'
import { useForm } from "react-hook-form";
import './StudentsForm.css'

export default function StudentsForm() {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h1>Student Form</h1>
            <div>
                <form class="cf" onSubmit={handleSubmit(onSubmit)}>
                    <div class="half left cf">
                        <div className="form-control">
                            <input type="text" id="name" placeholder="Name" ref={register('name',{ required: true })} />
                        </div>

                        <div className="form-control">
                            <input type="text" id="email" placeholder="Email address" name="email" ref={register('email',{
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                            })} />
                            {errors.email && errors.email.type === "required" && (
                                <p className="errorMsg">Email is required.</p>
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                                <p className="errorMsg">Email is not valid.</p>
                            )}

                        </div>

                        <div className="form-control">
                            <input type="text" id="UG" placeholder="UG" ref={register('UG', { required: true, minLength: 2 })} />
                            {errors.UG && errors.UG.type === "required" && (
                                <p className="errorMsg">UG Degree is required.</p>
                            )}
                            {errors.UG && errors.UG.type === "minLength" && (
                                <p className="errorMsg">
                                    UG should be at-least 2 characters.
                                </p>
                            )}
                        </div>

                        <div className="form-control">
                            <input type="text" id="PG" placeholder="PG" ref={register('PG',{ required: true, minLength: 2 })} />
                            {errors.PG && errors.PG.type === "required" && (
                                <p className="errorMsg">PG Degree is required.</p>
                            )}
                            {errors.PG && errors.PG.type === "minLength" && (
                                <p className="errorMsg">
                                    PG should be at-least 2 characters.
                                </p>
                            )}
                        </div>

                    </div>
                    <div class="half right cf">
                        <div className="form-control">
                            <input type="text" id="roll" placeholder="Roll Number" ref={register('roll', { required: true })} />
                        </div>

                        <div className="form-control">
                            <input type="number" id="phone" placeholder="Mobile" ref={register('phone', { required: true, minLength: 10 })} />
                            {errors.phone && errors.phone.type === "required" && (
                                <p className="errorMsg">Phone Number required.</p>
                            )}
                            {errors.phone && errors.phone.type === "minLength" && (
                                <p className="errorMsg">
                                    PG should be at-least 10 digits.
                                </p>
                            )}
                        </div>

                        <div className="form-control">
                            <input type="text" id="MarkUG" placeholder="Mark" ref={register('MarkUG', { required: true })} />
                            {errors.MarkUG && errors.MarkUG.type === "required" && (
                                <p className="errorMsg">UG Mark required.</p>
                            )}
                        </div>

                        <div className="form-control">
                            <input type="text" id="MarkPG" placeholder="Mark"  ref={register('MarkPG', { required: true })} />
                            {errors.MarkPG && errors.MarkPG.type === "required" && (
                                <p className="errorMsg">PG Mark required.</p>
                            )}
                        </div>

                    </div>
                    <textarea type="text" id="input-message" placeholder="Address" ref={register('address', { required: true })} />
                    <input type="submit" value="Submit" id="input-submit" />
                </form>
            </div>
        </div>
    )
}
