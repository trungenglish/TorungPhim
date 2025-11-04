import CarouselHeader from "@/components/common/CarouselHeader";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import Link from "next/link";
import InfoChips from "@/components/common/InfoChips";
import ActionButtons from "@/components/common/ActionButtons";
import GenreTags from "@/components/common/GenreTags";
import DescribeMovie from "@/components/common/DescribeMovie";

type Style2_CarouselVerticalProps = {
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
};

const Style2_CarouselVertical = ({ movies}: Style2_CarouselVerticalProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    
    return (
        <div className="relative animate-fade-in-up max-w-[1900px] max-[1919px]:px-5 max-[1919px]:py-0 w-full my-0 mx-auto">
            <CarouselHeader 
                title="Kho tàng anime mới nhất" 
                href="#" 
                type="2" 
            />

            <div className="pb-8">
                <Swiper
                    className="max-[1599px]:h-[460px] m-0 rounded-[1.2rem] w-full bg-[#202331]"
                    modules={[EffectFade, Thumbs]}
                    effect="fade"
                    watchSlidesProgress
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="absolute inset-0 w-full h-full bg-[#2f3346] ">
                                <Link href="/" />

                                {/*Image */}
                                <div className="absolute w-[calc(100%-500px)] h-full left-auto right-0 transform-none max-w-[1990px] top-0 [mask-image:linear-gradient(90deg,transparent_0,black_30%,black)]">
                                    <div className="relative w-full h-full">
                                        <img src={movie.bgImage} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover"/>
                                    </div>
                                </div>

                                {/*Content */}
                                <div className="relative h-full flex items-start cursor-grab w-full max-w-[1990px] my-0 mx-auto overflow-hidden z-[2]">
                                    <div className="relative z-[5] w-full max-[1599px]:p-8 max-[1599px]:max-w-[600px] ">

                                        <h3 className="text-[1.8em] mb-1 leading-[1.3] font-bold color-white line-clamp-1">
                                            <Link href="/" className="">{movie.name}</Link>
                                        </h3>

                                        <h3 className="text-[1.1em] leading-normal font-light mb-4">
                                            <Link href="/" className="text-yellow-300">{movie.enName}</Link>
                                        </h3>

                                        <InfoChips imdb={movie.imdb} 
                                            age={movie.age} release={movie.release} 
                                            part={movie.part}
                                            episode={movie.episode} />

                                        <GenreTags genres={movie.genres} />

                                        <DescribeMovie description={movie.description} />
                                        
                                        <ActionButtons />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
                </Swiper>

                <Swiper
                    className="relative z-[3] max-[1599px]:-mt-[50px] max-[1599px]:mx-auto max-[1599px]:mb-0 max-w-[1200px] w-[calc(100%-32px)]"
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    watchSlidesProgress
                    slidesPerView={15}
                    spaceBetween={16}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id} 
                            className="border-[3px] border-solid bg-transparent rounded-lg cursor-pointer 
                                border-transparent transition-colors duration-1000
                              [&.swiper-slide-thumb-active]:border-white"
                        >
                            <div className="block relative w-full h-0 pb-[150%] overflow-hidden rounded-lg bg-black">
                                <img loading="lazy" src={movie.image} alt="" 
                                    className="absolute w-full h-full inset-0 object-cover"/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
            
    )
}

export default Style2_CarouselVertical;