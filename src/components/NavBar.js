import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-orange-600 text-white flex justify-between'>

            <h1 className='font-bold pt-5 px-5'>TEXTUTIL</h1>

            {/* <img src="/Icon/1.jpg" alt='404' className='h-14 pt-3 px-3 rounded-2xl ' /> */}
            <ul className='flex  justify-end px-28 py-5 space-x-10 '>
                <li >Home</li>
                <li >About</li>
                <li >Conact Us</li>
            </ul>

        </nav>
    )
}

export default NavBar
