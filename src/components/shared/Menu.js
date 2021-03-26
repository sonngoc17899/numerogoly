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
      <List content="CON SỐ CHỦ ĐẠO " customLink={props.customCscd} custom="li" href="/cscd" />
      <List content="CON SỐ NGÀY SINH" customLink={props.customCsns} custom="li" href="/csns" />
      <List content="CÁC MŨI TÊN" custom="li" href="/category" />
      <List content="BIỂU ĐỒ NGÀY SINH" custom="li" href="/category" />
      <List
        content="CÁC ĐỈNH CAO"
        custom="li"
        href="/category"
      />
    </div>
  );
};
