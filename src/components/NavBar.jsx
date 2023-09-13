import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import SearchResult from './SearchResult'

function NavBar() {
    const [searchBox, setSearchBox] = useState(false)
    const [searchData, setSearchData] = useState('')
    const navigate = useNavigate()

    function submitData(e) {
        e.preventDefault()
        if (searchData) {
            navigate(`/search/${searchData}`)
        }
    }

    return (
        <nav className='container mx-auto'>
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <Link to={'/'} className='flex items-center gap-3'>
                    <img src="/logo.svg" alt="" className='hidden md:block' />
                    <img src="/tv.svg" alt="" className='md:hidden' />
                </Link>
                {/* SEARCH */}
                <div className='hiden md:flex border-2 border-white rounded-lg relative'>
                    <input type="search" className='md:w-80 lg:w-96 outline-none bg-transparent text-white p-2' placeholder='What do you want?' onChange={(e) => setSearchData(e.target.value)} onKeyPress={(e) => {if (e.key === 'Enter') submitData(e)}} />
                    <button className='p-3' type='submit' onClick={submitData}><BsSearch color='white' /></button>
                </div>
                {/* LOGIN */}
                <span className='flex items-center gap-4 text-white'>
                    <a href="#" className='hidden md:block text-lg'>Sign In</a>
                    <button className='p-3 rounded-full bg-red-800 hover:bg-red-900' ><GiHamburgerMenu /></button>
                </span>

            </div>
        </nav>
    )
}

export default NavBar
