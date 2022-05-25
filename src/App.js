import React,{useState} from "react";
import MealList from "./components/MealList";

function App() {
  const [mealData, setMealData]= useState(null);
  const [calories, setCalories]= useState(2000);

  function handleChange(e){
    setCalories(e.target.value)
  }
  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=a9f977fac95c409a89b3083142c1b3e9&timeFrame=day&targetCalories=${calories}`
    )
    .then((response)=> response.json())
    .then((data)=>{
      setMealData(data);
      console.log(data);
    })
    .catch(()=>{
      console.log("error")
    })
  }
  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Enter Calories..."
          onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}>Generate</button>
      {mealData && <MealList mealData={mealData}/>}
    </div>
  );
}

export default App;
