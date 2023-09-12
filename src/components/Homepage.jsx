import Header from "./Header"
import Movies from "./Movies"

function Homepage({ data }) {
    return (
        <div>
            <Header data={data} />
            <Movies data={data.slice(1, 11)} />
        </div>
    )
}

export default Homepage
