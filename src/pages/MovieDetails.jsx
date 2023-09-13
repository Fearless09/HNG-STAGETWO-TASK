import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import Loading from "../components/Loading"
import { FaPlay } from 'react-icons/fa';
import Footer from "../components/Footer";

function MovieDetails() {
    const { movie_id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0687dcb49bdbc30b3f8f64eed71b321a`)
            .then(response => response.json())
            .then(response => {
                setData(response)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            });
    }, [movie_id])

    function utcDate(date) {
        if (date) {
            return new Date(date).toUTCString();
        }
    }

    return (
        <>
            {loading && <Loading />}
            <div className='bg-gray-900 p-5'>
                <NavBar />
            </div>
            {data.backdrop_path && (

                <div className="relative">
                    <img src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} className="w-full max-h-[80vh]" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#00000059] text-white flex flex-col items-center justify-center">
                        <button className="p-7 rounded-full bg-[#ffffff40]">
                            <FaPlay color="white" size={'54px'} />
                        </button>
                        <h1 className="text-2xl font-medium mt-3">Watch Trailer</h1>
                    </div>
                </div>
            )}
            <div className="container mx-auto p-5">
                {data.genres && (
                    data.genres.map((genre, index) => (
                        <button className="px-2 py-1 text-red-800 me-2 uppercase font-medium rounded border-2 border-red-800 hover:bg-red-800 hover:text-white" key={index}>{genre.name}</button>
                    ))
                )}
                <h1 className="text-4xl font-medium text-[#404040] mt-8">{data.original_title}</h1>
                <h1 data-testid='movie-title' className="text-2xl font-medium text-[#404040] mt-1 mb-8">({data.title})</h1>
                <div className="text-xl font-medium my-5">
                    <h3 data-testid='movie-release-date' className="mb-3">{utcDate(data.release_date)}</h3>
                    <h3 data-testid='movie-runtime'>{data.runtime} minutes</h3>
                </div>
                <p data-testid='movie-overview' className="max-w-[600px] text-lg">{data.overview}</p>
                <div className="text-lg font-medium my-5">
                    <h3 className="mb-3">Language: <span className="uppercase">{data.original_language}</span></h3>
                    <h3 className="mb-3">Status: {data.status}</h3>
                    <h3>Tagline: {data.tagline}</h3>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MovieDetails
