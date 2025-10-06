import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Top10MovieCard from '@/components/common/Top10MovieCard';
import CarouselHeader from '@/components/common/CarouselHeader';
import ButtonNav_v1 from '@/components/common/ButtonNav_v1';

type Style4_CarouselVerticalProps = {
    id: string;
    type: 'SERIES' | 'SINGLE',
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

const Style4_CarouselVertical = ({type, movies, id}: Style4_CarouselVerticalProps) => {

    return (
        <div className="relative animate-fade-in-up max-w-[1900px] max-[1919px]:px-5 max-[1919px]:py-0 w-full my-0 mx-auto">
            {/* Title Section */}
            <CarouselHeader 
                title="Top 10 phim bộ hôm nay" 
                href="#" 
                type="2" 
            />

            {/* Content */}
            <div className="relative mb-5">
                <ButtonNav_v1 id={id}/>
                    
                <Swiper
                    slidesPerView={5}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.nav-prev-${id}`,
                        nextEl: `.nav-next-${id}`
                    }}
                    spaceBetween={16}
                    breakpoints={
                        {
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                            },
                            1600: {
                                slidesPerView: 6,
                            },
                        }
                    }
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide key={movie.id}>
                            <Top10MovieCard 
                                type={type} 
                                movie={movie}                                     
                                index={index} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    )
}

export default Style4_CarouselVertical;