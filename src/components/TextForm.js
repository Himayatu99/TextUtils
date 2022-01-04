import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('Write some thing');
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
    return (
        <>
            <div className="flex justify-center pt-10">
                <div className="mb-3 xl:w-96">
                    <label className="form-label inline-block mb-2 text-gray-700 font-bold text-2xl">
                        {props.heading}</label>
                    <textarea value={text} onChange={headleChange} className="form-control block w-full px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"id="exampleFormControlTextarea1"
                        rows="8"
                        placeholder="Your message"></textarea>
                </div>
            </div>
            <div className=' text-center '>
                <button className='rounded-full text-red-800 px-5' onClick={headleClick}>Convert to uppercase</button>
                <button className='rounded-full text-red-800 px-5' onClick={headlToLower}>To lower Caser</button>
                <button className='rounded-full text-red-800 px-5' onClick={headleClean}>Clear</button>
            </div>
            <div className='pt-5'>
                <h2> preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}

export default TextForm
