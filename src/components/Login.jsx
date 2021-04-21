import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

function Login() {
    return(
        <div>
            <h1>Joe Mama</h1>
            <button>
                <Link to='/content'>Go</Link>
            </button>
        </div>
    );
}

export default Login;