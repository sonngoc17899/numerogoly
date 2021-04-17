import React from 'react';
import {Menu} from './Menu'
import '../../scss/shared.scss'
import {Img} from './Img'
import {Link} from "react-router-dom"
export const Header = (props) =>{
    return(
        <div className="header">
            <div className="close-menu">
            <Menu customCscd={props.Cscd} customCsns={props.Csns} customArrows={props.arrows}/>
            </div>
            <div className="header-mobile">
                <div className="mobile-logo">
                    <Link to="/">
                    <Img customImg="mobileHeaderImg" stage={"homeIcons"}/>
                    </Link>
            
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