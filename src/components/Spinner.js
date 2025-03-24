import React from 'react'
import loading from './loading-loading-forever.gif'

const Spinner=() => {
    return (
    <div className='text-center'  data-bs-theme='dark'>
        <img className='my-3' src={loading} alt="loading" height="50px" width='50px'/>
    </div>
    )
}

export default Spinner
