import HeroSection from "@/features/home/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection  />
      <div className="space-y-8 pb-16">
        {/*<MovieSection title="Phim Thịnh Hành" movies={trendingMovies} />*/}
        {/*<MovieSection title="Phim Bộ Mới" movies={tvSeries} />*/}
        {/*<MovieSection title="Anime Hay" movies={animeMovies} />*/}
      </div>
    </>
  );
}
