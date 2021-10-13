import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/error-404-concept-landing-page/404-ai.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%", height: "100%" }} src={notFound} alt="" />
            <Link to="/">
                <button>Back To Homepage</button>
            </Link>
        </div>
    );
};

export default NotFound;