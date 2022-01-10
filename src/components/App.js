import React, { useState } from 'react'
import Alert from './Alert';
import About from './About'
import NavBar from './NavBar'
import TextForm from './TextForm'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Contact from './contact';
import Search from './Search';
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

            <Router>
                <div>
                    <NavBar mode_mode={mode} />
                    <Alert alert={alert} />
                    <Routes>
                        <Route exact path="/about" element={<About />}>

                        </Route>
                        <Route exact path="/" element={<TextForm hellAlert={showAlert} heading={"TextUtils- Word Count "} toggleMode={toggleMode} />}>

                        </Route>
                        <Route exact path="/contact" element={<Contact />}>

                        </Route>
                        <Route exact path='/search' element={<Search />}>

                        </Route>
                    </Routes>
                </div>

            </Router>
        </>
    )
}

export default App
