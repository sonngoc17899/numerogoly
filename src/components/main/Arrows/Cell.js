import React from 'react';

export const Cell = (props) =>{
    return(
        <div className="cell" id={props.custom}>
            <div className="block">
            <div>
                {props.arrow}
            </div>
            <div className={props.border}>
            {props.value}
            </div>
            </div>
        </div>
    )
}