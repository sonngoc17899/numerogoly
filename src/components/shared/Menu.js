import React from "react";
import { List } from "./List";
import { Link } from "react-router-dom";
import "../../scss/shared.scss";
export const Menu = (props) => {
  return (
    <div className="menu">
      <div style={{ marginLeft: "2em" }}>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <List content="Con số chủ đạo" custom="li" href="/tin-tuc" />
      <List content="Biểu đồ ngày sinh" custom="li" href="/category" />
      <List content="Các mũi tên chỉ điểm" custom="li" href="/category" />
      <List content="Con số ngày sinh" custom="li" href="/category" />
      <List
        content="Bốn đỉnh cao của một đời người"
        custom="li"
        href="/category"
      />
    </div>
  );
};
