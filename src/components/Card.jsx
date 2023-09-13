import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'

function Card({ data }) {
    const [color, setColor] = useState(false)
    return (
        <div data-testid='movie-card'>
            <div className="relative">
                <div className="bg-[#00000040] absolute top-2 w-full py-1 px-5 text-end">
                    <button onClick={() => setColor(!color)}><FaHeart color={color ? 'red' : 'white'} size={'1.35rem'} /></button>
                </div>
                <Link to={`/movies/${data.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt="" className="w-full rounded-sm" data-testid='movie-poster' />
                </Link>
            </div>
            <p className="text-[#9CA3AF] my-2 text-base uppercase"><span>{data.original_language}</span>, <span data-testid='movie-release-date'>{data.release_date.split('-')[0]}</span></p>
            <Link to={`/movies/${data.id}`}>
                <h3 className="text-xl font-medium my-2" data-testid='movie-title'>{data.original_title}</h3>
            </Link>
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-3'>
                    <img src="/imdb.svg" className='w-[2.25rem]' alt="" />
                    <p>{data.vote_average} / 10</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/grape.svg" className='w-[1.25rem]' alt="" />
                    <p>{data.vote_average * 10}%</p>
                </div>
            </div>
            <p className="text-[#9CA3AF] my-2 text-base">Release Date (UTC): <span data-testid='movie-release-date'>{data.release_date}</span></p>
            <p>{data.id}</p>
        </div>
    )
}

export default Card
