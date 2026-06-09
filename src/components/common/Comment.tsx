import { faPlay, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

interface CommentProps {
    userName: string;
    avatar: string;
    comment: string;
    movieName: string;
}

const Comment = ({ userName, avatar, comment, movieName,  }: CommentProps) => {
    return (
        <Link href="/" 
        className="flex flex-col justify-center h-[68px] gap-1 pt-[0.6rem] pr-[0.8rem] pb-[0.6rem] text-[#aaa]
            pl-[calc(40px+1.6rem)] rounded-[0.6rem] overflow-hidden bg-[#0005] border boder-solid border-transparent"
        >
            {/* Avatar */}
            <div className="absolute top-4 left-[0.8rem] w-[40px] h-[40px] rounded-full shrink-0 overflow-hidden bg-black">
                <Image src={avatar} alt={userName} fill className="object-cover"/>
            </div>

            {/* User comment */}
            <div className="flex items-center text-xs gap-2">
                <div className="inline-flex items-center gap-2 shrink-0 ">
                    <span className="text-white">
                        {userName}
                        <FontAwesomeIcon icon={faVenus} className="ml-2" color="#ffd875"/>
                    </span>
                </div>

                <div className="grow line-clamp-1">
                    {comment}
                </div>
                
            </div>

            {/* Movie Name */}
            <div className="inline-flex items-center gap-1 text-xs leading-normal text-[#fff5]">
                <small className="text-[8px] text-yellow-300">
                    <FontAwesomeIcon icon={faPlay} />
                </small>
                <span className="line-clamp-1">
                    {movieName}
                </span>
            </div>
        </Link>
    )
}

export default Comment;