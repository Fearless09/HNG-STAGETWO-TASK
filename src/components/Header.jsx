import NavBar from './NavBar'
import Hero from './Hero'

function Header({ data }) {

    return (
        data && data[0] && (
            <header className='p-5 h-[80vh]' style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://image.tmdb.org/t/p/w500/${data[0].backdrop_path}')`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                <NavBar data={data} />
                <Hero data={data[0]} />
            </header>
        )
    )
}

export default Header
