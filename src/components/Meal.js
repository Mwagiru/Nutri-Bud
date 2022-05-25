import React,{useEffect,useState} from 'react'

function Meal({meal}) {
    const [imageUrl , setImageUrl]= useState("");
    useEffect(()=>{
        fetch(
          `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=ed70935873d9434ab02473e7466fa0b9&includeNutrition=false&dishTypes`
        )
          .then((response) => response.json())
          .then((data) => {
            setImageUrl(data.image);
          })
          .catch(() => {
            console.log("error");
          });   
    },[meal.id])
  
    return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe"/>
        <ul>
            <li> Prep Time:{meal.readyInMinutes} minutes</li>
            <li>Servings:{meal.servings}</li>
        </ul>
        <a href={meal.sourceUrl}>Get Recipe</a>
    </article>
  );
}

export default Meal