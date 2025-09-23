import { faAngleRight, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiper";
import MovieCardVertical_v1 from "@/components/common/MovieCardVertical_v1";

interface ThemeMoviesCarouselVerticalProps {
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

const ThemeMoviesCarouselVertical = ({type, movies}: ThemeMoviesCarouselVerticalProps) => {
    const { 
        isBeginning, isEnd, 
        handleSlideChange, 
        handleSwiperInit 
    } = useSwiperNavigation();

    return (
        <div className="relative animate-fade-in-up max-w-[1900px] max-[1919px]:px-5 max-[1919px]:py-0 w-full mx-auto my-0">
            {/* Title Section */}
            <div className="relative flex items-center justify-start gap-4 min-h-11 mb-[1.2rem]">
                <h2 className="text-[1.8em] leading-[1.4] font-semibold m-0 text-white"
                    style={{ textShadow: "0 2px 1px rgba(0,0,0,.3)" }}
                >
                    Phim điện ảnh mới cóong
                </h2>
                <div>
                    <Link
                        href="#"
                        className="group flex items-center justify-center h-[30px] rounded-full border border-solid border-[#fff5] text-[14px] 
                                    overflow-hidden transition-all duration-300 ease-in-out 
                                    w-[30px] hover:w-[100px] relative"
                        >
                        {/* Text */}
                        <span
                            className="absolute left-3 opacity-0 group-hover:opacity-100 
                                    group-hover:translate-x-0 translate-x-[-10px] group-hover:text-yellow-400
                                    text-xs whitespace-nowrap transition-all duration-300 ease-in-out"
                        >
                            Xem thêm
                        </span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faAngleRight} size="lg" className="group-hover:text-yellow-400 pl-2.5 ml-auto mr-2 shrink-0" />
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                {/* Navigation Buttons */}
                <div>
                    <button className={`nav-next absolute z-10 right-0 top-[calc(50%-27px)] transform translate-x-full -translate-y-1/2 p-1.5 
                        bg-transparent opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ${isEnd ? 'hidden' : ''}`}>
                    <FontAwesomeIcon icon={faChevronRight} size="3x"/>
                    </button>
                    
                    <button className={`nav-prev absolute z-10 right-auto left-0 top-[calc(50%-27px)] transform -translate-x-full -translate-y-1/2 
                        p-1.5 bg-transparent opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ${isBeginning ? 'hidden' : ''}`}>
                    <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
                    </button>
                </div>

                {/* Carousel */}
                <Swiper 
                    slidesPerView={7}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.nav-prev`,
                        nextEl: `.nav-next`
                    }}
                    spaceBetween={16}
                    onSlideChange={handleSlideChange}
                    onSwiper={handleSwiperInit}
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

export default ThemeMoviesCarouselVertical;