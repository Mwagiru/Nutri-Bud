import React, {useState}from 'react'
import DisplayInfo from './DisplayInfo';
function NutrionalValue() {
    const [search,setSearch]= useState('')
    const [info, setInfo]=useState('')
    function  handleSubmit(e){
    setSearch(e.target.value);
    }
    function getInfo(){
       const options = {
         method: "GET",
         headers: {
           "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
           "X-RapidAPI-Key":
             "dfc8947bddmsh004ba3b9dfc0662p1d6f57jsn3f6288aad5c6",
         },
       };

       fetch(
         "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato",
         options
       )
         .then((response) => response.json())
         .then((data) => { 
           setInfo(data)
           console.log(data)
        })
         .catch((err) => console.error(err));
    }
  return (
      <>    <section>
      <input
        type="text"
        placeholder="Search Ingredient..."
        onChange={handleSubmit}
      />
    </section>
    <button onClick={getInfo}>Get Info</button>
    </>
  );
}

export default NutrionalValue