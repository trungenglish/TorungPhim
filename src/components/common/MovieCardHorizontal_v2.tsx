import Link from "next/link";
import MovieBadges from "./MovieBadges";

interface MovieCardHorizontal_v2Props {
    type: 'SERIES' | 'SINGLE';
    movie: {
      id: string
      name: string
      enName: string
      image: string
      subtitleEp?: number
      dubbedEp?: number
      voicedEp?: number
    }
    index?: number
}

const MovieCardHorizontal_v2 = ({type, movie, index = 0}: MovieCardHorizontal_v2Props) => {
    return (
        <div className="relative w-full">
            <Link href="/"
                className="relative block pb-[45%] w-full h-0 rounded-lg overflow-hidden">
                <MovieBadges type={type}
                    position="1/2-center"
                    dubbedEp={movie.dubbedEp}
                    voicedEp={movie.voicedEp}
                    subtitleEp={movie.subtitleEp}
                />

                <img src={movie.image} 
                    alt={movie.name} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                />               
            </Link> 

            <div className="relative px-5 py-4 gap-5 flex items-start flex-row justify-between z-[2]">
                <div className="-mt-[60px] w-20 shrink-0 ">
                    <Link href="/"
                        className="relative pb-[150%] shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] w-full h-0 rounded-lg block overflow-hidden">
                            <img src={movie.image} 
                                alt={movie.name} 
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                    </Link>
                </div>

                <div className="grow">
                   <h4 className="font-medium mb-[0.4rem] leading-normal text-[1em] text-white line-clamp-1">
                        <Link href="/">
                            {movie.name}
                        </Link>
                    </h4> 
                    <h4 className="font-normal text-[0.9em] mt-[5px] text-[#aaa] line-clamp-1 leading-normal ">
                        <Link href="/">
                            {movie.enName}
                        </Link>
                    </h4>

                    <div className="flex items-center ">
                        <div className="text-[#aaa] mr-0 text-[0.9em] inline ">
                            <strong>T13</strong>
                        </div>
                        <div className="relative text-[#aaa] ml-2.5 pl-2.5 mr-0 text-[0.9em] inline
                            before:content-[''] 
                            before:absolute 
                            before:w-[5px] before:h-[5px] 
                            before:bg-white/20 
                            before:rounded-full 
                            before:left-[-3px] 
                            before:top-[calc(50%-3px)]">
                            2025
                        </div>
                        <div className="relative text-[#aaa] ml-2.5 pl-2.5 mr-0 text-[0.9em] inline
                            before:content-[''] 
                            before:absolute 
                            before:w-[5px] before:h-[5px] 
                            before:bg-white/20 
                            before:rounded-full 
                            before:left-[-3px] 
                            before:top-[calc(50%-3px)]">
                            2h 10m
                        </div>
                        <div className="relative text-[#aaa] ml-2.5 pl-2.5 mr-0 text-[0.9em] inline
                            before:content-[''] 
                            before:absolute 
                            before:w-[5px] before:h-[5px] 
                            before:bg-white/20 
                            before:rounded-full 
                            before:left-[-3px] 
                            before:top-[calc(50%-3px)]">
                            CAM
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieCardHorizontal_v2;