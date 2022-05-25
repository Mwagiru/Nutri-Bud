import React from 'react'

function DisplayInfo({info}) {
    const information=info.items[0];
  return (
    <div>
      <ol>
        <li>Calories: {information.calories}</li>
        <li>Carbohydrates: {information.carbohydrates_total_g}</li>
        <li>Cholesterol: {information.cholesterol_mg}</li>
        <li>Saturated Fat: {information.fat_saturated_g}</li>
        <li>Fiber Content: {information.fiber_g}</li>
        <li>Potassium:{information.potassium_mg}</li>
        <li>Protein:{information.protein_g}</li>
        <li>Sugar: {information.sugar_g}</li>
      </ol>
    </div>
  );
}

export default DisplayInfo