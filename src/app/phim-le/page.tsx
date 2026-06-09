import MovieList from "@/features/movie-list/components/MovieList"
import { Top10Movies as Top10MoviesData } from "@/features/home/constants/Top10Movies";

const PhimLePage = () => {
    return (
        <MovieList title="Phim lẻ" type="SINGLE" movies={Top10MoviesData} />
    )
}

export default PhimLePage;