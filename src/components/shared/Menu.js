import React from "react";
import { List } from "./List";
import { Link } from "react-router-dom";
import "../../scss/shared.scss";
import {Img} from '../shared/Img'
export const Menu = (props) => {
  return (
    <div className="menu">
      <div className="li" id="home">
          <Link to="/">
            <Img customImg="icon-home" stage={"homeIcons"}/>
          </Link>
      </div>
      <List content="CON SỐ CHỦ ĐẠO " customLink={props.customCscd} custom="li" href="/con-so-chu-dao" />
      <List content="CON SỐ NGÀY SINH" customLink={props.customCsns} custom="li" href="/con-so-ngay-sinh" />
      <List content="CÁC MŨI TÊN" custom="li" customLink={props.customArrows} href="/mui-ten" />
      <List content="BIỂU ĐỒ NGÀY SINH" custom="li" href="/category" />
      <List
        content="CÁC ĐỈNH CAO"
        custom="li"
        href="/category"
      />
    </div>
  );
};
