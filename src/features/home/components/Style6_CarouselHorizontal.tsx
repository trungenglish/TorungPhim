"use client"

import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import { Titles } from "../constants/CountryMoviesCarousel"
import MovieCardHorizontal_v1 from "@/components/common/v1/MovieCardHorizontal_v1"
import ButtonNav_v2 from "@/components/common/v2/ButtonNav_v2"


type Style6_CarouselHorizontalProps = {
  type: 'SERIES' | 'SINGLE' | 'UPCOMING';
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

const Style6_CarouselHorizontal = ({type, movies}: Style6_CarouselHorizontalProps) => {
    
    return (
        <section className="relative animate-fade-in-up max-w-[1900px] z-10 max-[1919px]:py-0 max-[1919px]:px-5 w-full mx-auto my-0">
          
          <div className="rounded-2xl p-8 gap-8 bg-[linear-gradient(0deg,#282b3a00_20%,#282b3a)] flex justify-between flex-col items-stretch mt-0">
            
            {Titles.map((title) => (
              <div key={title.id} className="relative bg-transparent p-0 flex items-center gap-4 justify-between">
              
                <div className="relative z-[3] flex flex-col w-[200px] pr-6 pl-2 gap-6 shrink-[unset] grow ">
                  <div className={`text-[1.8em] leading-[1.3] font-bold ${title.bgGradient} bg-clip-text text-transparent `}>
                    {title.name}
                  </div>

                  <div>
                    <Link href="#" className="inline-flex items-center gap-2">
                      <span>Xem thêm</span>
                      <FontAwesomeIcon icon={faAngleRight} size="lg"/>
                    </Link>
                  </div>
                </div>

                <div className="relative z-[3] w-[calc(100%-200px)]">
                  <div className="relative">
                    {/* Navigation Buttons */}
                    <ButtonNav_v2 id={title.id}/>

                    {/* Carousel */}
                    <Swiper
                      slidesPerView={3}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: `.nav-prev-${title.id}`,
                        nextEl: `.nav-next-${title.id}`
                      }}
                      spaceBetween={16}
                      speed={300}
                      breakpoints={{
                        1600: {
                          slidesPerView: 5,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                          <MovieCardHorizontal_v1 type={type} movie={movie}/>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                  </div>
                </div>
              
              </div>
            ))}
          </div>
        </section>
    )
}

export default Style6_CarouselHorizontal