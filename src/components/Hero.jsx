import { FaCirclePlay } from 'react-icons/fa6'

function Hero({ data }) {

    return (
        <div className="container mx-auto">
            {data && (
                <div className="w-full max-w-[500px] text-white" id={data.id}>
                    <h1 className="text-5xl font-semibold mt-14 mb-8 md:mt-32 md:mb-16">{data.original_title}</h1>
                    <div className='flex items-center gap-3 mb-7'>
                        <img src="/imdb.svg" alt="" />
                        <p>{data.vote_average} / 10</p>
                    </div>
                    <p className="text-lg">{data.overview}</p>
                    <button className="bg-red-800 hover:bg-red-900 rounded-lg text-base py-2 px-4 my-10 flex items-center justify-center gap-3">
                        <FaCirclePlay />
                        <span>WATCH TRAILER</span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default Hero
