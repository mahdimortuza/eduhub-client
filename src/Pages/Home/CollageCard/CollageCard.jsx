import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import React, { useEffect, useState, useRef } from 'react';
import SingleCard from './SingleCard';


const CollageCard = () => {
    const [collages, setCollages] = useState([])

    useEffect(() => {
        fetch('https://collage-management-application-server-mahdiwebx-gmailcom.vercel.app/collages')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, [])
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-1'>-- Our top collages --</h1>
                <p className='text-center mb-5 text-lg'>Feel free to explore our top ranked collages.</p>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Breakpoint for medium-sized devices (md) and larger
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {collages.map((collage) => (
                    <SwiperSlide key={collage.id}>
                        <SingleCard collage={collage}></SingleCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CollageCard;