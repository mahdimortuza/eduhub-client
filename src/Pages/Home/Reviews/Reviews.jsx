import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://collage-management-application-server-mahdiwebx-gmailcom.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-1'>-- Student Feedback --</h1>
                <p className='text-center mb-5 text-lg'>We have a very positive footstep on education sector.</p>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='w-1/2 mx-auto text-center py-5'>
                            <FaQuoteRight className='mx-auto text-5xl'></FaQuoteRight>


                            <Rating className='mx-auto mt-5'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-xl mt-2'>{review.feedback}</p>
                            <p className='text-3xl font-bold capitalize'>{review.userName}</p>
                        </div>


                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;