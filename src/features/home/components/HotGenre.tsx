import ChartList from "@/components/common/ChartList";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HotGenres } from "../constants/IrtTable";

const HotGenre = () => {
    return (
        <div className="min-[1599px]:block hidden py-6 px-8 w-xs shrink-0 border-l border-solid border-[#fff1]">
            {/* Title Section */}
            <div className="leading-normal text-[16px] mb-5 font-medium uppercase tracking-[1.5px] inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faFolderPlus}  color="#ffd875"/>     
                <span>Thể loại hot</span>              
            </div>

            {/* Genre List */}
            <ChartList type="genre" data={HotGenres} />

        </div>
    )
}

export default HotGenre;