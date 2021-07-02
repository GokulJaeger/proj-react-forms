import React from 'react'
import './StudentsForm.css'

export default function StudentsForm() {
    return (
        <div>
            <h1>Student Form</h1>
            <div>
                <form class="cf">
                    <div class="half left cf">
                        <input type="text" id="input-name" placeholder="Name"/>
                        <input type="email" id="input-email" placeholder="Email address"/>
                        <input type="text" id="input-UG" placeholder="UG"/>
                    </div>
                    <div class="half right cf">
                        <input type="text" id="input-phone" placeholder="Roll Number"/>
                        <input type="number" id="input-phone" placeholder="Mobile"/>
                        <input type="text" id="input-UG" placeholder="UG"/>
                        {/* <textarea name="message" type="text" id="input-message" placeholder="Message"/> */}
                    </div>
                    <input type="submit" value="Submit" id="input-submit"/>
                </form>
            </div>
        </div>
    )
}
