import Header from "../components/Header"
import Movies from "../components/Movies"

function Homepage({ data }) {
    return (
        <div>
            <Header data={data} />
            <Movies data={data.slice(1, 11)} />
        </div>
    )
}

export default Homepage
