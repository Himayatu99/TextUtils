import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className={`bg-${props.mode_mode} text-orange-500 flex justify-between `}>

                <Link to='/'><h1 className='font-bold pt-5 px-5'>TEXTUTILs</h1></Link>

                {/* <img src="/Icon/1.jpg" alt='404' classNameName='h-14 pt-3 px-3 rounded-2xl ' /> */}
                <ul className='flex cursor-pointer justify-end px-28 py-5 space-x-10 '>
                    <li ><Link to='/'>Home</Link></li>
                    <li ><Link to='/about'>About</Link></li>
                    <li ><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/search'>Search</Link></li>

                </ul>

            </nav>

        </>
    )
}

export default NavBar
