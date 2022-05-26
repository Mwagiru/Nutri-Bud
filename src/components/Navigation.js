import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealList from './MealList';
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