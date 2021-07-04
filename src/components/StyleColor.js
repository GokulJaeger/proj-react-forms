import React from 'react'
import'./StyleColor.css';

const StyleColor = ({ data, ts, ln, }) => {

    console.log(data);
    console.log(ts);
    console.log(ln);
    return (
        <div className="rainbow">
            <div>
                <h1>Label Component</h1>
                {data.map((x)=>{
                    return(
                        <div>
                            <h3>{x.fname}   {x.lname}</h3>
                        </div>
                    );
                })}
                <h5>Date: {ts}</h5>
            </div>
            <h8>{ln}</h8>
        </div>
    );
};
export default StyleColor;

