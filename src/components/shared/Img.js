import React from 'react';
import '../../scss/shared.scss'
export const Img = props => {
    const {stage} = props;
    const listImg = {
        homeImg: "/homeImg.png",
        headerImg: "/logoImg.png",
        menuIcon: "/menuIcon.png",
        pythago: "/Pythagoras.jpg",
        fb: "/youtubebig.png",
        csns: "/imgCsns.png",
        homeIcons: "/iconsHome.png"
    }
    return (
        <div className={props.customImg}>
            <img src={listImg[stage]} alt="NUMEROLOGY"></img>
        </div>
    )
}