import React from "react";
import { Cell } from "./Cell";

export const Show = (props) => {
  return (
    <div className="arrows">
      <div className="row">
        <Cell value={props.number1}/>
        <Cell value={props.number2} />
        <Cell value={props.number3} custom="none-border"/>
      </div>
      <div className="row">
        <Cell value={props.number4} />
        <Cell value={props.number5} />
        <Cell value={props.number6} custom="none-border1"/>
      </div>
      <div className="row">
        <Cell value={props.number7} custom="none"/>
        <Cell value={props.number8} custom="none1"/>
        <Cell value={props.number9} custom="none-border2"/>
      </div>
    </div>
  );
};
