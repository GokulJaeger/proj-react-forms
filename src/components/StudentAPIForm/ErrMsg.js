import React from 'react';
import './ErrMsg.css';

export default function ErrMsg({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}