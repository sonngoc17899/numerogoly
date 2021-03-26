import React from 'react'
import {Img} from '../../shared/Img';
export const Show = (props) =>{
    return(
        <div className="show">
          <Img customImg="img" stage={"csns"}/>
          <div className="feature">
        <div className="key-feature">
          <div>{props.csnsdb}</div>
        </div>
        <div className="key-feature">
          <p>Con số ngày sinh: {props.csns}</p>
        </div>
        <div className="key-feature">
          <div>Những người có Con số ngày sinh {props.csns} thường có các khuynh hướng sau đây:</div>
        </div>
        <div className="key-feature">
          <p>{props.showCsns}</p>
        </div>
        <div className="back">
                  <button onClick={props.click}>Xem ngày sinh khác</button>
        </div>
      </div>
      </div>
    )
}