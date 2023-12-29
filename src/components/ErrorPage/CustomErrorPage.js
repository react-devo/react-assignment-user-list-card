// ErrorPage.jsx
import React from 'react';
import './ErrorPage.css';

const ErrorPage = ({ error }) => {
    return (
        <div className="error-container">
            <div className="error-content">
                {error ? <>
                    <h1>Oops! Something went wrong.</h1>
                    <p>We're sorry, but it seems that an error has occurred.</p>
                </>
                    : <h1>{error}.</h1>}
            </div>
        </div>
    );
};

export default ErrorPage;
