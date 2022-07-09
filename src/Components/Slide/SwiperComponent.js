import React, { useContext, useEffect, useState } from 'react'

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//components
import Slide from './Slide';
import SliderLoading from '../Loading/SliderLoading';

//css
import styles from "./swiperComponent.module.css"

const SwiperComponent = ({ data, title }) => {

    return (
        <>
            <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    160: {
                        slidesPerView: 1.20,
                        spaceBetween: 10,
                    },
                    250: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    310: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    540: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                }}
                modules={[Pagination, Navigation]}
                className={`mySwiper container ${styles.swiper_container}`}

            >
                {title ?
                    <h6 className={`${styles.swiper_title}`}>{title}</h6>
                    : ""}
                {data.length ?
                    data.map((item, index) =>
                        index < 15 &&
                        <SwiperSlide
                            key={item.id}>
                            <Slide id={`/show-movies/${item.name.replaceAll(" ", "")}-id=${item.id}`} image={item.image.medium} />
                        </SwiperSlide>
                    )
                    :
                    <>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderLoading />
                        </SwiperSlide>
                    </>
                }

            </Swiper>

        </ >
    )
}

export default SwiperComponent