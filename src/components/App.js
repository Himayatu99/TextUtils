import React, { useState } from 'react'
import Alert from './Alert';
// import About from './About'
import NavBar from './NavBar'
import TextForm from './TextForm'
const App = () => {
    const [mode, setMode] = useState('black');
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert((null))
        }, 1500)
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('black')
            document.body.style.background = 'grey'
            showAlert("Dark Mode has been enable")
        }
        else {
            setMode('light')
            document.body.style.background = "white"
            showAlert("Light mode has beem enabled ", "light")
        }
    }
    return (
        <>

            <div>
                <NavBar mode_mode={mode} />
                <Alert alert={alert} />
                <TextForm hellAlert={showAlert} heading={" Enter the text to analyze below "} toggleMode={toggleMode} />

            </div>
            {/* <div className="accordion" id="accordionExample">
                <About />
            </div> */}
        </>
    )
}

export default App
