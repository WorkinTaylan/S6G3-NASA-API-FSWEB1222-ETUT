import React from "react";

const Img= (a)=>{ //a=props yerine kullandık


    return (
    <main>
        <img src={a.url} alt={a.title} />
    </main>
    )
}

export default Img;