import React from 'react';
import './NotFound.css';
import notfound from '../Assets/Images/404 error-image.png'

const NotFound = () => {
    return (
        <div>
            <img className="error" src={notfound} alt="notfound" />
        </div>
    )
}

export default NotFound
