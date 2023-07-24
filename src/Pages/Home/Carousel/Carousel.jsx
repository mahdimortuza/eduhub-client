import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, } from 'swiper/modules';
import 'swiper/css/bundle';
import SingleCarousel from './SingleCarousel';


const sliders = [
    {
        id: 1,
        bg: "https://images.unsplash.com/photo-1531259736756-6caccf485f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
        title: "Welcome to \n EduHub"
    },
    {
        id: 2,
        bg: "https://images.unsplash.com/photo-1627556704283-452301a45fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
        title: "One place to find your \n dream"
    },
    {
        id: 3,
        bg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
        title: "We care for your \n hard work"
    },
    {
        id: 4,
        bg: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
        title: "EduHub is here \n to help you"
    },
    {
        id: 5,
        bg: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
        title: "One stop \n solution"
    },
]

const Carousel = () => {
    return (
        <Swiper
            slidesPerView={1} loop navigation effect='fade' autoplay modules={[Navigation, EffectFade, Autoplay]}
        >
            {
                sliders.map((slider) => <SwiperSlide key={slider.id}>
                    <SingleCarousel slider={slider}></SingleCarousel>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Carousel;