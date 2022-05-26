import React,{useState} from "react";
import MealList from "./components/MealList";
import NewMeal from "./components/NewMeal";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
function App() {
  const [mealData, setMealData]= useState(null);
  const [calories, setCalories]= useState(2000);
  const [meals, setMeals]=useState([])
  const [diet,setDiet]= useState('');
  function handleChange(e){
    setCalories(e.target.value);

  }
  function handleChangeDiet(e){
    setDiet(e.calories.value);
  }
  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=8e6dbd48d33b4cf2858b69f7f271dad6&timeFrame=day&targetCalories=${calories}&diet=${diet}`
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
    <div className="App">
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
      <br />
      <NewMeal onAddMeal={addMeal}/>
    </div>
  );
}

export default App;
