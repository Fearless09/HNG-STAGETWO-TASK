import React, { useState } from 'react'
import { PiTelevision } from 'react-icons/pi'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult'

function NavBar({ data }) {
    const [searchBox, setSearchBox] = useState(false)
    const [searchData, setSearchData] = useState('')
    function changeData(e) {
        setSearchData(
            data.filter(data => data.original_title.toLowerCase().includes(e.target.value.toLowerCase()))
        )

        showBox()
    }
    function submitData(e) {
        e.preventDefault()
        showBox()
    }
    function hideBox() {
        setSearchBox(false)
    }
    function showBox() {
        setSearchBox(true)
    }
    // https://api.themoviedb.org/3/movie/{movie_id}api_key=0687dcb49bdbc30b3f8f64eed71b321a
    return (
        <nav className='container mx-auto'>
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <Link to={'/'} className='flex items-center gap-3'>
                    <PiTelevision size={'2.5rem'} color='#BE123C' />
                    <p className='text-2xl text-white'>MovieBox</p>
                </Link>
                {/* SEARCH */}
                <div className='hidden md:flex border-2 border-white rounded-lg relative'>
                    <input type="search" className='w-96 outline-none bg-transparent text-white p-2' placeholder='What do you want?' onChange={changeData} />
                    <button className='p-3' type='submit' onClick={submitData}><BsSearch color='white' /></button>
                    {searchBox && (
                        <div className='absolute top-14 max-h-72 py-3 w-full rounded-md bg-white overflow-x-hidden overflow-y-auto'>
                            <div className='text-end px-3'>
                                <button className='bg-slate-950 hover:bg-slate-800 text-white rounded p-1' onClick={hideBox}><IoClose size={'14px'} /></button>
                            </div>
                            {searchData.length === 0 ?
                                <p className='text-center'>Movies not found</p>
                                : <SearchResult data={searchData} />
                            }
                        </div>
                    )}
                </div>
                {/* LOGIN */}
                <span className='flex items-center gap-4 text-white'>
                    <a href="#" className='text-lg'>Sign In</a>
                    <button className='p-3 rounded-full bg-red-800 hover:bg-red-900' ><GiHamburgerMenu /></button>
                </span>

            </div>
            {/* SEARCH */}
            <div className='md:hidden flex border-2 border-white rounded-lg relative mt-3'>
                <input type="search" className='w-full outline-none bg-transparent text-white p-2' placeholder='What do you want?' onChange={changeData} />
                <button className='p-3' type='submit' onClick={submitData}><BsSearch color='white' /></button>
                {searchBox && (
                    <div className='absolute top-14 py-3 max-h-72 w-full rounded-md bg-white overflow-x-hidden overflow-y-auto'>
                        <div className='text-end px-3'>
                            <button className='bg-slate-950 hover:bg-slate-800 text-white rounded p-1' onClick={hideBox}><IoClose size={'14px'} /></button>
                        </div>
                        {searchData.length === 0 ?
                            <p className='text-center'>Movies not found</p>
                            : <SearchResult data={searchData} />
                        }
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
