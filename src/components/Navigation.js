import React, { useState } from 'react'
import { signInWithGoogle } from "./firebase"
function Navigation() {
  const [click, setClick]= useState(true);
  function handleClick(){
    setClick(!click)
  }
  return (
    <div>
      <button onClick={signInWithGoogle}>{click? "Sign In": "Sign Out"}</button>
    </div>
  );
}

export default Navigation