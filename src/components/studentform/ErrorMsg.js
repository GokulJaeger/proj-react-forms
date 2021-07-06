import React from 'react';
import './ErrorMsg.css';

export default function ErrorMsg({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}
