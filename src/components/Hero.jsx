import { FaCirclePlay } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Hero({ data }) {

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
                    <p className="text-lg">{data.overview}</p>
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
