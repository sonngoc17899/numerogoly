import React, {useState} from 'react';
// import {Show} from './Show';
import '../../../scss/arrow.scss'
import '../../../scss/cscd.scss'
import {Header} from '../../shared/Header'
import {Footer} from '../../shared/Footer'
import {MobileMenu} from '../../shared/MobileMenu' 
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
    const handleChanges = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = () =>{}
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
          <div className="cscd-content">
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
            </div>
          <Footer/>
        </div>) : ""}
        </div> 
    )
}