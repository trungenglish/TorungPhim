import ChartList from "@/components/common/ChartList";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TheMostExcitings } from "../constants/IrtTable";


const TheMostFavorite = () => {
    return (
        <div className="border-l border-solid border-[#fff1] max-[1599px]:w-[400px] shrink-0 py-6 px-8">
            
            {/* Title Section */}
            <div className="leading-normal text-[16px] mb-5 font-medium uppercase tracking-[1.5px] inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faHeartCircleCheck}  color="#ffd875"/>     
                <span>Yêu thích nhất</span>              
            </div>

            {/* Chart List */}
            <ChartList movie={TheMostExcitings} />
        </div>
    )
}

export default TheMostFavorite;