import React from 'react';
import Carousel from '../Carousel/Carousel';
import Search from '../Search/Search';
import CollageCard from '../CollageCard/CollageCard';
import ImageGallery from '../ImageGallery/ImageGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Reviews from '../Reviews/Reviews';
import Counter from '../Counter/Counter';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Carousel></Carousel>
            <CollageCard></CollageCard>
            <Counter></Counter>
            <ImageGallery></ImageGallery>
            <ResearchPaper></ResearchPaper>
            <Reviews></Reviews>
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;