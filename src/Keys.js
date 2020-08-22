import React from 'react';

const Keys = (props) =>{
    return(
        <div>
            <div className={`white-keys ${props.playing === props.note.name && 'grey'}`} 
                onClick={()=> props.handleClick(props.note)}>
                {props.note.tieneSostenido ? <div className="black-keys"></div> : ""}
            </div>
        </div>
    )
}

export default Keys;