import { FaCirclePlay } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Hero({ data }) {
    const genreObj = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    }
    
    return (
        <div className="container mx-auto">
            {data && (
                <div className="w-full max-w-[500px] text-white" id={data.id}>
                    <h1 className="text-5xl font-semibold mt-14 mb-8 md:mt-32 md:mb-16">{data.original_title}</h1>
                    <div className="flex items-center justify-between mb-7">
                        <div className='flex items-center gap-3'>
                            <img src="/imdb.svg" className='w-[2.5rem]' alt="" />
                            <p>{data.vote_average} / 10</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src="/grape.svg" className='w-[1.5rem]' alt="" />
                            <p>{data.vote_average * 10}%</p>
                        </div>
                    </div>
                    {data.genre_ids && (
                        data.genre_ids.map((genre, index) => (
                            <button className="px-2 py-1 text-sm text-red-800 me-2 mt-2 uppercase font-medium rounded border-2 border-red-800 hover:bg-red-800 hover:text-white" key={index}>{genreObj[genre]}</button>
                        ))
                    )}
                    <p className="text-lg mt-5">{data.overview}</p>
                    <Link to={`/movies/${data.id}`} className="bg-red-800 hover:bg-red-900 w-max rounded-lg text-base py-2 px-4 my-10 flex items-center justify-center gap-3">
                        <FaCirclePlay />
                        <span>WATCH TRAILER</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Hero
