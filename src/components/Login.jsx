import React from 'react';
import firebase, { auth } from '../firebase';

function Login() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <div>
            <button onClick={ signInWithGoogle }>Sign in with Google</button>
        </div>
    );
}

export default Login;