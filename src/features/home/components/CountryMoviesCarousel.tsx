"use client"

import { faAngleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from "swiper/modules"

interface CountryMoviesCarouselProps {
   
}

const CountryMoviesCarousel = () => {
    return (
        <section className="px-5 ">
          <div className="bg-[#272a38] rounded-xl flex justify-between items-stretch mt-0 p-8">

            <div className="flex items-center justify-between gap-4">

              <div className="flex flex-col gap-6 pr-6 pl-2 shrink-0 grow max-w-[200px]">
                <div 
                    className="text-2xl font-bold bg-gradient-to-r from-[#674196] via-white to-white bg-clip-text text-transparent"
                  >
                    Phim Hàn Quốc mới
                </div>
                <div>
                  <Link href="#">
                    <span>Xem toàn bộ</span>
                    <FontAwesomeIcon icon={faAngleRight} size="sm"/>
                  </Link>
                </div>
              </div>

              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 12 },
                  640: { slidesPerView: 2, spaceBetween: 14 },
                  1024: { slidesPerView: 3, spaceBetween: 16 },
                  1440: { slidesPerView: 4, spaceBetween: 20 },
                }}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>Slide 1</SwiperSlide>

                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                
              </Swiper>
              
            </div>


            <div className="">

            </div>
            <div className="">
              
            </div>
          </div>
        </section>
    )
}

export default CountryMoviesCarousel