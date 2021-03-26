import React,{useState, useEffect} from "react";
import "../../../scss/cscd.scss";
import { MobileMenu } from "../../shared/MobileMenu";
import {Show} from './Show';
import {Header} from '../../shared/Header';
import {Footer} from "../../shared/Footer";
import {db} from "../../../firebase";
export const Csns = () => {
  const [mobile, setMobile] = useState(false);
  const [btn, setBtn] = useState(true);
  const [loadingCsns, setLoadingCsns] = useState(true);
  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)
  const [csns, setCsns] = useState(1)
  const [values, setValues] = useState({
      fullname: "",
      date: "",
      gender: "Nam",
  })
  const [showValues, setShowValues] = useState({
    features: "",
    22: ""
  })
  const cancelClick = () => {
    setMobile(false);
    setBtn(true);
  };
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = () => {
    setMobile(true);
    setBtn(false);
  };
  const handleDate = (date)=>{
    let dateArray = date.split("-") 
    return dateArray;
  }
  const [cscd, setCscd] = useState(1)
  const [dataFb, setDataFb] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  const fetchData = async () =>{
    const response =db.collection('Data');
    const data = await response.get();
    data.docs.forEach(item=>{
     setDataFb([...dataFb,item.data()])
    })
  }
  const validateName = (name) =>{
    name = name.replace(/\s+/g, ' ');
    name = name.trim().toLowerCase();
    let split = name.split(" ");
  for(let i=0;i<split.length;i++)
  {
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  return split.join(" ")
   }
  const sum = (a) =>{
    let s = 0;
    for(let i=0;i<a.length;i++)
    {
      s+= parseInt(a[i]);
    }
    return s;
  }
 
  const handleSubmit = (e) =>{
      e.preventDefault();
      if(values.fullname === ""){
        setError(true)
      }
      if(values.date === ""){
        setError1(true)
      }
      if(values.fullname !== "" && values.date !== ""){
        const day = handleDate(values.date)[2];
        const realDay = sum(day);
        realDay===22 ? setCsns("22/4") : setCsns(realDay)
        setLoadingCsns(false);
        let show = dataFb[0].csns.filter((v, i, a)=>{
          return v.id === parseInt(realDay);
          })
        setShowValues({
          features: show[0].features,
          22: show[0].impotant
        })
      }
      
  }
  return (
    <div>
       {mobile ? <MobileMenu customCscd="isCsns" cancel={cancelClick} /> : ""}
       {btn ? (
        <div>
          <Header time="" Csns="isCsns" btn={handleClick} />
          {loadingCsns ? <div className="cscd-content">
            <div className="cscdTitle">Con số ngày sinh</div>
            <div className="cscdText">
              <div className="text">
              <p>Bên cạnh Con số chủ đạo thì con số ngày sinh cũng ảnh hướng đến cuộc đời của mỗi con người. Tuy nhiên nếu chúng ta theo đuổi những đặc điểm của Con số ngày sinh thay vì đi theo khuynh hướng của Con số chủ đạo thì chúng ta có khả năng gặp nguy hiểm, và điều này thể hiện rõ nhất qua sự xung đột giữa các yếu tố đặc thù của mỗi bên.</p>
              </div>
              {/* <Img customImg="imgCscd" stage={"pythago"}></Img> */}
            </div>
            <div className="cscdForm">
                <form onSubmit={handleSubmit}>
                <div className="title-form">Khám phá con số ngày sinh của bạn!</div>
                  <div>Họ và tên: </div>
              
                      <input autoComplete="off" type="text" name="fullname" onChange={handleChanges} value={values.fullname}/>
            
                   {error ? <p>Tên không được để trống!</p> : ""}
                 <div className="date-gender">
                    <div className="date">
                        <div>Ngày sinh (Dương lịch)</div>
                        <input name="date" onChange={handleChanges} value={values.date} type="date"  min="1930-01-01" max="2030-12-31"/>
                    {error1 ? <p>Ngày sinh không được để trống!</p> : ""}
                    </div>
                    <div className="gender">
                      <label>
                     Giới tính
                        <select name="gender" value={values.gender} onChange={handleChanges}>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </label>
                    </div>
                 </div>
                 <div className="click">
                 <button type="submit">Xem kết quả</button>
                 </div>
                </form>
            </div>
          </div> :
          <Show csns={csns} showCsns={showValues.features} 
          click={()=>{
            setLoadingCsns(true);
            setValues({
              fullname: "",
              day: "1",
              month: "1",
              year: "2021",
              gender: "Nam",
              date: ""
            });
          }}/>
       }
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
