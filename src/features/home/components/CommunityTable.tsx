'use client'

import "swiper/css";
import "swiper/css/navigation";
import TheMostExciting from "./TheMostExciting";
import TheMostFavorite from "./TheMostFavorite";
import NewComments from "./NewComments";
import HotGenre from "./HotGenre";
import TopDiscussion from "./TopDiscussion";

type CommunityProps = {
    comments: {
        id: string;
        name: string;
        avatar: string;
        comment: string;
        poster: string;
        thumbnail: string;
    }[];
};

const Community = ({comments}: CommunityProps) => {
    return (
        <section className="animate-fade-in-up max-w-[1900px] relative max-[1919px]:px-5 w-full mx-auto my-0 ">
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