import React from "react";
const Img =(props)=>{
    const pic= `https://source.unsplash.com/300x370/?${props.name}`;
    return(
        <img src={pic} rel="iamges"/>
    )
};
export default Img;