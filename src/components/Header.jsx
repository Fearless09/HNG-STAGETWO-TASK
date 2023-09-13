import NavBar from './NavBar'
import Hero from './Hero'

function Header({ data }) {
    const random = Math.floor(Math.random() * 11)
    return (
        data && data[random] && (
            <header className='p-5 min-h-[75vh] md:min-h-[90vh] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('https://image.tmdb.org/t/p/w500/${data[random].backdrop_path}')` }}>
                <NavBar />
                <Hero data={data[random]} />
            </header>
        )
    )
}

export default Header
