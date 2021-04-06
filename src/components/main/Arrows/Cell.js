import React from 'react';

export const Cell = (props) =>{
    return(
        <div className="cell" id={props.custom}>
            {props.value}
        </div>
    )
}