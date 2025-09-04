"use client";

import { Play, Plus, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  imageUrl: string;
}

const movies: Movie[] = [
  { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", imageUrl: "" },
  { id: 2, title: "The Matrix", year: 1999, rating: 8.7, genre: "Action", imageUrl: "" },
  { id: 3, title: "Interstellar", year: 2014, rating: 8.6, genre: "Drama", imageUrl: "" },
  { id: 4, title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime", imageUrl: "" },
  { id: 5, title: "The Godfather", year: 1972, rating: 9.2, genre: "Crime", imageUrl: "" },
  { id: 6, title: "Shawshank Redemption", year: 1994, rating: 9.3, genre: "Drama", imageUrl: "" },
  { id: 7, title: "Avengers: Endgame", year: 2019, rating: 8.4, genre: "Action", imageUrl: "" },
  { id: 8, title: "Parasite", year: 2019, rating: 8.5, genre: "Thriller", imageUrl: "" },
];

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative aspect-[2/3] bg-muted">
        {/* Movie poster placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{movie.title.charAt(0)}</span>
          </div>
        </div>
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="flex space-x-2">
            <Button size="icon" variant="secondary">
              <Play className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-white font-medium">{movie.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg leading-tight mb-1 line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
      </CardContent>
    </Card>
  );
}

interface MovieGridProps {
  title: string;
  movies: Movie[];
}

export function MovieGrid({ title, movies }: MovieGridProps) {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedSections() {
  return (
    <div className="space-y-8">
      <MovieGrid title="Trending Now" movies={movies.slice(0, 6)} />
      <MovieGrid title="Popular Movies" movies={movies.slice(2, 8)} />
      <MovieGrid title="New Releases" movies={movies.slice(1, 7)} />
    </div>
  );
}