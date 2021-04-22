import React from 'react'
import { auth } from '../firebase'

function Logout() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default Logout;