import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealList from './MealList';
import signIn from './signIn';
function Navigation() {
  return (
    <Routes>
      <Route path="/" component={signIn} />
      <Route path="/mealList" component={MealList}/>
    </Routes>
  );
}

export default Navigation