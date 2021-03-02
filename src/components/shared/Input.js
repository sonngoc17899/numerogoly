import React from 'react'
export const Input = (props) =>{
  return(
    <div className="input">
    <input
      value={props.value}
      type={props.type}
      onKeyDown={props.enter}
      onChange={props.Change}
      style={{width: "100%"}}
      placeholder={props.place}
    />
    </div>
  )
}