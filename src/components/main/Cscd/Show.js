import React from 'react';
import {MobileMenu} from "../../../scss/cscd.scss"
export const Show = (props) =>{
    return(
        <div className="show">
            <div className="showCscd">
                <div className="number">
                    {props.number}
                </div>
            </div>
                <div className="date">
                  {props.name} ({props.date})
                    </div>
            <div className="feature">
                <div className="note">
                    Chú ý *Các thông tin dưới đây chỉ mang giá trị tham khảo, không nhất thiết chính xác với mọi trường hợp*
                </div>
                <a href={props.href}>
                    Xem thêm về con số của bạn từ kênh của cô Lê Đỗ Quỳnh Hương
                </a>
                <div className="list-feature">
                <div className="key-feature">
                        <p>Con số chủ đạo: {props.cscd}</p>
                    </div>
                    <div className="key-feature">
                        <p>{props.impotant}</p>
                    </div>
                   <div className="key-feature">
                        <p>Mục đích sống</p>
                        <div>{props.mds}</div>
                    </div>
                    <div className="key-feature">
                        <p>Điều kiện phát triển tối ưu</p>
                        <div>{props.dkpt}</div>
                    </div>
                    <div className="key-feature">
                        <p>Đặc điểm nổi bật</p>
                        <div>{props.dd}</div>
                    </div>
                    <div className="key-feature">
                        <p>Khuynh hướng cần khắc phục</p>
                        <div>{props.khkp}</div>
                    </div>
                    <div className="key-feature">
                        <p>Hướng phát triển</p>
                        <div>{props.hpt}</div>
                    </div>
                    <div className="key-feature">
                        <p>Nghề nghiệp phù hợp</p>
                        <div>{props.job}</div>
                    </div>
                </div>
                <div className="back">
                  <button onClick={props.click}>Xem ngày sinh khác</button>
                </div>
            </div> 
        </div>
    )
}