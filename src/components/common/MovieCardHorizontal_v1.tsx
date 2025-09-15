'use client'

import Link from 'next/link'
import MovieBadges from './MovieBadges'

interface MovieCardHorizontalV1Props {
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

const MovieCardHorizontal_v1 = ({ movie }: MovieCardHorizontalV1Props) => {
  return (
    <div>
      <Link href="#" className="block relative">
        {/* Movie Badges */}
        <MovieBadges type="SERIES" subtitleEp={movie.subtitleEp} dubbedEp={movie.dubbedEp} voicedEp={movie.voicedEp} />

        <img
          className="rounded-xl w-full"
          src={movie.image}
          alt={movie.name}
        />
      </Link>

      <div className="px-4 py-3 flex flex-col">
        <h4 className="font-medium">
          <Link 
            className="text-white hover:text-yellow-300 transition-colors duration-200" 
            title={movie.name} 
            href="#"
          >
            {movie.name}
          </Link>
        </h4>
        <h4 className="text-[#aaa] text-[0.9rem]">
          <Link 
            className="hover:text-white transition-colors duration-200"
            title={movie.enName} 
            href="#"
          >
            {movie.enName}
          </Link>
        </h4>
      </div>
    </div>
  )
}

export default MovieCardHorizontal_v1