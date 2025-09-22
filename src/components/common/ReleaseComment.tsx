import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper/modules';
import Comment from './Comment';

interface ReleaseCommentProps {
    comments: {
        id: string; 
        name: string; 
        avatar: string; 
        comment: string; 
        movie: string}[]
}

const ReleaseComment = ({comments}: ReleaseCommentProps) => {
    return (
        <div className="relative">
            <div>
                <Swiper
                    className='max-h-[282px]'
                    direction='vertical'
                    slidesPerView={4}
                    speed={300}
                    modules={[Autoplay]}
                    autoplay={true}
                    spaceBetween={4}
                    loop={true}
                >
                    {comments.map((comment) => (
                        <SwiperSlide key={comment.id}>
                            <Comment
                                userName={comment.name}
                                avatar={comment.avatar}
                                comment={comment.comment}
                                movieName={comment.movie}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ReleaseComment;