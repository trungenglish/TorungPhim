import ButtonNav_v1 from "@/components/common/ButtonNav_v1";
import CarouselHeader from "@/components/common/CarouselHeader";
import MovieCardHorizontal_v1 from "@/components/common/MovieCardHorizontal_v1";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


type Style5_CarouselHorizontalProps = {
    type: 'SERIES' | 'SINGLE' | 'UPCOMING';
    id: string;
    movies: {
        id: string;
        name: string;
        enName: string;
        image: string;
    }[];
};

const Style5_CarouselHorizontal = ({type, movies, id}: Style5_CarouselHorizontalProps) => {
    return (
        <div className="relative animate-fade-in-up max-w-[1900px] z-10 max-[1919px]:py-0 max-[1919px]:px-5 w-full mx-auto my-0">
            <CarouselHeader 
                title="Phim sắp chiếu" 
                href="#" 
                type="2" 
            />

            <div className="relative">
                <ButtonNav_v1 id={id} />

                <Swiper
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.nav-prev-${id}`,
                        nextEl: `.nav-next-${id}`
                    }}
                    spaceBetween={16}
                    breakpoints={{
                        1600: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCardHorizontal_v1 type="UPCOMING" movie={movie}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Style5_CarouselHorizontal;