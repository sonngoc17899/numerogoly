import React from 'react';
import '../../scss/shared.scss'
export const Img = props => {
    const {stage} = props;
    const listImg = {
        homeImg: "/homeImg.png",
    }
    return (
        <div className={props.customImg}>
            <img src={listImg[stage]} alt="NUMEROGOLY"></img>
        </div>
    )
}