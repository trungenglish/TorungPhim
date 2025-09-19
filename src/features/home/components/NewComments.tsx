import { faBolt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReleaseComment from "@/components/common/ReleaseComment"


const NewComments = () => {
    return (
        <div className="py-6 px-8 border-l border-solid border-[#fff1] grow max-w-none">
            {/* Title Section */}
            <div className="leading-normal text-[16px] mb-5 font-medium uppercase tracking-[1.5px] inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faBolt}  color="#ffd875"/>     
                <span>Bình luận mới</span>              
            </div>

            {/* Comment List */}
            <ReleaseComment/>

        </div>
    )
}

export default NewComments