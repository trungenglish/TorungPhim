"use client"

import { faAngleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import { Titles } from "../constants/CountryMoviesCarousel"
import MovieCardHorizontalV1 from "@/components/common/MovieCardHorizontal_v1"

interface CountryMoviesCarouselProps {
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

const CountryMoviesCarousel = ({movies}: CountryMoviesCarouselProps) => {
    return (
        <section className="animate-fade-in-up relative z-10 px-5 overflow-hidden">
          <div className="bg-[linear-gradient(0deg,#282b3a00_20%,#282b3a)] rounded-xl flex flex-col justify-between items-stretch mt-0 p-8 gap-8">
            {Titles.map((title) => (
              <div key={title.id} className="flex items-center justify-between gap-4 relative">
                
                {/* Title Section */}
                <div className="flex flex-col gap-6 pr-6 pl-2 shrink-0 grow max-w-[200px]">
                    <div 
                       className={`text-2xl font-bold ${title.bgGradient} bg-clip-text text-transparent `}
                      >
                        {title.name}
                    </div>
                  <div>
                    <Link href="#" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
                      <span>Xem toàn bộ</span>
                      <FontAwesomeIcon icon={faAngleRight} size="sm"/>
                    </Link>
                  </div>
                </div>

                {/* Carousel Section */}
                <div className="flex-1 min-w-0">
                  {/* Navigation Buttons */}
                  <div className="absolute top-[40%] -translate-y-1/2 z-20 flex justify-between w-full">
                    <button className={`nav-prev-${title.id} left-0 w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 text-gray-600 hover:text-gray-800 -ml-6 cursor-pointer`}>
                      <FontAwesomeIcon icon={faChevronLeft} size="sm"/>
                    </button>
                    
                    <button className={`nav-next-${title.id} right-0 w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 text-gray-600 hover:text-gray-800 mr-48 cursor-pointer`}>
                      <FontAwesomeIcon icon={faChevronRight} size="sm"/>
                    </button>
                  </div>
                  
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView="auto"         
                    spaceBetween={16}
                    slidesPerGroup={1}
                    speed={400}
                    navigation={{
                      prevEl: `.nav-prev-${title.id}`,
                      nextEl: `.nav-next-${title.id}`
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                      },
                      640: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                      },
                      1024: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                      },
                      1600: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                      },
                    }}
                  >
                    {movies.map(movie => (
                      <SwiperSlide className="max-w-[390px]" key={movie.id}>
                        <MovieCardHorizontalV1 movie={movie} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}

export default CountryMoviesCarousel