import React,{useState} from 'react';
import {Header} from './shared/Header'
import {MobileMenu} from './shared/MobileMenu'
import '../scss/home.scss'
import {Link} from 'react-router-dom'

// import {Background} from './shared/Background'
import {Img} from './shared/Img'
import {Footer} from './shared/Footer'
export const Home = () =>{
    const [btn, setBtn] = useState(true)
    const [mobile, setMobile] = useState(false)
    const homeImg = true;
    // const date = new Date();
    // const getDay = () =>{
    //     const date = new Date();
    //     let day_name = ""
    //     switch (date.getDay()) {
    //         case 0:
    //             day_name = "Chủ nhật, ";
    //             break;
    //         case 1:
    //             day_name = "Thứ hai, ";
    //             break;
    //         case 2:
    //             day_name = "Thứ ba, ";
    //             break;
    //         case 3:
    //             day_name = "Thứ tư, ";
    //             break;
    //         case 4:
    //             day_name = "Thứ năm, ";
    //             break;
    //         case 5:
    //             day_name = "Thứ sáu, ";
    //             break;
    //         case 6:
    //             day_name = "Thứ bảy, ";
    //         }
    //         return day_name
    // }
    
   
    // const time = getDay()+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    const handleClick = () =>{
        setMobile(true);
        setBtn(false);
    }
    const cancelClick = () =>{
        setMobile(false);
        setBtn(true);
    }
    return(
        <div>
            {mobile ?  <MobileMenu customHome="isHome" cancel={cancelClick}/>: ""}
         {btn ? <div> <Header time="" btn={handleClick}/>
         
            <div className="home-main">
                <div className="text">
                    <p>Mỗi biểu đồ ngày sinh như một thửa đất mà Vũ trụ giao cho ta làm "vốn ban đầu". Dẫu cho thừa đất ấy màu mỡ hay cẳn cỗi có chỗ đầy hay chỗ thưa…, thì nhiệm vụ của ta là cứ cố gắng bằng cả ý thức và nỗ lực, để vun xới cho mảnh đất ấy tốt tươi, đầy hoa thơm trái ngọt và rộn tiếng chim</p>
                    <div id="textClick">
                        <p>Khám phá các các số trong ngày sinh của bạn</p>
                        <div>
                            <button>
                                <Link to="/cscd">Bắt đầu ngay</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <Img customImg="homeImg" stage={homeImg ? "homeImg" : ""}></Img>
            </div>
            <div className="home-mobile">
            <Img customImg="mobileImg" stage={homeImg ? "homeImg" : ""}></Img>
                <div className="custom-text">
                    Thay đổi cuộc sống với nhân số học
                </div>
                <div>
                    <p>Khám phá các con số trong ngày sinh của bạn</p>
                </div>
                <div>
                        
                        <button>
                        <Link to="/cscd">
                            Bắt đầu ngay
                        </Link>
                        </button>
                        
                          
                        </div>
            </div>
            <Footer/></div> : ""}
        </div>
    )
}