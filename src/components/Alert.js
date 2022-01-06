import React from 'react'

const Alert = (props) => {
    return (
        props.alert && <div className="alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
            <strong>{props.alert.msg}</strong>:{props.alert.type}

        </div>
    )
}

export default Alert
