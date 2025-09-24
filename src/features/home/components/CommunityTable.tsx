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
import TopDiscussion from "./TopDiscussion";

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
                <TopDiscussion comments={comments} />

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