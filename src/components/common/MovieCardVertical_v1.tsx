'use client';

import Link from "next/link";
import MovieBadges from "./MovieBadges";


interface MovieCardVerticalV1Props {
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
}

const MovieCardVertical_v1 = ({type, movie}: MovieCardVerticalV1Props) => {
    return (
        <div className="relative w-full flex flex-col gap-3">
            <Link className="relative bg-transparent w-full h-0 pb-[150%] overflow-hidden rounded-lg"
                href="/"
            >
                <MovieBadges type={type}
                    position="center"
                    dubbedEp={movie.dubbedEp}
                    voicedEp={movie.voicedEp}
                    subtitleEp={movie.subtitleEp}
                />

                <img alt="Movie" 
                    src="https://static.nutscdn.com/vimg/300-0/93be0bf28612e50e582e915fecbe3204.jpg" 
                    loading="lazy" 
                    className="absolute inset-0 w-full h-full object-cover"
                /> 
            </Link> 

            <div className="min-h-[42px] text-center">
                <h4 className="mb-0 font-normal leading-normal text-white text-[1em] line-clamp-1">
                    <Link href="/">
                        Lòng tin
                    </Link>                    
                </h4>

                <h4 className="text-[0.9em] mt-[5px] text-[#aaa] line-clamp-1 font-normal leading-normal">
                    <Link href="/">Trust</Link>
                </h4>
            </div>       
        </div>
    )
}

export default MovieCardVertical_v1;