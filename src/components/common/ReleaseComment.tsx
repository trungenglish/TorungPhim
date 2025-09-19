import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper/modules';
import Comment from './Comment';


const ReleaseComment = () => {
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
                >
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>  
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ReleaseComment;