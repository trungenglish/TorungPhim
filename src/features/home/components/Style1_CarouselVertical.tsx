import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MovieCardVertical_v1 from "@/components/common/MovieCardVertical_v1";
import CarouselHeader from "@/components/common/CarouselHeader";
import ButtonNav_v1 from "@/components/common/ButtonNav_v1";

type Style1_CarouselVerticalProps = {
    type: 'SERIES' | 'SINGLE',
    id: string;
    movies: {
        id: string;
        name: string;
        enName: string;
        image: string;
        subtitleEp?: number;
        dubbedEp?: number;
        voicedEp?: number;
    }[];
};

const Style1_CarouselVertical = ({type, movies, id}: Style1_CarouselVerticalProps) => {

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
                <ButtonNav_v1 id={id}/>

                {/* Carousel */}
                <Swiper 
                    slidesPerView={7}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.nav-prev-${id}`,
                        nextEl: `.nav-next-${id}`
                    }}
                    spaceBetween={16}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCardVertical_v1 type={type} movie={movie}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Style1_CarouselVertical;