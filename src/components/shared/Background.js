import React from 'react';
import '../../scss/shared.scss'
export const Background = props => {
    const {stage} = props;
    const backgroundSrc = {
        home: "/home.png",
    }
    return (
        <div className="background-wrapper">
            <img className="background" src={backgroundSrc[stage]} alt="NUMEROGOLY"></img>
        </div>
    )
}