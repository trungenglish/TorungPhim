'use client';

import HeroSection from "@/features/home/components/HeroSection";
import {featuredMovie} from "@/constants/mockData";
import TopicSection from "@/features/home/components/TopicSection";
import { topics } from "@/constants/topics";

export default function Home() {
  return (
    <>
      <HeroSection movie={featuredMovie}/>
      <div className="space-y-8 pb-16 max-w-screen">
          <TopicSection topics={topics} />
        {/*<MovieSection title="Phim Thịnh Hành" movies={trendingMovies} />*/}
        {/*<MovieSection title="Phim Bộ Mới" movies={tvSeries} />*/}
        {/*<MovieSection title="Anime Hay" movies={animeMovies} />*/}
      </div>
    </>
  );
}
