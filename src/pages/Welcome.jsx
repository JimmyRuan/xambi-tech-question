// src/pages/Welcome.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold my-8">Welcome to this Generic App</h1>
            <p className="text-lg mb-4">This is the home page. Click below to go to the form page.</p>
            <ul>
                <li>
                    <Link to="/form-with-everything" className="text-indigo-600 underline">
                        Go to Form with Everything
                    </Link>
                </li>
                <li>
                    <Link to="/pill-list-page" className="text-indigo-600 underline">
                        Go to Form with new tag
                    </Link>
                </li>
                <li>
                    <Link to="/item-list" className="text-indigo-600 underline">
                        Go to Form with Item List
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Welcome;
