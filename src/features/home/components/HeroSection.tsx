"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import HeroSlideContent from "./HeroSlideContent";
import Image from "next/image";

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
        genres: {
            id: string;
            name: string;
        }[];
        description: string;
    }[];
}

const HeroSection = ({ movies }: HeroSectionProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <section className="relative">
            <Swiper
                effect="fade"
                className="h-[760px] p-0 w-full -mb-[120px] bg-[#202331] before:content-[''] before:z-[3]
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
                className="!absolute right-[30px] bottom-[172px] w-[450px]"
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
                        <Image src={movie.image}
                            alt={movie.name}
                            fill
                            className="object-cover bg-black" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
