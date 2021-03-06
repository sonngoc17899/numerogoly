import React, { useState } from "react";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { MobileMenu } from "../shared/MobileMenu";
// import {Img} from '../shared/Img'
import '../../scss/cscd.scss'
export const Cscd = () => {
  const [btn, setBtn] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [loadingCscd, setLoadingCscd] = useState(true);
  // const homeImg = true;
  const [values, setValues] = useState({
      fullname: "",
      day: "1",
      month: "1",
      year: "2021",
      gender: "Nam"
  })
 const renderDay = () =>{
     const day = [];
     for(let i=1;i<=31;i++)
     {
         day.push(<option key={i}>{i}</option>);
     }
     return day;
 }
 const renderMonth = () =>{
   const month= [];
   for(let i=1;i<=12;i++)
      {
          month.push(<option key={i}>{i}</option>)
      }
      return month;
 }
 const renderYear = () =>{
   const year = [];
  const thisYear = new Date().getFullYear();
  for(let i=thisYear;i>thisYear-99;i--)
      {
        year.push(<option key={i}>{i}</option>)
      }
      return year;
 }
  const handleClick = () => {
    setMobile(true);
    setBtn(false);
  };
  const cancelClick = () => {
    setMobile(false);
    setBtn(true);
  };
  const sum = (a) =>{
    let s = 0;
    for(let i=0;i<a.length;i++)
    {
      s+= parseInt(a[i]);
    }
    return s;
  }
  const number = (d, m , y) =>{
    let sumDay = d.split("");
    let sumMonth = m.split("");
    let sumYear = y.split("");
    let sumNumber = sum(sumDay)+sum(sumMonth)+sum(sumYear);
    let outNumber = "";
    if(sumNumber >=2 && sumNumber <=10) outNumber = sumNumber;
    else{
      outNumber = (sumNumber-parseInt(sumNumber/10)*10)+parseInt(sumNumber/10);
    } 
    return outNumber;
  }
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(number(values.day, values.month, values.year));
  }
  return (
    <div>
      {mobile ? <MobileMenu customCscd="isCscd" cancel={cancelClick} /> : ""}
      {btn ? (
        <div>
          {" "}
          <Header time="" Cscd="isCscd" btn={handleClick} />
          {loadingCscd ? <div className="cscd-content">
            <div className="cscdTitle">Con số chủ đạo</div>
            <div className="cscdText">
              <div className="text">
              <p>Sự tiến hóa của chúng ta là một con đường dài vô tận hướng về sự
              hoàn thiện của linh hồn. Con số chủ đạo chỉ cho mỗi người chúng ta
              biết những lối đi cơ bản mà chúng ta phải theo để có được tiến bộ
              trên từng giai đoạn tiến hóa, trước khi chúng ta tiếp nhận các
              chặng đường phát triển cao hơn.</p>
              <p>Khám phá con số chủ đạo của bạn</p>
              </div>
              {/* <Img customImg="imgCscd" stage={"pythago"}></Img> */}
            </div>
            <div className="cscdForm">
                <form onSubmit={handleSubmit}>
                    <label>
                        Họ và tên: <input type="text" name="fullname" onChange={handleChanges} value={values.fullname}/>
                    </label>
                 <div className="date-gender">
                    <div className="date">
                        <div>Ngày sinh (Dương lịch)</div>
                    <label>
                        <select name="day" value={values.day} onChange={handleChanges}>
                           {renderDay()}
                        </select>
                        <select name="month" value={values.month} onChange={handleChanges}>
                            {renderMonth()}
                        </select>
                        <select name="year" value={values.year} onChange={handleChanges}>
                            {renderYear()}
                        </select>
                    </label>
                    </div>
                    <div className="gender">
                      <div>Giới tính</div>
                      <label>
                        <select name="gender" value={values.gender} onChange={handleChanges}>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </label>
                    </div>
                 </div>
                 <button type="submit">Xem kết quả</button>
                </form>
            </div>
          </div> : "" }
          
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
