import CarouselHeader from "@/components/common/CarouselHeader";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

interface Style2_CarouselVerticalProps {
    type: 'SERIES' | 'SINGLE';
    movies: {
        id: string;
        name: string;
        enName: string;
        bgImage: string;
        image: string;
        imdb: string;
        age: string;
        release: string;
        part: string;
        episode: number;
        type: string;
        description: string;
    }[];
}

const Style2_CarouselVertical = ({type, movies}: Style2_CarouselVerticalProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    
    return (
        <div className="relative animate-fade-in-up max-w-[1900px] max-[1919px]:px-5 max-[1919px]:py-0 w-full my-0 mx-auto">
            <CarouselHeader 
                title="Kho tàng anime mới nhất" 
                href="#" 
                type="2" 
            />

            <div className="pb-8 ">
                <Swiper
                    className="max-[1599px]:h-[460px] m-0 rounded-[1.2rem] w-full bg-[#202331]"
                    modules={[EffectFade, Thumbs]}
                    effect="fade"
                    watchSlidesProgress
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="absolute inset-0 w-full h-full bg-[#2f3346] ">
                                <Link href="/" >
                                </Link>

                                {/*Image */}
                                <div className="absolute w-[calc(100%-500px)] h-full left-auto right-0 transform-none max-w-[1990px] top-0 [mask-image:linear-gradient(90deg,transparent_0,black_30%,black)]">
                                    <div className="relative w-full h-full">
                                        <img src={movie.bgImage} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover"/>
                                    </div>
                                </div>

                                {/*Content */}
                                <div className="relative h-full flex items-start cursor-grab w-full max-w-[1990px] my-0 mx-auto overflow-hidden z-[2]">
                                    <div className="relative z-[5] w-full max-[1599px]:p-8 max-[1599px]:max-w-[600px] ">

                                        <h3 className="text-[1.8em] mb-1 leading-[1.3] font-bold color-white line-clamp-1">
                                            <Link href="/" className="">{movie.name}</Link>
                                        </h3>

                                        <h3 className="text-[1.1em] leading-normal font-light mb-4">
                                            <Link href="/" className="text-yellow-300">{movie.enName}</Link>
                                        </h3>

                                        <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-3">
                                            <div className="inline-flex items-center bg-transparent border border-solid border-yellow-300 text-white text-xs leading-6 font-medium 
                                                px-[0.4rem] py-0 rounded-[0.33rem] shrink-0 
                                                relative before:content-['IMDb'] before:text-[#f0d25c] before:font-medium before:pr-1 before:text-[10px] before:leading-none">
                                                <span>{movie.imdb}</span>
                                            </div>

                                            <div className="flex items-center text-xs bg-white font-medium overflow-hidden text-black rounded-[0.33rem] leading-[26px] py-0 px-2 shrink-0">
                                                <span>
                                                    <strong>{movie.age}</strong>
                                                </span>
                                            </div>

                                            <div className="inline-flex items-center border border-solid border-white bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white rounded-[0.33rem] text-xs">
                                                <span>{movie.release}</span>
                                            </div>

                                            <div className="inline-flex items-center border border-solid border-white bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white rounded-[0.33rem] text-xs">
                                                <span>Phần {movie.part}</span>
                                            </div>

                                            <div className="inline-flex items-center border border-solid border-white bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white rounded-[0.33rem] text-xs">
                                                <span>Tập {movie.episode}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-6">
                                            <Link href="/" className="inline-flex items-center bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white text-xs rounded-[0.33rem]">
                                                {movie.type}
                                            </Link>

                                            <Link href="/" className="inline-flex items-center bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white text-xs rounded-[0.33rem]">
                                                {movie.type}
                                            </Link>

                                            <Link href="/" className="inline-flex items-center bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white text-xs rounded-[0.33rem]">
                                                {movie.type}
                                            </Link>

                                            <Link href="/" className="inline-flex items-center bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white text-xs rounded-[0.33rem]">
                                                {movie.type}
                                            </Link>

                                            <Link href="/" className="inline-flex items-center bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white text-xs rounded-[0.33rem]">
                                                {movie.type}
                                            </Link>
                                        </div>

                                        <div className="text-[1em] leading-[1.6] text-white font-normal mb-8 line-clamp-3">
                                            Năm 198 của Kỷ nguyên Mặt trời ở Tokyo, các đội cứu hỏa đặc biệt đang chiến đấu chống lại một hiện tượng gọi là sự đốt cháy tự phát của con người, 
                                            nơi con người bị biến thành địa ngục sống gọi là "Địa ngục". Trong khi các Địa ngục là trường hợp đốt 
                                            cháy tự phát của con người thế hệ đầu tiên, các thế hệ sau có khả năng điều khiển ngọn lửa trong khi 
                                            vẫn giữ được hình dạng con người. Shinra Kusakabe, một thanh niên có biệt danh Dấu chân ác quỷ vì 
                                            khả năng đốt cháy đôi chân của anh ta theo ý muốn, gia nhập Công ty hỏa lực đặc biệt 8, bao gồm những 
                                            người dùng ngọn lửa khác khi họ làm việc để dập tắt mọi địa ngục mà họ gặp phải. Khi một phe đang tạo 
                                            ra Infeals xuất hiện, Shira bắt đầu phát hiện ra sự thật đằng sau một đám cháy bí ẩn gây ra cái chết 
                                            của gia đình anh mười hai năm trước.
                                        </div>
                                        
                                        <div className="flex items-center gap-8">

                                            <Link href="/"
                                                className="flex items-center justify-center w-[70px] h-[70px] rounded-full shrink-0 text-black opacity-95 
                                                            bg-gradient-to-tr from-[#FECF59] to-[#FFF1CC] 
                                                            [box-shadow:0_5px_10px_5px_rgba(255,218,125,0.1)]
                                                            transition-all duration-300 
                                                            hover:[box-shadow:0_8px_20px_8px_rgba(255,218,125,0.4)]"
                                                >
                                                <FontAwesomeIcon icon={faPlay} size="xl" />
                                            </Link>

                                            <div className="inline-flex items-center border-2 border-solid border-[#ffffff10] rounded-4xl overflow-hidden transition-colors duration-300 hover:border-white">
                                                <Link href="/" className="group relative gap-[0.3rem] pl-[0.4rem] h-[50px] min-w-[68px] flex justify-center items-center flex-col py-0 px-[0.2rem]">
                                                    <div className="w-5 h-5 shrink-0 leading-0 group-hover:text-yellow-300 transition-colors duration-300">
                                                        <FontAwesomeIcon icon={faHeart} size="lg"/>
                                                    </div>
                                                </Link>
                                                <Link href="/" className="group flex justify-center items-center flex-col py-0 px-[0.2rem] gap-[0.3rem] relative 
                                                    border-l-2 border-solid border-[#ffffff10] pr-[0.4rem] h-[50px] min-w-[68px]">
                                                    <div className="w-5 h-5 shrink-0 leading-0 group-hover:text-yellow-300 transition-colors duration-300">
                                                        <FontAwesomeIcon icon={faInfoCircle} size="lg"/>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
                </Swiper>

                <Swiper
                    className="relative z-[3] max-[1599px]:-mt-[50px] max-[1599px]:mx-auto max-[1599px]:mb-0 max-w-[1200px] w-[calc(100%-32px)]"
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    watchSlidesProgress
                    // freeMode={true}
                    slidesPerView={15}
                    spaceBetween={16}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id} 
                            className="border-[3px] border-solid bg-transparent rounded-lg cursor-pointer 
                                border-transparent transition-colors duration-1000
                              [&.swiper-slide-thumb-active]:border-white"
                        >
                            <div className="block relative w-full h-0 pb-[150%] overflow-hidden rounded-lg bg-black">
                                <img loading="lazy" src={movie.image} alt="" 
                                    className="absolute w-full h-full inset-0 object-cover"/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
            
    )
}

export default Style2_CarouselVertical;