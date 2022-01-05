import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-orange-600 text-white flex justify-between'>

            <h1 className='font-bold pt-5 px-5'>TEXTUTIL</h1>

            {/* <img src="/Icon/1.jpg" alt='404' className='h-14 pt-3 px-3 rounded-2xl ' /> */}
            <ul className='flex cursor-pointer justify-end px-28 py-5 space-x-10 '>
                <li ><a href='/'>Home</a></li>
                <li ><a href='/'>About</a></li>
                <li ><a href='/'>Conact Us</a></li>
            </ul>

        </nav>
    )
}

export default NavBar
