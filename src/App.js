import React, { useState } from "react";
import Img from "./Img";
import './App.css';

const App=()=>{
const [img, setImg]= useState('');
const inputRe=(event)=>{
const data=event.target.value;
console.log(data);
setImg(data);
 }
return(
<><div className="head">
         <input type="text"
          placeholder="search pics"
          value={img}
           onChange={inputRe} />  
           
        </div>
     <div className="item"> <Img  name={img}/></div>
        </>
         )
}
export default App;
