import React from 'react'
import "./Advice.scss"

const Advice = (props) => {
    const { data } = props;
    return (
        <div>
            <h1>Best Advices of the Millenium!!!!</h1>
            {/* <p>ID : {data.id}</p> */}
            <p>{data.advice}</p>
            {/* <button>Click to Get Advice</button> */}
        </div>
           
    )
}

export default Advice
