import React from 'react'

function Table() {
  return (
    <div>
      <table>
        <tr>
          <th>Diet</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Gluten Free</td>
          <td>Avoiding wheat,barley,rye etc</td>
        </tr>
        <tr>
          <td>Ketogenic</td>
          <td>
            {" "}
            Based more on ratio of fat, protein and carbs rather than
            ingredients
          </td>
        </tr>
        <tr>
          <td>Vegetarian</td>
          <td>No ingredients containing meat or meat by-products</td>
        </tr>
        <tr>
          <td>Lacto-Vegeterian</td>
          <td>All ingredients must be vegetarian and none may contain egg.</td>
        </tr>
        <tr>
          <td>Ovo-Vegetarian</td>
          <td>All ingredients must be vegan and none can contain dairy</td>
        </tr>
        <tr>
          <td>Vegan</td>
          <td>No meat or its by-products</td>
        </tr>
        <tr>
          <td>Pescetarian</td>
          <td>EVerything allowed except meat and meat by-products</td>
        </tr>
        <tr>
          <td>Paleo</td>
          <td>
            Allowed ingredients include meat (especially grass fed), fish, eggs,
            vegetables, some oils (e.g. coconut and olive oil), and in smaller
            quantities, fruit, nuts, and sweet potatoes. We also allow honey and
            maple syrup (popular in Paleo desserts, but strict Paleo followers
            may disagree). Ingredients not allowed include legumes (e.g. beans
            and lentils), grains, dairy, refined sugar, and processed foods.
          </td>
        </tr>
        <tr>
            <td>Primal</td>
            <td>Similar to paleo but dairy is allowed here.</td>
        </tr>
      </table>
    </div>
  );
}

export default Table