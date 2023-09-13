import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

function Search() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // https://api.themoviedb.org/3/movie/{movie_id}api_key=0687dcb49bdbc30b3f8f64eed71b321a

    const { title } = useParams()

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=0687dcb49bdbc30b3f8f64eed71b321a`)
            .then(response => response.json())
            .then(response => {
                setData(response.results)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            });
    }, [title])

    // console.log(data)

    return (
        <>
            {loading && <Loading />}
            <div className='bg-gray-900 p-5 mb-16'>
                <NavBar />
            </div>
            <div className='container mx-auto p-5'>
                {data.length > 0 ? (
                    <>
                        <h1 className='text-xl font-medium mb-10'>Showing the results of <span className='uppercase'>'{title}'</span></h1>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                            {data.slice(0, 10).map((data) => (
                                <Card data={data} key={data.id} />
                            ))}
                        </div>
                    </>
                ) : <h1 className='text-lg text-center font-medium mb-10'>No results found for <span className='uppercase'>'{title}'</span></h1>}
            </div>

            <Footer />
        </>
    )
}

export default Search
