import React from "react";

const Search= (props)=>{
    const {tarih, changeHandler}=props;

    return (
    <div>
        <input value={tarih} onChange={(event)=>changeHandler(event.target.value)} name="date" type="date" />
    </div>
    )
}

export default Search;