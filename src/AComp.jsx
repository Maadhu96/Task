import React, { useState } from "react";
import Bcomponent from "./BComp";

const Acomponent = () => {
  const [cendol, setCendol] = useState(2);
  return (
    <div style={{width:"400px", border:"1px solid",height:"400px",background:"lightgray",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Bcomponent value={cendol} />
    </div>
  );
};
export default Acomponent;
