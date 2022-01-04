import React from 'react'
import NavBar from './NavBar'
import TextForm from './TextForm'
const App = () => {
    return (
        <div>
            <NavBar />
            <TextForm heading={"Enter the text to analyze below "} />
        </div>
    )
}

export default App
