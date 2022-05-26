import React,{useState} from "react";
import MealList from "./components/MealList";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route} from 'react-router-dom';
import { signInWithGoogle } from "./components/firebase";
function App() {
  const [mealData, setMealData]= useState(null);
  const [calories, setCalories]= useState(2000);
  const [meals, setMeals]=useState([])
  const [diet,setDiet]= useState('');
  const [isUserIn, setIsUserIn]=useState(true);

  function handleChange(e){
    setCalories(e.target.value);

  }
  function handleChangeDiet(e){
    setDiet(e.calories.value);
  }
  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=82e45a03bdbc4916a700e245e3b0ee34&timeFrame=day&targetCalories=${calories}&diet=${diet}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  function addMeal(newMeal){
    const updatedMeals = [... meals,newMeal]
    setMeals(updatedMeals);
  }

  return (
    <>
      <div className="App">
        <br />
        <Header />
        <br />
        <Navigation />
        <br />
        <section className="controls">
          <input
            type="number"
            placeholder="Enter Calories..."
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Diet..."
            onChange={handleChangeDiet}
          />
        </section>
        <button onClick={getMealData}>Generate</button>
        {mealData && <MealList mealData={mealData} />}
      </div>
    </>
  );
}

export default App;
