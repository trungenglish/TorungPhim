'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight ,faFilter } from "@fortawesome/free-solid-svg-icons";
import { filterSections } from "../constants/filter";
import MovieCardVertical_v1 from "@/components/common/v1/MovieCardVertical_v1";

type MovieListProps = {
    title: string;
    type: 'SERIES' | 'SINGLE';
    movies: {
        id: string;
        name: string;
        enName: string;
        image: string;
        subtitleEp?: number;
        dubbedEp?: number;
        voicedEp?: number;
    }[];
};

const MovieList = ({ title, type, movies }: MovieListProps) => {
    return (    
        <div className="mt-8 max-[1599px]:pt-28 pb-40 min-h-[calc(100vh-400px)]">
            <div className="flex flex-col gap-[50px] ">
                <div className="relative max-w-[1900px] max-[1919px]:px-5 max-[1919px]:py-0 mx-auto w-full my-0">
                    {/* Title Section */}
                    <div className="flex items-center justify-start gap-4 relative min-h-11 mb-[1.2rem]">
                        <h3 className="max-[1599px]:text-[1.8em] leading-[1.4] font-semibold m-0 text-white ">
                            {title}
                        </h3>
                    </div>

                    {/* Filter section */}
                    <div className="mb-8">
                        <div className="pr-3 py-0 pl-2 h-[30px] text-white cursor-pointer font-medium rounded-[0.3rem] inline-flex items-center gap-2">
                            <FontAwesomeIcon icon={faFilter} />
                            <span>Bộ lọc</span>
                        </div>

                        <div className="rounded-xl border border-solid border-[#ffffff10] pt-4 -mt-4 mb-12">
                            {filterSections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className={`flex items-start justify-between gap-8 py-2 px-4 ${
                                        index !== filterSections.length - 1 ? "border-b border-dashed border-[#ffffff10]" : ""
                                    }`}
                                >
                                    <div className="w-[140px] py-[0.3rem] px-0 text-right shrink-0 font-medium text-white">
                                        {section.label}
                                    </div>
                                    <div className="flex grow flex-wrap justify-start gap-2">
                                        {section.options.map((option) => (
                                            <button
                                                key={`${section.id}-${option.value}`}
                                                className="text-[16px] mt-1 py-[0.3rem] px-[0.75rem] text-white border border-solid border-[#fff3] rounded-[0.4rem] cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                                                type="button"
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="px-4 py-6 flex items-start justify-between gap-8">
                                <div className="w-[140px]" />
                                <div className="grow">
                                    <button className="text-white cursor-pointer rounded-4xl text-sm font-medium inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary min-h-10" type="button">
                                        Lọc kết quả
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                    <button type="button" className="cursor-pointer border border-[rgb(255_255_254_/_50%)] ml-2 rounded-4xl text-sm font-medium inline-flex items-center justify-center gap-2 px-6 py-2 opacity-100 min-h-10 ">
                                        Đóng
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-[1599px]:gap-4 grid grid-cols-8">
                        {movies.map((movie) => (
                            <MovieCardVertical_v1 key={movie.id} type={type} movie={movie} />
                        ))}
                    </div>

                    {/* Pagination Section */}
                    <div className="gap-4 w-full inline-flex justify-center items-center my-16 mx-0">
                        <div className="inline-flex gap-2 items-center">
                            <button className="bg-[#2f3346] w-[50px] h-[50px] rounded-full inline-flex justify-center items-center gap-2.5 text-[16px] font-medium">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <div className="h-[50px] py-0 px-5 rounded-full bg-[#2f3346] text-white text-[15px] inline-flex items-center gap-2">
                                <div>Trang</div>
                                <input type="number" value={1} className="border border-solid border-[#ffffff10] w-[60px] h-8 rounded-sm bg-transparent text-center font-semibold"></input>
                                <div>/ 116</div>
                            </div>
                            <button className="bg-[#2f3346] w-[50px] h-[50px] rounded-full inline-flex justify-center items-center gap-2.5 text-[16px] font-medium">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieList;