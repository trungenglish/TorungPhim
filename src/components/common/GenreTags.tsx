import Link from "next/link";

type GenreTagsProps = {
 
    genres: {
        id: string;
        name: string;
    }[];
};

const GenreTags = ({ genres }: GenreTagsProps) => {

    return (
        <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-6">
            {genres.map((genre) => (
                <Link key={genre.id} href="/" className="inline-flex items-center bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white text-xs rounded-[0.33rem]">
                    {genre.name}
                </Link>
            ))}
        </div>
    )
};

export default GenreTags;