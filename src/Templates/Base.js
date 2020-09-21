import React from 'react'

const Base = ({
    title = "Default-Head"
}) => {

    return (
        <div>
            <h1> {title}</h1>
        </div>
    )
}

export default Base
