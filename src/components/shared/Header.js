import React from 'react';
import {Menu} from './Menu'
import '../../scss/shared.scss'
import {Img} from './Img'
export const Header = (props) =>{
    const headerImg= true;
    return(
        <div className="header">
            <div className="close-menu">
            <Menu customCscd={props.Cscd} customCsns={props.Csns}/>
            </div>
            <div className="header-mobile">
                <div className="mobile-logo">
                <Img customImg="mobileHeaderImg" stage={headerImg ? "headerImg" : ""}/>
                </div>
                <div className="mobile-exit">
                <button  className="btn" onClick={props.btn}>
                <img src="https://img.icons8.com/plumpy/24/000000/menu.png" alt="gg"/>
                </button>
                </div>
            </div>
        </div>
    )
}