import React from "react";
import Pintreach from "./Pin";
function PintreachList(props) {
  return (
    <ul>
      {props.pintreach.map(pin => <Pintreach key= {pin.id} pin={pin} togglePintreach={props.togglePintreach}/>
      
      
      )}

    </ul>
  );
}

export default PintreachList;