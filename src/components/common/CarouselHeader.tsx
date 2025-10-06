import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type CarouselHeaderProps = {
    title: string;
    href: string;
    type: '1' | '2' 
};

const CarouselHeader = ({title, href, type}: CarouselHeaderProps) => {
    return (
        <div className="relative flex items-center justify-start gap-4 min-h-11 mb-[1.2rem]">
            <h2 className="text-[1.8em] leading-[1.4] font-semibold m-0 text-white"
                style={{ textShadow: "0 2px 1px rgba(0,0,0,.3)" }}
            >
                {title}
            </h2>

            {type === '1' && (
                <div>
                    <Link
                        href={href}
                        className="group flex items-center justify-center h-[30px] rounded-full border border-solid border-[#fff5] text-[14px] 
                            overflow-hidden transition-all duration-300 ease-in-out 
                            w-[30px] hover:w-[100px] relative"
                    >
                        {/* Text */}
                        <span
                            className="absolute left-3 opacity-0 group-hover:opacity-100 
                                group-hover:translate-x-0 translate-x-[-10px] group-hover:text-yellow-400
                                text-xs whitespace-nowrap transition-all duration-300 ease-in-out"
                        >
                            Xem thêm
                        </span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faAngleRight} size="lg" className="group-hover:text-yellow-400 pl-2.5 ml-auto mr-2 shrink-0" />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default CarouselHeader;