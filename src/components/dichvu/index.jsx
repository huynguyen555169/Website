import React, { useState } from 'react';
import './index.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function DichVu() {

    const [lutru, setLuTru] = useState([
        {
            img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/Du-lich-ganh-da-dia-phu-yen-e1519978756428.jpg',
            title: 'Ghềnh đá đĩa',
            price: '1.600.000',
            description: 'Ghềnh Đá Dĩa còn có các cách gọi khác là Gành Đá Dĩa là một danh thắng thiên nhiên kỳ thú về cảnh quan và độc đáo về địa chất ở Việt Nam, thắng cảnh này nằm tại xã An Ninh Đông, huyện Tuy An, tỉnh Phú Yên',
        },
        {
            img: 'https://onetour.vn/Media/Images/OneTour/TourTrongNuoc/QUY%20NH%C6%A0N%20-%20PH%C3%9A%20Y%C3%8AN/mang-lang.jpg',
            title: 'Nhà thờ mằng lăng',
            price: '1.300.000',
            description: 'Nhà thờ Mằng Lăng là một nhà thờ Công giáo nằm trên địa phận xã An Thạch, huyện Tuy An, tỉnh Phú Yên. Đây là nhà thờ thuộc Giáo xứ Mằng Lăng, là nơi sinh của Chân phước Anrê Phú Yên, một trong những vị tử đạo bổn mạng của giới trẻ Công giáo.',
        },
        {
            img: 'https://dulichvietnam.com.vn/vnt_upload/File/Image/Ve_dep_tuyet_my_cua_Bai_Xep_Phu_Yen_15.jpg',
            title: 'Bãi xép',
            price: '1.000.000',
            description: 'Với những phân cảnh tuyệt đẹp trong bộ phim thành công “Tôi thấy hoa vàng trên cỏ xanh”, Bãi Xép – Phú Yên đã trở thành một địa điểm du lịch hấp dẫn du khách với khung cảnh thiên nhiên bao la, thơ mộng.',
        },
    ])
    const [food, setFood] = useState([
        {
            img: 'https://www.cahoinhap.com/uploads/files/2019/09/06/15394189942580_Tuna-eyes.jpg',
            title: 'Mắt cá ngừ đại dương',
            price: '150.000',
            description: 'Mắt cá ngừ đại dương có giá trị dinh dưỡng rất cao vì rất giàu  Omega – 3 và DHA, rất tốt cho mắt và bổ sung trí não. Người có thị lực kém hay có các bệnh về mắt nên ăn nhiều mắt cá ngừ đại dương sẽ rất tốt và cải thiện rõ rệt.',
        },
        {
            img: 'https://media.foody.vn/res/g2/16355/prof/s/foody-upload-api-foody-mobile-banh-beo-chen-jpg-180730083135.jpg',
            title: 'Bánh bèo nóng',
            price: '50.000',
            description: 'Nhà thờ Mằng Lăng là một nhà thờ Công giáo nằm trên địa phận xã An Thạch, huyện Tuy An, tỉnh Phú Yên. Đây là nhà thờ thuộc Giáo xứ Mằng Lăng, là nơi sinh của Chân phước Anrê Phú Yên, một trong những vị tử đạo bổn mạng của giới trẻ Công giáo.',
        },
        {
            img: 'https://www.phuocnguyetseafood.com/uploads/news/2018_11/cach-nau-com-ga-phu-yen-thom-ngon-tru-danh-8_3.jpg',
            title: 'Cơm gà',
            price: '100.000',
            description: 'Với những phân cảnh tuyệt đẹp trong bộ phim thành công “Tôi thấy hoa vàng trên cỏ xanh”, Bãi Xép – Phú Yên đã trở thành một địa điểm du lịch hấp dẫn du khách với khung cảnh thiên nhiên bao la, thơ mộng.',
        },
    ])

    const elements = lutru.map((item, index) => {
        return <div className="col">
            <Card>
                <CardImg src={item.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>Giá: {item.price}VND/đêm</CardSubtitle>
                    <CardText>{item.description}</CardText>
                    <Button>Xem thêm</Button>
                </CardBody>
            </Card>
        </div>

    })
    const elements1 = food.map((item, index) => {
        return <div className="col">
            <Card>
                <CardImg src={item.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>Giá: {item.price}VND/đêm</CardSubtitle>
                    <CardText>{item.description}</CardText>
                    <Button>Xem thêm</Button>
                </CardBody>
            </Card>
        </div>

    })
    return (
        <div>
            <div className="container__all">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            ------ LƯU TRÚ ------
                        </div>
                        <div className="col">
                            {elements}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            ------ ẨM THỰC ------
                        </div>
                        <div className="col">
                            {elements1}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            ------ DỊCH VỤ/TRÒ CHƠI ------
                        </div>
                        <div className="col">
                            {elements}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            ------ LƯU TRÚ ------
                        </div>
                        <div className="col">
                            {elements}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DichVu;