import React, { useState, useEffect } from "react";
import { Header } from "../../shared/Header";
import { Footer } from "../../shared/Footer";
import { MobileMenu } from "../../shared/MobileMenu";
import {Show} from "./Show"
import {db} from "../../../firebase";
// import {TextField} from '@material-ui/core'
// import {Img} from '../shared/Img'
import '../../../scss/cscd.scss';
export const Cscd = () => {
  const [btn, setBtn] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [loadingCscd, setLoadingCscd] = useState(true);
  // const homeImg = true;
  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)
  const [values, setValues] = useState({
      fullname: "",
      date: "",
      gender: "Nam",
  })
  const [showValues, setShowValues] = useState({
    development: "",
    features: "",
    grow: "",
    job: "",
    lifePurpose: "",
    overcome: "",
    url: "",
    22: ""
  })
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
    let outNumber = 0;
    if(sumNumber === 22)
    {
      outNumber = sumNumber;
    }
    else if((sumNumber >=2 && sumNumber <=10)){
       outNumber = sumNumber;
    }
    else{
      outNumber = (sumNumber-parseInt(sumNumber/10)*10)+parseInt(sumNumber/10);
    }
    if(outNumber>11 && sumNumber !== 22) outNumber =  (outNumber-parseInt(outNumber/10)*10)+parseInt(outNumber/10);
    return outNumber;
  }
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleDate = (date)=>{
    let dateArray = date.split("-") 
    return dateArray;
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
      const y = handleDate(values.date)[0];
      const m = handleDate(values.date)[1];
      const d = handleDate(values.date)[2];
      const newCscd = number(d, m, y);
      setLoadingCscd(false)
      newCscd===22 ? setCscd("22/4") : setCscd(newCscd)
      let show = dataFb[0].cscd.filter((v, i, a)=>{
      return v.id === newCscd;
      })
      setShowValues({
        development: show[0].development,
        features: show[0].features,
        grow: show[0].grow,
        job: show[0].job,
        lifePurpose: show[0].lifePurpose,
        overcome: show[0].overcome,
        url: show[0].url,
        22: show[0].important,
      })
    }
  }
  // const handleClick1 = () =>{
  //   setLoadingCscd(true)
  // }
  // const [data, setData] = useState({})
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'http://localhost:8088/api',
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);
  // console.log(data);

  return (
    <div>
      {mobile ? <MobileMenu customCscd="isCscd" cancel={cancelClick} /> : ""}
      {btn ? (
        <div>
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
              </div>
              {/* <Img customImg="imgCscd" stage={"pythago"}></Img> */}
            </div>
            <div className="cscdForm">
                <form onSubmit={handleSubmit}>
                <div className="title-form">Khám phá con số chủ đạo của bạn!</div>
                  <div>Họ và tên: </div>
              
                      <input autoComplete="off" type="text" name="fullname" onChange={handleChanges}  value={values.fullname}/>
            
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
          <Show name={validateName(values.fullname)} date={handleDate(values.date)[2]+"/"+handleDate(values.date)[1]+"/"+handleDate(values.date)[0]} number={cscd} cscd={cscd} dd={showValues.features} mds={showValues.lifePurpose} dkpt={showValues.grow} khkp={showValues.overcome} hpt={showValues.development}  job={showValues.job} href={showValues.url} click={()=>{
            setLoadingCscd(true);
            window.scrollTo(0, 0);
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
