"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlay,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import HeroSlideContent from "./HeroSlideContent";

type HeroSectionProps = {
    movies: {
        id: string;
        name: string;
        enName: string;
        bgImage: string;
        image: string;
        imdb: string;
        age: string;
        release: string;
        part: string;
        episode: number;
        type: string;
        description: string;
    }[];
}

const HeroSection = ({ movies }: HeroSectionProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <section className="relative">
            <Swiper
                effect="fade"
                className="max-[1919px]:h-[760px] p-0 w-full -mb-[120px] bg-[#202331] before:content-[''] before:z-[3]
                    before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[100px] before:bg-gradient-to-t before:from-[#191b24] before:to-[#191b2400]"
                slidesPerView={1}
                modules={[EffectFade, Thumbs]}
                watchSlidesProgress
                thumbs={{ swiper: thumbsSwiper }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <HeroSlideContent movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                className="!absolute max-[1599px]:right-[30px] max-[1599px]:bottom-[172px] w-[450px]"
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                slidesPerView={6}
                spaceBetween={5}
            >
                
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}
                    className="relative !h-[45px] cursor-pointer border-2 border-solid border-white rounded-lg overflow-hidden transform scale-100"
                    >
                        <img src={movie.image} 
                            className="inset-0 w-full h-full object-cover bg-black"/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
  );
};
                
export default HeroSection;
