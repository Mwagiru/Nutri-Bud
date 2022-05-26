import React,{useEffect,useState} from 'react'
function Meal({meal},props) {
  const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=82e45a03bdbc4916a700e245e3b0ee34&includeNutrition=false&dishTypes`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
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
        <button onClick={props.handleFavs}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="red"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>
      </article>
    </>
  );
}
export default Meal