import React, {useState, useEffect} from 'react';
// import {Show} from './Show';
import '../../../scss/arrow.scss'
import '../../../scss/cscd.scss'
import {Header} from '../../shared/Header'
import {Footer} from '../../shared/Footer'
import {MobileMenu} from '../../shared/MobileMenu' 
import {Show} from './Show'
import {db} from "../../../firebase";
export const Arrows = () =>{
    const [mobile, setMobile] = useState(false);
    const [btn, setBtn] = useState(true);
    const [loadingArrows, setLoadingArrows] = useState(true);
    const [error, setError] = useState(false)
    const [error1, setError1] = useState(false)
    const [values, setValues] = useState({
        fullname: "",
        date: "",
        gender: "Nam",
    })
    const [listArrow, setListArrow] = useState({
      arrow159: "",
      arrow357: "",
      arrow369: "",
      arrow258: "",
      arrow147: "",
      arrow123: "",
      arrow456: "",
      arrow789: "",
      emtyArrow159: "",
      emtyArrow357: "",
      emtyArrow369: "",
      emtyArrow258: "",
      emtyArrow147: "",
      emtyArrow456: "",
      emtyArrow789: "",
    })
    const [listNumberArr, setListNumberArr] = useState({
      number1: "",
      number2: "",
      number3: "",
      number4: "",
      number5: "",
      number6: "",
      number7: "",
      number8: "",
      number9: "",
    })
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
      }else{
        setError(false);
      }
      if(values.date === ""){
        setError1(true)
      }else{
        setError1(false);
      }
      if(values.fullname !== "" && values.date !== ""){
        const y = handleDate(values.date)[0];
        const m = handleDate(values.date)[1];
        const d = handleDate(values.date)[2];
        const listNumber = y.concat(m,d);
        const arr1 = [];
        const arr2 = [];
        const arr3 = [];
        const arr4 = [];
        const arr5 = [];
        const arr6 = [];
        const arr7 = [];
        const arr8 = [];
        const arr9 = [];
        const arrow159 = [];
        const arrow357 = [];
        const arrow369 = [];
        const arrow258 = [];
        const arrow147 = [];
        const arrow123 = [];
        const arrow456 = [];
        const arrow789 = [];
        const emtyArrow159 = [];
        const emtyArrow357 = [];
        const emtyArrow369 = [];
        const emtyArrow258 = [];
        const emtyArrow147 = [];
        const emtyArrow456 = [];
        const emtyArrow789 = [];
        for(let i=0;i<listNumber.length;i++){
          if(parseInt(listNumber[i])===1){
            arr1.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===2){
            arr2.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===3){
            arr3.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===4){
            arr4.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===5){
            arr5.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===6){
            arr6.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===7){
            arr7.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===8){
            arr8.push(listNumber[i]);
          }
          else if(parseInt(listNumber[i])===9){
            arr9.push(listNumber[i]);
          }
        }
        setLoadingArrows(false);
        setListNumberArr({
          number1: arr1.join(" "),
          number2: arr2.join(" "),
          number3: arr3.join(" "),
          number4: arr4.join(" "),
          number5: arr5.join(" "),
          number6: arr6.join(" "),
          number7: arr7.join(" "),
          number8: arr8.join(" "),
          number9: arr9.join(" "),
        })
        if(arr1.length !== 0 && arr5.length !== 0 && arr9.length !== 0){
          arrow159.push(1)
        }
        if(arr3.length !== 0 && arr5.length !== 0 && arr7.length !== 0){
          arrow357.push(1)
        }
        if(arr3.length !== 0 && arr6.length !== 0 && arr9.length !== 0){
          arrow369.push(1)
        }
        if(arr2.length !== 0 && arr5.length !== 0 && arr8.length !== 0){
          arrow258.push(1)
        }
        if(arr1.length !== 0 && arr4.length !== 0 && arr7.length !== 0){
          arrow147.push(1)
        }
        if(arr1.length !== 0 && arr2.length !== 0 && arr3.length !== 0){
          arrow123.push(1)
        }
        if(arr4.length !== 0 && arr5.length !== 0 && arr6.length !== 0){
          arrow456.push(1)
        }
        if(arr7.length !== 0 && arr7.length !== 0 && arr9.length !== 0){
          arrow789.push(1)
        }
        if(arr1.length === 0 && arr5.length === 0 && arr9.length === 0){
          emtyArrow159.push(1)
        }
        if(arr3.length === 0 && arr5.length === 0 && arr7.length === 0){
          emtyArrow357.push(1)
        }
        if(arr3.length === 0 && arr6.length === 0 && arr9.length === 0){
          emtyArrow369.push(1)
        }
        if(arr2.length === 0 && arr5.length === 0 && arr8.length === 0){
          emtyArrow258.push(1)
        }
        if(arr1.length === 0 && arr4.length === 0 && arr7.length === 0){
          emtyArrow147.push(1)
        }
        if(arr4.length === 0 && arr5.length === 0 && arr6.length === 0){
          emtyArrow456.push(1)
        }
        if(arr7.length === 0 && arr8.length === 0 && arr9.length === 0){
          emtyArrow789.push(1)
        }
        setListArrow({
          arrow159: arrow159.join(""),
          arrow357: arrow357.join(""),
          arrow369: arrow369.join(""),
          arrow258: arrow258.join(""),
          arrow147: arrow147.join(""),
          arrow123: arrow123.join(""),
          arrow456: arrow456.join(""),
          arrow789: arrow789.join(""),
          emtyArrow159: emtyArrow159.join(""),
          emtyArrow357: emtyArrow357.join(""),
          emtyArrow369: emtyArrow369.join(""),
          emtyArrow258: emtyArrow258.join(""),
          emtyArrow147: emtyArrow147.join(""),
          emtyArrow456: emtyArrow456.join(""),
          emtyArrow789: emtyArrow789.join(""),
        })
      }
    }
    console.log(listArrow);
    const handleClick = () => {
        setMobile(true);
        setBtn(false);
      };
      const cancelClick = () => {
        setMobile(false);
        setBtn(true);
      };
      
    return(
        <div>
            {mobile ? <MobileMenu customCsns="isCsns" cancel={cancelClick} /> : ""}
       {btn ? (
        <div>
          <Header time="" arrows="isArrows" btn={handleClick} />
          {loadingArrows ?   <div className="cscd-content">
          <div className="cscdTitle">Các mũi tên đặc điểm</div>
          <div className="cscdText">
              <div className="text">
              <p>Trên Biểu đồ ngày sinh, ba con số nằm kế nhau theo một hàng ngang, hàng dọc hoặc hàng chéo sẽ tạo thành các Mũi tên chỉ đặc điểm, hoặc ba số trong ô số trống nằm kế nhau ở các vị trí tương tự cũng vậy.
                Mỗi ba con số nằm kế nhau sẽ tạo nên Mũi tên chỉ đặc điểm vượt trội hoặc ưu điểm của một cá nhân. Ngược lại, ba con số vắng mặt nằm kế nhau sẽ tạo nên Mũi tên chỉ điểm yếu đáng chú ý của người đó.
              </p>
              </div>
            </div>
          <div className="cscdForm">
                <form onSubmit={handleSubmit}>
                <div className="title-form">Khám phá mũi tên đặc điểm của bạn</div>
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
            </div>: <Show 
            number1={listNumberArr.number1}
            number2={listNumberArr.number2}
            number3={listNumberArr.number3}
            number4={listNumberArr.number4}
            number5={listNumberArr.number5}
            number6={listNumberArr.number6}
            number7={listNumberArr.number7}
            number8={listNumberArr.number8}
            number9={listNumberArr.number9}
            date={handleDate(values.date)[2]+"/"+handleDate(values.date)[1]+"/"+handleDate(values.date)[0]}
            arrow159={listArrow.arrow159}
            arrow123={listArrow.arrow123}
            arrow147={listArrow.arrow147}
            arrow258={listArrow.arrow258}
            arrow357={listArrow.arrow357}
            arrow369={listArrow.arrow369}
            arrow456={listArrow.arrow456}
            arrow789={listArrow.arrow789}
            emtyArrow159={listArrow.emtyArrow159}
            emtyArrow147={listArrow.emtyArrow147}
            emtyArrow258={listArrow.emtyArrow258}
            emtyArrow357={listArrow.emtyArrow357}
            emtyArrow369={listArrow.emtyArrow369}
            emtyArrow456={listArrow.emtyArrow456}
            emtyArrow789={listArrow.emtyArrow789}
            click={()=>{
              setLoadingArrows(true);
              window.scrollTo(0, 0);
              setValues({
                fullname: "",
                day: "1",
                month: "1",
                year: "2021",
                gender: "Nam",
                date: ""
              });
            }}
            />}
          <Footer/>
        </div>) : ""}
        </div> 
    )
}