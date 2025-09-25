import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselHeader from "@/components/common/CarouselHeader";
import ButtonNav_v1 from "@/components/common/ButtonNav_v1";
import { useSwiperNavigation } from "@/hooks/useSwiper";
import MovieCardHorizontal_v2 from "@/components/common/MovieCardHorizontal_v2";

interface Style3_CarouselHorizontalProps {
    type: 'SERIES' | 'SINGLE';
    movies: {
        id: string;
        name: string;
        enName: string;
        image: string;
        subtitleEp?: number;
        dubbedEp?: number;
        voicedEp?: number;
    }[];
    id: string;
}

const Style3_CarouselHorizontal = ({type, movies, id}: Style3_CarouselHorizontalProps) => {
    const { isBeginning, isEnd, handleSlideChange, handleSwiperInit } = useSwiperNavigation();

    return (
        <div className="relative animate-fade-in-up max-w-[1900px] max-[1919px]:px-5 max-[1919px]:py-0 w-full mx-auto my-0">
            {/* Title Section */}
            <CarouselHeader 
                title="Phim điện ảnh mới cóong" 
                href="#" 
                type="1" 
            />

            {/* Content */}
            <div className="relative">
                {/* Navigation Buttons */}
                <ButtonNav_v1 id={id} 
                    isEnd={isEnd} 
                    isBeginning={isBeginning} 
                />

                {/* Carousel */}
                <Swiper 
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.nav-prev-${id}`,
                        nextEl: `.nav-next-${id}`
                    }}
                    spaceBetween={16}
                    onSlideChange={handleSlideChange}
                    onSwiper={handleSwiperInit}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCardHorizontal_v2 type={type} movie={movie}/> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Style3_CarouselHorizontal;