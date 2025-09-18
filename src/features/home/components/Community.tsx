'use client'

import { faChevronLeft, faChevronRight, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import CommentCard from "@/components/common/CommentCard";


interface CommunityProps {
    comments: {
        id: string;
        name: string;
        avatar: string;
        comment: string;
        poster: string;
        thumbnail: string;
    }[];
}

const Community = ({comments}: CommunityProps) => {
    return (
        <section className="relative px-5 w-full mx-0 my-auto">
            <div className="flex flex-col mb-4 border border-solid rounded-xl border-[#fff2]">

                {/*Top discussion*/}
                <div className="py-6 px-8 border-b border-solid border-[#fff2]">
                    <div className="inline-flex items-center gap-2 mb-5 font-medium tracking-[1.5px] text-base leading-[1.5] uppercase">
                        <FontAwesomeIcon icon={faMedal} size="sm" color="#ffd875"/>
                        <span>Top bình luận</span>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons */}
                        <div className="absolute z-10 w-full top-1/2 -translate-y-1/2 flex justify-between">
                             <button className="sw-prev flex items-center justify-center p-0 border border-solid border-[#fff3] rounded-full w-10 h-10 cursor-pointer bg-[#1a1d29]/80 hover:bg-[#1a1d29] transition-colors -ml-12">
                                 <FontAwesomeIcon icon={faChevronLeft} size="sm" />
                             </button>
                             <button className="sw-next flex items-center justify-center p-0 border border-solid border-[#fff3] rounded-full w-10 h-10 cursor-pointer bg-[#1a1d29]/80 hover:bg-[#1a1d29] transition-colors -mr-12">
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
                                slidesPerView: 5,
                                spaceBetween: 16,
                                },
                                1600: {
                                slidesPerView: 5,
                                spaceBetween: 16,
                                },
                            }}
                        >
                            {comments.map(comment => (
                                <SwiperSlide key={comment.id}>
                                    <CommentCard comment={comment} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/*In real time Table*/}
                <div className="relative">
                   
                </div>
            </div>
        </section>
    )
}

export default Community;