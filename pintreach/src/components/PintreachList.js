import React from "react";

function PintreachList(props) {
  return (
    <ul>
      {props.pintreach.map(pin => <pintreach key= {pin.id} pin={pin}/>
      
      
      )}

    </ul>
  );
}

export default PintreachList;