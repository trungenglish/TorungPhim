"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import InfoChips from "@/components/common/InfoChips";
import GenreTags from "@/components/common/GenreTags";
import DescribeMovie from "@/components/common/DescribeMovie";

type HeroSlideContentProps = {
    movie: {
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
        genres: {
            id: string;
            name: string;
        }[];
        description: string;
    };
};

const HeroSlideContent = ({ movie }: HeroSlideContentProps) => {
    return (
        <div className="absolute inset-0 w-full h-full bg-[#202331]">
            <div className="absolute w-full h-full inset-0 bg-center bg-cover opacity-20 blur-[80px]"
                style={{ backgroundImage: `url("${movie.bgImage}")` }}
            ></div>

            <div className="absolute w-full max-w-[1900px] top-0 h-[calc(100%-60px)] 
                            animate-cover-fade [-webkit-mask-image:linear-gradient(0deg,transparent_0,black_20%,black_80%,transparent)]">
                <div className="relative w-full h-full block animate-hide-show 
                                [-webkit-mask-image:linear-gradient(90deg,transparent_10px,rgba(0,0,0,.2)_15%,black_40%,black_80%,transparent_99%)]">
                    <img
                        loading="lazy"
                        src={movie.bgImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover visible transition-[opacity,filter] duration-500 ease-in"
                    />
                </div>
            </div>

            <div className="relative flex items-end cursor-grab w-full max-w-[1900px] h-[calc(100%-100px)] my-0 mx-auto overflow-hidden z-[2]">
                <div className="relative z-[5] w-full animate-slide-content pt-0 px-[30px] pb-[60px] max-w-[600px]">
                    <div className="mb-4">
                        <Link href="/">
                            <img src={movie.image} alt="" 
                                className="max-w-[500px] max-h-[130px]"/>
                        </Link>
                    </div>
                    {/* <h3 className="text-[3em] leading-[1.3] mb-2 font-bold [text-shadow:0_2px_1px_rgba(0,0,0,0.3)] text-white">
                    <Link href="/">Ám ảnh kinh hoàng: Nghi lễ cuối cùng</Link>
                    </h3> */}
                    <h3 className="text-[1.1em] leading-normal font-light mb-4">
                        <Link href="/" className="text-yellow-300">
                            {movie.name}
                        </Link>
                    </h3>

                    <InfoChips imdb={movie.imdb} 
                        age={movie.age} 
                        release={movie.release} 
                        part={movie.part} 
                        episode={movie.episode} />

                    <GenreTags genres={movie.genres} /> 

                    <DescribeMovie description={movie.description} />

                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="flex items-center justify-center w-[70px] h-[70px] rounded-full shrink-0 text-black opacity-95 bg-gradient-to-tr from-[#FECF59] to-[#FFF1CC] [box-shadow:0_5px_10px_5px_rgba(255,218,125,0.1)] transition-all duration-300 hover:[box-shadow:0_8px_20px_8px_rgba(255,218,125,0.4)]"
                        >
                            <FontAwesomeIcon icon={faPlay} size="xl" />
                        </Link>

                        <div className="inline-flex items-center border-2 border-solid border-[#ffffff10] rounded-4xl overflow-hidden transition-colors duration-300 hover:border-white">
                            <Link
                                href="/"
                                className="group relative gap-[0.3rem] pl-[0.4rem] h-[50px] min-w-[68px] flex justify-center items-center flex-col py-0 px-[0.2rem]"
                            >
                                <div className="w-5 h-5 shrink-0 leading-0 group-hover:text-yellow-300 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faHeart} size="lg" />
                                </div>
                            </Link>
                            <Link
                                href="/"
                                className="group flex justify-center items-center flex-col py-0 px-[0.2rem] gap-[0.3rem] relative border-l-2 border-solid border-[#ffffff10] pr-[0.4rem] h-[50px] min-w-[68px]"
                            >
                                <div className="w-5 h-5 shrink-0 leading-0 group-hover:text-yellow-300 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlideContent;


