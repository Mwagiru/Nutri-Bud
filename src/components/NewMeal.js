import React,{useState}from 'react'

function NewMeal({onAddMeal}) {
    const [title, setTitle]= useState('');
    const[steps, setSteps]=useState('');
    const [amount,setAmount]=useState('');
    function submit(e){
        e.preventDefault()
        const mealObj= {meal: {title:"string", amount:"number",steps:"string"}}
        fetch("https://api.spoonacular.com/mealplanner/jmwagiru/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
              username:"jmwagiru",
          }
        })
          .then((r) => r.json())
          .then((data) => onAddMeal(data.meal));


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

export default NewMeal