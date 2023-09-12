import React from 'react'
import { Link } from 'react-router-dom'

function SearchResult({ data }) {
  
    return (
        <>
            {data.map(data => (
                <Link to={`/movies/${data.id}`} key={data.id} className='block px-3 py-1 hover:bg-slate-100'>{data.original_title}, ({data.release_date.split('-')[0]})</Link>
            ))}
        </>
    )
}

export default SearchResult
