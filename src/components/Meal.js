import React,{useEffect,useState} from 'react'
function Meal({meal},props) {
    const [imageUrl , setImageUrl]= useState("");
    useEffect(()=>{
        fetch(
          `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8e6dbd48d33b4cf2858b69f7f271dad6&includeNutrition=false&dishTypes`
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
      <>
      <article>
        <h1 className="mealtitle">{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul>
          <li> Prep Time:{meal.readyInMinutes} minutes</li>
          <li>Servings:{meal.servings}</li>
        </ul>
        <a href={meal.sourceUrl}>Get Recipe</a>
        
      </article>
      </>
    );
}

export default Meal