/*import React,{useState}from 'react'

function NewMeal({onAddMeal}) {
    const [title, setTitle]= useState('');
    const[steps, setSteps]=useState('');
    const [amount,setAmount]=useState('');
    function submit(e){
        e.preventDefault();
        const mealObj= {meal: {title:"string", amount:"number",steps:"string"}}
        fetch(
          `https://api.spoonacular.com/mealplanner/:username/items?hash=b3a066c39880d2ec86778b487669d87c1b7c4d0e`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(mealObj),
          }
        )
          .then((r) => r.json())
          .then((data) => console.log(data.meal));


    }
  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add Meal</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="description">Steps:</label>
        <input
          type="text"
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <button type="submit">New Meal</button>
      </form>
    </div>
  );
}

export default NewMeal*/
import React, { useState } from "react";
import data from "./data.json";
import { nanoid } from "nanoid";
function NewMeal() {
  const [infos, setInfos] = useState(data);
  const [formData, setFormData] = useState({
    title: "",
    calories: "",
    link: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      id: nanoid(),
      title: FormData.title,
      calories: FormData.calories,
      link: FormData.link,
    };
    const newData = [...infos, newInfo];
    setInfos(newData);
  };
  return (
    <div className="table">
      <table>
        <tr>
          <th>Title</th>
          <th>Calories</th>
          <th>Link</th>
        </tr>
        {infos.map((info) => (
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </table>
      <br />
      <h2>Save Recipe</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter name..."
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="calories"
          required="required"
          placeholder="Enter calories..."
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="link"
          required="required"
          placeholder="Paste link..."
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewMeal;
