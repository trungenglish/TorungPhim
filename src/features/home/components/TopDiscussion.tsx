import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CommentCard from "@/components/common/CommentCard";

interface TopDiscussionProps {
    comments: {
        id: string;
        name: string;
        avatar: string;
        comment: string;
        poster: string;
        thumbnail: string;
    }[];
}

const TopDiscussion = ({comments}: TopDiscussionProps) => {
    return (
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
    )
}

export default TopDiscussion;