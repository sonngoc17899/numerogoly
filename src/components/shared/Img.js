import React from 'react';
import '../../scss/shared.scss'
export const Img = props => {
    const {stage} = props;
    const listImg = {
        homeImg: "/numerology/homeImg.png",
        headerImg: "/numerology/logoImg.png",
        menuIcon: "/numerology/menuIcon.png",
        pythago: "/numerology/Pythagoras.jpg",
        fb: "/numerology/youtubebig.png",
        csns: "/numerology/imgCsns.png",
        homeIcons: "/numerology/iconsHome.png"
    }
    return (
        <div className={props.customImg}>
            <img src={listImg[stage]} alt="NUMEROLOGY"></img>
        </div>
    )
}