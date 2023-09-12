import { useParams } from "react-router-dom"

function MovieDetails() {
    let movieID = useParams().id

    console.log(movieID)
    return (
        <div>
            hello
        </div>
    )
}

export default MovieDetails
