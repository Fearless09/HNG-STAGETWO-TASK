import Footer from "../components/Footer"
import Header from "../components/Header"
import Movies from "../components/Movies"

function Homepage({ data }) {
    return (
        <div>
            <Header data={data} />
            <Movies data={data.slice(0, 10)} />
            <Footer />
        </div>
    )
}

export default Homepage
