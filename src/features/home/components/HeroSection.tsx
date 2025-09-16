"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

interface HeroSectionProps {
    movie: {
        title: string;
        description: string;
        image: string;
        year: string;
        genre: string[];
    }
}

const HeroSection = ({movie}:  HeroSectionProps ) => {
    return (
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative container h-full flex items-center px-4 md:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                        {movie.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{movie.year}</span>
                        <span>•</span>
                        <span>{movie.genre.join(', ')}</span>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                        {movie.description}
                    </p>

                    <div className="flex gap-6 items-center">
                        <button
                            className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
                            aria-label="Play"
                        >
                            <FontAwesomeIcon icon={faPlay} className="text-white text-3xl ml-1" />
                        </button>
                        <button
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                            aria-label="Add to favorites"
                        >
                            <FontAwesomeIcon icon={faHeart} className="text-white text-xl" />
                        </button>

                        {/* Info icon */}
                        <button
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                            aria-label="More info"
                        >
                            <FontAwesomeIcon icon={faInfoCircle} className="text-white text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection