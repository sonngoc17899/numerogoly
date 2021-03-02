import React from 'react'
import {List} from './List'
import '../../scss/shared.scss'
export const MobileMenu = (props) =>{
    return(
        <div className="mobile-menu">
            <div className="mobile-cancel">
            <button className="btn" onClick={props.cancel}>X</button>
            </div>
            <div className="mobile-list">
            <List content="Trang chủ" custom="mobile-custom" customLink={props.customHome} href="/tin-tuc"/>
            <List content="Con số chủ đạo" custom="mobile-custom" href="/category"/>
            <List content="Biểu đồ ngày sinh" custom="mobile-custom" href="/category"/>
            <List content="Các mũi tên chỉ đặc điểm" custom="mobile-custom" href="/category"/>
            <List content="Con số ngày sinh" custom="mobile-custom" href="/category"/>
            <List content="Bốn đỉnh cao của một đời người" custom="mobile-custom" href="/category"/>
            </div>
        </div>
    )
}