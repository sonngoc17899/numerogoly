import React from 'react';
import {Menu} from './Menu'
import '../../scss/shared.scss'
import {Img} from './Img'
import {Link} from 'react-router-dom'
export const Header = (props) =>{
    const headerImg= true;
    return(
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <Link to="/numerogoly">
                    <Img customImg="headerImg" stage={headerImg ? "headerImg" : ""}/>
                </Link>   
                </div>
                <div className="real-time">
                <Link to="/numerogoly">
             Numerogoly
             </Link>
                </div>
                <div className="covid">
                    <button> #Chung tay đẩy lùi dịch bệnh Covid-19</button>
                    <div className="header-img">
                    {/* <img src="/pale-wear-mask-virus-is-everywhere.png"/> */}
                </div>
                </div>
            </div>
            <div className="close-menu">
            <Menu customCscd={props.Cscd}/>
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