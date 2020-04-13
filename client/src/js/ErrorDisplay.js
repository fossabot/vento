import React from 'react'

const ErrorDisplay = (props) => {
    return (
        <div>
          Error when retreiving : {props.errormsg}
        </div>
    )
}

export default ErrorDisplay
