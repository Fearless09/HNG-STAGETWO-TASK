import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function MovieDetails() {
    const { movie_id } = useParams()
    const [data, setData] = useState([])
    // {https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
    // https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png}

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0687dcb49bdbc30b3f8f64eed71b321a`)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <Link to={'/'}>Home</Link>
            hello
        </div>
    )
}

export default MovieDetails
