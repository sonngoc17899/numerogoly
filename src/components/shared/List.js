import React from 'react';
import {Link} from 'react-router-dom'
export const List = (props) =>{
    return(
        <div className={props.custom} id={props.customLink}> 
        <Link to={props.href}>{props.content}</Link>
        </div>
    )
}