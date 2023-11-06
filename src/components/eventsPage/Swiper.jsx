import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './event.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import EventList from "./eventList.json";
import Card from './Card';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import slide_image_1 from "./img/1.jpg";
import slide_image_2 from './img/2.jpg';
import slide_image_3 from './img/3.jpg';
import slide_image_4 from './img/4.jpg';
import slide_image_5 from './img/5.jpg';
import slide_image_6 from './img/6.jpg';
import slide_image_7 from './img/7.jpg';

function App() {
    const previous_event = EventList.filter((card) => card.type === "previous_event");

    return (
        <div className='swiper'>
        {/* <div className="container"> */}
            <h1 className="heading">OUR EVENTS</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 5,
                    
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {previous_event.map((card) => (
                    <SwiperSlide key={card.id}>
                        <Card
                            key={card.id}
                            image={card.img}
                            title={card.title}
                            tagLine={card.tagLine}
                            content={card.content}
                            location={card.location}
                            time={card.time}
                            date={card.date}
                        />
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide> */}

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                            <span className=" material-symbols-outlined">
                                navigate_before
                            </span>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline">
                            <span className=" material-symbols-outlined">
                                navigate_next
                            </span>
                            </ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
            </div>
        // </div>
    );
}

export default App;