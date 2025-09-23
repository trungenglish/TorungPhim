import Link from "next/link";
import MovieBadges from "./MovieBadges";

interface Top10MovieCardProps {
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

const Top10MovieCard = ({type, movie, index = 0}: Top10MovieCardProps) => {
    return (
        <div className="relative w-full flex flex-col gap-3">
            <Link className=" relative bg-transparent w-full h-0 pb-[150%] overflow-hidden rounded-lg"
                href="/"
            >
                {/**
                * TODO(mask): toasify when hover over the card
                * @priority Medium
                */}
                {/* Mask */}
                <div className="absolute inset-0 z-[1]"> 
                </div>   

                {/* Badges */}
                <MovieBadges type={type} position="center"
                    dubbedEp={movie.dubbedEp}
                    voicedEp={movie.voicedEp}
                    subtitleEp={movie.subtitleEp}
                />

                {/* Image */}
                <img src={movie.image} 
                    alt={movie.name} 
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover ${index % 2 === 0 ? 'clip-poster' : 'clip-poster-reverse'}`}
                />   
            </Link>

            <div className="relative flex flex-col gap-[0.2rem] pl-[66px] text-left min-h-[42px]">
                <div className="absolute top-0 left-0 w-[50px] leading-none text-center text-[4.2em] font-extrabold italic
                    bg-gradient-to-tr from-[#FECF59] to-[#FFF1CC] bg-clip-text text-transparent">
                        1
                </div>
                <h4 className="mb-0 font-normal leading-normal text-white text-[1em] line-clamp-1">
                    <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">
                        {movie.name}
                    </Link>
                </h4>
                <div className="mt-0 text-[0.9em] text-[#aaa] line-clamp-1 leading-normal font-normal">
                    {movie.enName}
                </div>
                <div className="flex items-center ">
                    <div className="text-white mr-0 text-[0.9em] inline ">
                        <strong>T13</strong>
                    </div>
                    <div className="relative text-white ml-2.5 pl-2.5 mr-0 text-[0.9em] inline
                        before:content-[''] 
                        before:absolute 
                        before:w-[5px] before:h-[5px] 
                        before:bg-white/20 
                        before:rounded-full 
                        before:left-[-3px] 
                        before:top-[calc(50%-3px)]">
                        2025
                    </div>
                    <div className="relative text-white ml-2.5 pl-2.5 mr-0 text-[0.9em] inline
                        before:content-[''] 
                        before:absolute 
                        before:w-[5px] before:h-[5px] 
                        before:bg-white/20 
                        before:rounded-full 
                        before:left-[-3px] 
                        before:top-[calc(50%-3px)]">
                        2h 10m
                    </div>
                    <div className="relative text-white ml-2.5 pl-2.5 mr-0 text-[0.9em] inline
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
    )
}

export default Top10MovieCard;