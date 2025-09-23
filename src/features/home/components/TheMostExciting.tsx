import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import ChartList from "@/components/common/ChartList";
import { TheMostExcitings } from "../constants/IrtTable";

const TheMostExciting = () => {
    return (
        <div className=" py-6 px-8 shrink-0 w-[420px] max-[1599px]:w-[400px]">

            {/* Title Section */}
            <div className="leading-normal text-[16px] mb-5 font-medium uppercase tracking-[1.5px] inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faClapperboard}  color="#ffd875"/>     
                <span>Sôi nổi nhất</span>              
            </div>

            {/* Chart List */}
            <ChartList type="movie" data={TheMostExcitings} />
        </div>
    )
}

export default TheMostExciting;