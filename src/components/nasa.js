import React from "react";
import Img from "./img";
import Text from "./text";

const Nasa= (props)=>{
    const {data}=props;

    return (
    <div>
        <Img url={data.url} title={data.title}/> {/* 25.01.2022 koşul operat type=img...*/}
        <Text data={data}/>
    </div>
    )
}


export default Nasa;