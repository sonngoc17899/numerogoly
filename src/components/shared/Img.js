import React from 'react';
import '../../scss/shared.scss'
export const Img = props => {
    const {stage} = props;
    const listImg = {
        homeImg: "/numerogoly/homeImg.png",
        headerImg: "/numerogoly/logoImg.png",
        menuIcon: "/numerogoly/menuIcon.png",
        fb: "/numerogoly/youtubebig.png"
    }
    return (
        <div className={props.customImg}>
            <img src={listImg[stage]} alt="NUMEROGOLY"></img>
        </div>
    )
}