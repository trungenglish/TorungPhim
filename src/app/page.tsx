'use client';

import HeroSection from "@/features/home/components/HeroSection";
import {featuredMovie} from "@/constants/mockData";
import TopicSection from "@/features/home/components/TopicSection";
import { topics } from "@/features/home/constants/topics";
import { MovieData } from "@/features/home/constants/CountryMoviesCarousel";
import Community from "@/features/home/components/CommunityTable";
import { Comments } from "@/features/home/constants/comment";
import { Top10Movies as Top10MoviesData } from "@/features/home/constants/Top10Movies";
import Style1_CarouselVertical from "@/features/home/components/Style1_CarouselVertical";
import Style6_CarouselHorizontal from "@/features/home/components/Style6_CarouselHorizontal";
import Style4_CarouselVertical from "@/features/home/components/Style4_CarouselVertical";
import Style3_CarouselHorizontal from "@/features/home/components/Style3_CarouselHorizontal";
import Style5_CarouselHorizontal from "@/features/home/components/Style5_CarouselHorizontal";
import Style2_CarouselVertical from "@/features/home/components/Style2_CarouselVertical";
import { AnimeData } from "@/features/home/constants/anime";

export default function Home() {

  return (
    <>
      <HeroSection movie={featuredMovie}/>
      <div className="flex flex-col gap-12 pb-16 max-w-screen">
          <TopicSection topics={topics} />
          <Style6_CarouselHorizontal type="SERIES" movies={MovieData} />
          <Community comments={Comments} />
          <Style1_CarouselVertical type="SINGLE" movies={Top10MoviesData} id="1"/>
          <Style4_CarouselVertical type="SERIES" movies={Top10MoviesData} id="2"/>
          <Style3_CarouselHorizontal type="SERIES" movies={MovieData} id="3"/>
          <Style5_CarouselHorizontal type="UPCOMING" movies={MovieData} id="4"/>
          <Style2_CarouselVertical type="SERIES" movies={AnimeData} />
      </div>
    </>
  );
}
