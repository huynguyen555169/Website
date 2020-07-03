import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import './index.css';

function Place() {

    const [arr, setArr] = useState([
        {
            title: 'Ghềnh Đá Dĩa còn có các cách gọi khác là Gành Đá Dĩa là một danh thắng thiên nhiên kỳ thú về cảnh quan và độc đáo về địa chất ở Việt Nam, thắng cảnh này nằm tại xã An Ninh Đông, huyện Tuy An, tỉnh Phú Yên',
            video: 'https://youtu.be/c9mH0OHoUZc',
        },
        {
            title: 'Tháp Nhạn trong tiếng Ê-Đê và Jarai gọi là tháp KơHmeng là một tháp Champa nằm trên núi Nhạn, thắng cảnh tiêu biểu của Tuy Hòa, tỉnh lị của Phú Yên. Tháp được người Chăm sinh sống ở lưu vực châu thổ sông Ba xây dựng nên vào khoảng thế kỉ 12.',
            video: 'https://youtu.be/Ed4W9T5JSnQ',
        },
        {
            title: 'Mũi Đại Lãnh, hay còn được biết đến với tên Mũi Điện, là một mũi đất nhô ra biển từ một nhánh của dãy Trường Sơn, hướng thẳng ra bãi Môn, thuộc địa phận xã Hòa Tâm, thị xã Đông Hòa, tỉnh Phú Yên, cách thành phố Tuy Hòa 35 km về phía Đông Nam.',
            video: 'https://youtu.be/Lr3xHmIjTEE',
        },
        {
            title: 'Vũng Rô là một vịnh nhỏ thuộc xã Hòa Xuân Nam, thị xã Đông Hòa, tỉnh Phú Yên, nằm ngay sát rìa dãy núi Đèo Cả. Vịnh là ranh giới tự nhiên trên biển giữa Phú Yên với Khánh Hòa.',
            video: 'https://youtu.be/iecH6cfuqrY',
        },
    ])

    const elements = arr.map((place, index) => {
        return <div className="row" key={index}>
            <div className="col">   {place.title}
            </div>
            <div className="col">
                <ReactPlayer url={place.video} className="place__video" />
            </div>
        </div>
    })
    return (
        <div className="place__container">
            <div className="container">
                {elements}
            </div>

        </div>

    );
}

export default Place;