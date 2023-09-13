import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div className="container mx-auto mt-16 mb-10 p-5">
                <div className="flex items-center justify-center gap-12">
                    <a href=""><FaFacebookSquare className='hover:text-gray-700' size={'30px'} /></a>
                    <a href=""><FaInstagram className='hover:text-gray-700' size={'30px'} /></a>
                    <a href=""><FaTwitter className='hover:text-gray-700' size={'30px'} /></a>
                    <a href=""><FaYoutube className='hover:text-gray-700' size={'30px'} /></a>
                </div>
                <div className="flex items-center justify-center gap-5 sm:gap-12 my-9 font-bold text-lg">
                    <a className='hover:text-gray-700' href="">Conditions of Use</a>
                    <a className='hover:text-gray-700' href="">Privacy & Policy</a>
                    <a className='hover:text-gray-700' href="">Press Room</a>
                </div>
                <p className='text-center text-[#6B7280] font-bold text-lg'>&copy; 2023 MovieBox by Opeyemi_dev</p>
            </div>
        </footer>
    )
}

export default Footer
