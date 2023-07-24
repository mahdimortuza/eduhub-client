import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import React, { useEffect, useState, useRef } from 'react';
import SingleImg from './SingleImg';

const ImageGallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('graduation.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-1'>-- Our Gallery --</h1>
                <p className='text-center mb-5 text-lg'>Explore our graduation party gallery.</p>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Breakpoint for medium-sized devices (md) and larger
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <SingleImg
                            image={image}
                        ></SingleImg>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageGallery;