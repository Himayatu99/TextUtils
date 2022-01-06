import React, { useState } from 'react'
// import About from './About'
import NavBar from './NavBar'
import TextForm from './TextForm'
const App = () => {
    const [mode, setMode] = useState('black');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('black')
            document.body.style.background = 'grey'
        }
        else {
            setMode('light')
            document.body.style.background = "white"
        }
    }
    return (
        <>

            <div>
                <NavBar mode_mode={mode} />
                <TextForm heading={" Enter the text to analyze below "} toggleMode={toggleMode} />

            </div>
            {/* <div className="accordion" id="accordionExample">
                <About />
            </div> */}
        </>
    )
}

export default App
