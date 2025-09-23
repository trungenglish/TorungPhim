'use client'

import { faChevronLeft, faChevronRight, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import CommentCard from "@/components/common/CommentCard";
import TheMostExciting from "./TheMostExciting";
import TheMostFavorite from "./TheMostFavorite";
import NewComments from "./NewComments";
import HotGenre from "./HotGenre";

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
        <section className="animate-fade-in-up relative px-5 w-full my-0 mx-auto">
            <div className="flex flex-col mb-4 border border-solid rounded-xl border-[#fff2]">

                {/*Top discussion*/}
                <div className="max-[1279px]:hidden py-6 px-8 border-b border-solid border-[#fff2]">
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
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: ".sw-prev",
                                nextEl: ".sw-next",
                            }}
                            loop={true}
                            autoplay={{delay: 6000}}
                            speed={300}
                            breakpoints={{
                                1279: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                                },
                                1280: {
                                slidesPerView: 4,
                                spaceBetween: 16,
                                },
                                1400: {
                                slidesPerView: 5,
                                spaceBetween: 16,
                                },
                                1600: {
                                    slidesPerView: 6,
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
                <div className="flex items-stretch justify-between">
                   <TheMostExciting />
                   <TheMostFavorite />
                   <HotGenre />
                   <NewComments />
                </div>
            </div>
        </section>
    )
}

export default Community;