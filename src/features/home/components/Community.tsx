'use client'

import { faChevronLeft, faChevronRight, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import CommentCard from "@/components/common/CommentCard";

const Community = () => {
    return (
        <section className="px-5 ">
            <div className="flex flex-col border border-solid rounded-xl border-[#fff2]">

                {/*Top discussion*/}
                <div className="py-6 px-8 border-b border-solid border-[#fff2]">
                    <div className="inline-flex items-center gap-2 mb-5 font-medium tracking-[1.5px] text-base leading-[1.5] uppercase">
                        <FontAwesomeIcon icon={faMedal} size="sm" color="#ffd875"/>
                        <span>Top bình luận</span>
                    </div>
                    <div>

                    </div>
                </div>

                {/*In real time Table*/}
                <div className="relative">
                     {/* Navigation Buttons */}
                    <div className="absolute">
                        <button className="flex items-center justify-center p-0 border border-solid border-[#fff3] rounded-full w-10 h-10 cursor-pointer">
                            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
                        </button>
                        <button className="flex items-center justify-center p-0 border border-solid border-[#fff3] rounded-full w-10 h-10 cursor-pointer">
                            <FontAwesomeIcon icon={faChevronRight} size="sm" />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".sw-prev",
                            nextEl: ".sw-next",
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
                        <SwiperSlide>
                            <CommentCard />
                        </SwiperSlide>    
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Community;