'use client'

import { faCircleDown, faCircleUp, faInfinity, faMessage, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

interface CommentCardProps {
    comment: {
        id: string;
        name: string;
        avatar: string;
        comment: string;
        poster: string;
        thumbnail: string;
    };
}

const CommentCard = ({comment}: CommentCardProps) => {
    return ( 
        <div className="relative flex items-stretch gap-4 p-5 rounded-lg overflow-hidden bg-[#1a1d29]">
           {/* Poster Background */}
           <div className="absolute inset-0">
                {/* Background Image */}
                <Image src={comment.poster} alt="background" 
                    fill className="object-cover blur-sm opacity-40 scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0c1118]"></div>
           </div>

           {/* Content */}
           <div className="relative flex flex-col gap-3 z-[1]">
                {/* Avatar */}
                <div className="border-2 border-solid w-[50px] h-[50px] rounded-full relative overflow-hidden">
                    <Image src={comment.avatar} alt={comment.name} 
                    fill className="object-cover"
                    />
                </div>

                {/* Comment Info */}
                <div className="flex flex-col gap-1.5 grow">

                     {/* Comment Author*/}
                    <div className="inline-flex mb-0 gap-2 items-center">
                        {/* Tag */}
                        {/** TODO: add condition to show tag if user is admin or vip **/}
                        <div className="px-1 flex items-center justify-center h-4 text-[10px] uppercase border border-solid font-medium rounded-sm">
                            vip
                        </div>
                        {/* Role */}
                        <span>
                            {comment.name}
                            <FontAwesomeIcon icon={faInfinity} className="ml-2" color="#ffd875"/>
                        </span>
                    </div>

                    {/* Comment */}
                    <div className="text-sm mb-[3px] text-[#fff8] line-clamp-2 min-h-[42px]">
                        {comment.comment}
                    </div>

                    {/* Icons Like, Dislike, Reply */}
                    <div className="relative flex items-center gap-4 text-xs mt-2 mb-0">
                        <div className="inline-flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircleUp} />
                            <span>4</span>
                        </div>
                        <div className="inline-flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircleDown} />
                            <span>4</span>
                        </div>
                        <div className="inline-flex items-center gap-1">
                            <FontAwesomeIcon icon={faMessage} />
                            <span>4</span>
                        </div>
                    </div>
                </div>
           </div>

           {/* Thumbnail */}    
           <div className="absolute top-5 right-5 shrink-0 w-[50px] z-10">
                <Link href="/" className="block relative rounded-[0.3rem] w-full pb-[150%] h-0 overflow-hidden bg-black">
                    <Image src={comment.thumbnail} 
                        alt={`Xem phim ${comment.name}`}
                        fill className="object-cover hover:scale-110 transition-transform duration-300" />
                </Link>
           </div>
        </div>
    )
}

export default CommentCard;