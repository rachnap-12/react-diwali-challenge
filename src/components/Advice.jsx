import React from 'react'
import "./Advice.scss"

const Advice = (props) => {
    const { data } = props;
    return (
        <div>
            <h1>Best Advices of the Millenium!!!!</h1>
            <p>{data.advice}</p>
        </div>
           
    )
}

export default Advice
