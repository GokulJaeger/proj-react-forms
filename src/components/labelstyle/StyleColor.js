import React from 'react'
import './StyleColor.css';

const StyleColor = () => {

    const dte = new Date();
    const td = dte.toISOString();
    const user = [
        { fname: "Gokul", lname: "Jaeger" }
    ];
    const ln = "From -App Component";
    
    return (
        <div className="rainbow">
            <div>
                <h1>Label Component</h1>
                {user.map((x) => {
                    return (
                        <div>
                            <h3>{x.fname}   {x.lname}</h3>
                        </div>
                    );
                })}
                <h5>Date: {td}</h5>
            </div>
            <h8>{ln}</h8>
        </div>
    );
};
export default StyleColor;

