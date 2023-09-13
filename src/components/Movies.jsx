import { GrFormNext } from 'react-icons/gr'
import Card from "./Card"

function Movies({ data }) {
    // console.log(data)
    return (
        <div className="container mx-auto p-5 mt-14">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl">Featured Movie</h2>
                <a href="#" className="text-[#BE123C] font-medium flex items-center">See more <GrFormNext /></a>
            </div>

            {data && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                    {data.map((data) => (
                        <Card data={data} key={data.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Movies
