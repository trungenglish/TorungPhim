import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ButtonNav_v2Props {
    id: string;
}

const ButtonNav_v2 = ({id}: ButtonNav_v2Props) => {
    return (
        <div>
            <style jsx>{`
                .swiper-button-disabled {
                    opacity: 0 !important;
                    pointer-events: auto !important;
                    cursor: default !important;    
                }
            `}</style>
            <button className={`nav-next-${id} cursor-pointer absolute z-10 top-[calc(50%-28px)] transform -translate-y-1/2 translate-x-full w-10 h-10 bg-white text-white rounded-full 
                p-0 flex items-center justify-center right-5 opacity-100 shadow-[0_0_20px_5px_#0003] transition-opacity duration-200`}>
                <FontAwesomeIcon icon={faChevronRight} size="sm" color="#000"/>
            </button>

            <button className={`nav-prev-${id} cursor-pointer absolute z-10 top-[calc(50%-28px)] right-auto left-5 opacity-100 bg-white text-white w-10 h-10 rounded-full p-0 flex items-center 
                justify-center shadow-[0_0_20px_5px_#0003] transform -translate-y-1/2 -translate-x-full transition-opacity duration-200`}>
                <FontAwesomeIcon icon={faChevronLeft} size="sm" color="#000"/>
            </button>
        </div>
    )
}

export default ButtonNav_v2;