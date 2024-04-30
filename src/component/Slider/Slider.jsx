
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                <SwiperSlide><img src="https://i.ibb.co/k3b0YtJ/Cox-s-Bazar.webp" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/hCzXxzX/Rangamati.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/qNwjyKQ/Bandarban.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/1TV4H2c/Bangkok.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/wJ2k1r9/Phuket.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/CKxXbFr/Borobudur-Temple.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/ZfwFgBy/Komodo-National-Park.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/Hg052jf/Raja-Ampat-Islands.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/F6t16mn/Ha-Long-Bay.jpg" alt=""  style={{width: '100%', height: '500px'}} /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;