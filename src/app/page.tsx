'use client';

import HeroSection from "@/features/home/components/HeroSection";
import {featuredMovie} from "@/constants/mockData";
import TopicSection from "@/features/home/components/TopicSection";
import { topics } from "@/features/home/constants/topics";
import CountryMoviesCarousel from "@/features/home/components/CountryMoviesCarousel";
import { MovieData } from "@/features/home/constants/CountryMoviesCarousel";

export default function Home() {

  
  return (
    <>
      <HeroSection movie={featuredMovie}/>
      <div className="flex flex-col gap-12 pb-16 max-w-screen">
          <TopicSection topics={topics} />
          <CountryMoviesCarousel movies={MovieData} />
      </div>
    </>
  );
}
