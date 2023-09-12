
function Card({ data }) {
    // console.log(data)
    return (
        <div className="container" data-testid='movie-card'>
            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" className="w-full rounded-sm" data-testid='movie-poster' />
            <p className="text-[#9CA3AF] my-2 text-base uppercase"><span>{data.original_language}</span>, <span data-testid='movie-release-date'>{data.release_date}</span></p>
            <h3 className="text-xl font-medium my-2" data-testid='movie-title'>{data.original_title}</h3>
            <div className='flex items-center gap-3 my-2'>
                <img src="/imdb.svg" alt="" />
                <p>{data.vote_average} / 10</p>
            </div>
        </div>
    )
}

export default Card
