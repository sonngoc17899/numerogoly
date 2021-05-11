import React, {useEffect} from 'react'
import {Img} from '../../shared/Img';
export const Show = (props) =>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return(
        <div className="show">
          <Img customImg="img" stage={"csns"}/>
          {/* <div className="number">
                    {props.csns}
                </div> */}
          <div className="feature">
          <div className="date">
                  {props.name} ({props.date})
          </div>
        <div className="key-feature">
          <div>{props.csnsdb}</div>
        </div>
        <div className="key-feature">
          <p>Con số ngày sinh: {props.csns}</p>
        </div>
        <div className="key-feature">
          <div>Con số ngày sinh của bạn thường có các khuynh hướng sau đây:</div>
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