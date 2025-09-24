import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ButtonNav_v1Props {
    id: string;
    isEnd: boolean;
    isBeginning: boolean;
}

const ButtonNav_v1 = ({id, isEnd, isBeginning}: ButtonNav_v1Props) => {
    return (
        <div>
            <button className={`nav-next-${id} absolute z-10 right-0 top-[calc(50%-27px)] transform translate-x-full -translate-y-1/2 p-1.5 
                bg-transparent opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ${isEnd ? 'hidden' : ''}`}
            >
                <FontAwesomeIcon icon={faChevronRight} size="3x"/>
            </button>   
                        
            <button className={`nav-prev-${id} absolute z-10 right-auto left-0 top-[calc(50%-27px)] transform -translate-x-full -translate-y-1/2 
                p-1.5 bg-transparent opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ${isBeginning ? 'hidden' : ''}`}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
            </button>
        </div>
    )
}

export default ButtonNav_v1;