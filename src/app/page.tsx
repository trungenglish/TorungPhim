'use client';

import HeroSection from "@/features/home/components/HeroSection";
import {featuredMovie} from "@/constants/mockData";
import TopicSection from "@/features/home/components/TopicSection";
import { topics } from "@/constants/topics";
import CountryMoviesCarousel from "@/features/home/components/CountryMoviesCarousel";

export default function Home() {
  return (
    <>
      <HeroSection movie={featuredMovie}/>
      <div className="flex flex-col gap-12 pb-16 max-w-screen">
          <TopicSection topics={topics} />
          <CountryMoviesCarousel />
        {/*<MovieSection title="Phim Thịnh Hành" movies={trendingMovies} />*/}
        {/*<MovieSection title="Phim Bộ Mới" movies={tvSeries} />*/}
        {/*<MovieSection title="Anime Hay" movies={animeMovies} />*/}
      </div>
    </>
  );
}
