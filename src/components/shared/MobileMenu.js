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
            <List content="TRANG CHỦ" custom="mobile-custom" customLink={props.customHome} href="/"/>
            <List content="CON SỐ CHỦ ĐẠO" customLink={props.customCscd} custom="mobile-custom" href="/con-so-chu-dao"/>
            <List content="CON SỐ NGÀY SINH" custom="mobile-custom" href="/con-so-ngay-sinh" customLink={props.customCsns}/>
            <List content="CÁC MŨI TÊN" custom="mobile-custom" customLink={props.customArrows} href="/cac-mui-ten"/>
            {/* <List content="BIỂU ĐỒ NGÀY SINH" custom="mobile-custom" href="/category"/>
            <List content="CÁC ĐỈNH CAO" custom="mobile-custom" href="/category"/> */}
            </div>
        </div>
    )
}