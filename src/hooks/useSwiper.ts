import { useState } from 'react';
import type { Swiper } from 'swiper';

export const useSwiperNavigation = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: Swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleSwiperInit = (swiper: Swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return {
        isBeginning,
        isEnd,
        handleSlideChange,
        handleSwiperInit
    };
};
