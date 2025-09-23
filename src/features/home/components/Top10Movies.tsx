import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Top10MovieCard from '@/components/common/Top10MovieCard';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwiperNavigation } from '@/hooks/useSwiper';


interface Top10MoviesProps {
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
}

const Top10Movies = ({type, movies}: Top10MoviesProps) => {
    const { isBeginning, isEnd, handleSlideChange, handleSwiperInit } = useSwiperNavigation();

    return (
        <div className="relative max-w-[1900px] w-full px-5 my-0 mx-autooverscroll-x-contain">
            {/* Title Section */}
            <div className="relative flex items-center justify-start gap-4 min-h-11 mb-[1.2rem]">
                <h2 className="text-[1.8em] leading-[1.4] font-semibold m-0 text-white"
                    style={{ textShadow: "0 2px 1px rgba(0,0,0,.3)" }}
                >
                    Top 10 phim {type === 'SERIES' ? 'bộ' : 'lẻ'} hôm nay
                </h2>
            </div>

            {/* Content */}
            <div>
                <div className="relative mb-5">
                    <div>
                        <button className={`nav-next-${type} absolute z-10 right-0 top-[calc(50%-27px)] transform translate-x-full -translate-y-1/2 p-1.5 
                            bg-transparent opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ${isEnd ? 'hidden' : ''}`}>
                        <FontAwesomeIcon icon={faChevronRight} size="3x"/>
                        </button>
                        
                        <button className={`nav-prev-${type} absolute z-10 right-auto left-0 top-[calc(50%-27px)] transform -translate-x-full -translate-y-1/2 
                            p-1.5 bg-transparent opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ${isBeginning ? 'hidden' : ''}`}>
                        <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
                        </button>
                    </div>
                    <Swiper
                        slidesPerView={5}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: `.nav-prev-${type}`,
                            nextEl: `.nav-next-${type}`
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={handleSwiperInit}
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
            
        </div>
    )
}

export default Top10Movies;