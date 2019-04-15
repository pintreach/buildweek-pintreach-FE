import React from 'react';


const Pin = props => {

    return (
    <div className={props.pin.completed ? "task" : ""}
    onClick={() => props.togglePintreach(props.pin.id)}
  >
        
        <li>{props.pin.task}</li>
    
    </div>
    );
}

export default Pin;