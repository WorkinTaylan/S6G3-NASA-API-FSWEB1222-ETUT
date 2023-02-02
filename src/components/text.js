import React from "react";

const Text= (props)=>{

    const {copyright, date, explanation}=props.data;

    return (
    <section>
        <h2>{copyright}</h2>
        <h3>{date}</h3>
        <p>{explanation}</p>
    </section>
    )
}

export default Text;