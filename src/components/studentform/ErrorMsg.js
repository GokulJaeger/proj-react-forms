import React from 'react'

export default function ErrorMsg({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}
