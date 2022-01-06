import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');
    const headleClick = () => {
        const toUpper = text.toUpperCase()
        setText(toUpper)
    }
    const headleChange = (r) => {
        setText(r.target.value)
    }
    const headlToLower = () => {
        const toLower = text.toLowerCase();
        setText(toLower)
    }
    const headleClean = () => {
        const Clear = ("")
        setText(Clear)
    }
    const headleCopy = () => {
        const copy = document.getElementById('mycopy');
        copy.select();
        navigator.clipboard.writeText(copy.value)
    }
    const headleRemove = () => {
        const extraSpaces = text.split(/[ ]+/)
        setText(extraSpaces.join(''))
    }
    return (
        <>
            <div className="flex justify-center  pt-10 " >
                <div className="mb-3 xl:w-96">
                    <label className="form-label inline-block mb-2 text-gray-700 font-bold text-2xl">
                        {props.heading}</label>
                    <textarea value={text} onChange={headleChange} id="mycopy" className="form-control block w-full px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="10"></textarea>

                </div>
            </div>
            <div className=' text-center '>
                <button className='border-2 rounded-lg bg-red-700 text-white px-4 py-2 hover:bg-green-600' onClick={headleClick}>Convert to uppercase</button>
                <button className='border-2 rounded-lg bg-red-700 text-white px-4 py-2 hover:bg-green-600 cursor-pointer' onClick={headlToLower}>To lower Caser</button>
                <button className='border-2 rounded-lg bg-red-700 text-white px-4 py-2 hover:bg-green-600 cursor-pointer' onClick={headleClean}>Clear</button>
                <button className='border-2 rounded-lg bg-red-700 text-white px-4 py-2 hover:bg-green-600 cursor-pointer' onClick={headleCopy}>Copy</button>
                <button className='border-2 rounded-lg bg-red-700 text-white px-4 py-2 hover:bg-green-600 cursor-pointer' onClick={headleRemove}>Remove spaces</button>
            </div>
            <div className='text-center py-5'>
                <p className='font-bold font-serif py-5'>{text.split(" ").length} Words and  {text.length} charactres</p>
                <p className='font-bold font-mono'>You can read this artical on {0.008 * text.length} Mintues  </p>
                <h2 className='capitalize text-3xl font-serif font-bold mt-10 mb-2 ' > Preview</h2>
                <hr className='w-1/5 mx-auto' />
                <p className='py-5'>{text.length > 0 ? text : "Enter something to reivew it here"}</p>
            </div>

            <div className='text-center'>
                <img src='./Icon/himayt.jpg' alt='Pending...'
                    class="rounded-full w-32 mb-4 mx-auto"
                />
                <h1 className='font-mono font-medium py-2'>Himayat khan</h1>
                <p className='font-serif  text-gray-600'>Web designer</p>
            </div>
            <button className='font-bold  hover:bg-green-600' onClick={props.toggleMode}>Enable mode </button>

        </>
    )
}

export default TextForm
