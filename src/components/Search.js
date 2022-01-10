import React, { useState } from "react";
import SearchResult from "./SearchResult";
const Search = () => {
    const [img, setImg] = useState('')
    const handleCh = (event) => {
        const data = event.target.value;
        setImg(data)
    }
    return (
        <>

            <h1 className="text-center font-bold font-mono text-lg mb-3">Search only Image</h1>
            <div className="flex items-center justify-center ">
                <div className="flex border-2 border-gray-200 rounded">
                    <input onChange={handleCh} value={img} type="text" className="px-4 py-2 w-80" placeholder="Search Only Image" />
                    <button className="px-4 text-white bg-gray-600 border-l ">
                        Search
                    </button>
                </div>
            </div>
            <div className="mx-20 mt-10 ">
                {img === '' ? null : <SearchResult name={img} />}
            </div>

        </>
    )
}

export default Search