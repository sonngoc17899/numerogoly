import React from 'react';
import {Menu} from './Menu'
import '../../scss/shared.scss'


export const Header = (props) =>{
    return(
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    Numerogoly
                </div>
                <div className="real-time">
                    {props.time}
                </div>
                <div className="covid">
                    <button> #Chung tay đẩy lùi dịch bệnh Covid-19</button>
                    <div className="header-img">
                    {/* <img src="/pale-wear-mask-virus-is-everywhere.png"/> */}
                </div>
                </div>
            </div>
            <div className="close-menu">
            <Menu/>
            </div>
            <div className="header-mobile">
                <div className="mobile-logo">Numerogoly</div>
                <div className="mobile-exit">
                <button  className="btn" onClick={props.btn}>
                <img src="https://img.icons8.com/plumpy/24/000000/menu.png" alt="gg"/>
                </button>
                </div>
            </div>
        </div>
    )
}