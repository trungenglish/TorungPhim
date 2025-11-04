

type DescribeMovieProps = {
    description: string;
}

const DescribeMovie = ({ description }: DescribeMovieProps) => {
    return (
        <div className="text-[1em] leading-[1.6] text-white font-normal mb-8 line-clamp-3">
            {description}
        </div>
    )
}

export default DescribeMovie;