import React from 'react'
import Meal from './Meal'
function MealList({mealData} ,props) {
    const nutrients = mealData.nutrients; 
   
    return (
    <main>
      <section className="nutrients">
        <br />
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
        </ul>
      </section>
      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
        <div>
        </div>
      </section>
    </main>
  );
}

export default MealList