import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'
import imdbSvg from '../assets/imdb.svg'
import grapeSvg from '../assets/grape.svg'

function Card({ data }) {
    const [color, setColor] = useState(false)

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
        <div data-testid='movie-card'>
            <div className="relative">
                <div className="bg-[#00000040] absolute top-2 w-full py-1 px-5 text-end">
                    <button onClick={() => setColor(!color)}><FaHeart color={color ? 'red' : 'white'} size={'1.35rem'} /></button>
                </div>
                <Link to={`/movies/${data.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt="" className="w-full rounded-sm" data-testid='movie-poster' />
                </Link>
            </div>
            <p className="text-[#9CA3AF] my-2 text-base uppercase"><span>{data.original_language}</span>, <span>{data.release_date.split('-')[0]}</span></p>
            <Link to={`/movies/${data.id}`}>
                <h3 className="text-xl font-medium my-2" data-testid='movie-title'>{data.original_title}</h3>
            </Link>
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-3'>
                    <img src={imdbSvg} className='w-[2.25rem]' alt="" />
                    <p>{data.vote_average} / 10</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={grapeSvg} className='w-[1.25rem]' alt="" />
                    <p>{data.vote_average * 10}%</p>
                </div>
            </div>
            <p className="text-[#9CA3AF] mt-2 text-base">Release Date: <span data-testid='movie-release-date'>{data.release_date}</span></p>
            {data.genre_ids && (
                data.genre_ids.map((genre, index) => (
                    <button className="px-2 py-1 text-sm text-red-800 me-2 mt-2 uppercase font-medium rounded border-2 border-red-800 hover:bg-red-800 hover:text-white" key={index}>{genreObj[genre]}</button>
                ))
            )}
        </div>
    )
}

export default Card
