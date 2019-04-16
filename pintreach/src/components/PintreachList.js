import React from "react";
import PintreachForm from "./PintreachFrom"
function PintreachList(props) {
  return (
    <ul>
      {props.pintreach.map(pin => <PintreachForm key= {pin.id} pin={pin}/>
      
      
      )}

    </ul>
  );
}

export default PintreachList;