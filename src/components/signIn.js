import React from 'react';
import{signInWithGoogle} from './firebase'
function signIn(){
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In WIth Google</button>
        </div>
    )
}

export default signIn;