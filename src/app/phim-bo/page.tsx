import MovieList from "@/features/movie-list/components/MovieList"
import { Top10Movies as Top10MoviesData } from "@/features/home/constants/Top10Movies";

const PhimBoPage = () => {
    return (
        <MovieList title="Phim bộ" type="SERIES" movies={Top10MoviesData} />
    )
}

export default PhimBoPage;