import React, { useEffect, useState } from 'react';
import './Result.css';
import Typography from '@material-ui/core/Typography';

function Result({ food }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ingredient = [];
    for (let i = 1; i <= 20; i++) {
      let ingredient1 = 'strIngredient' + i;

      if (food.meals[0][ingredient1]) {
        ingredient.push(food.meals[0][ingredient1]);
      } else {
        break;
      }
    }
    setIngredients(ingredient);
  }, [food]);

  return (
    <div className='result'>
      <div className='center__desc'>
        <div>
          <img
            src={food.meals[0].strMealThumb}
            alt='{food.meals[0].strMeal}'
          ></img>
          <p>
            <b>Category: </b>
            {food.meals[0].strCategory}
          </p>

          <p>
            <b>Area: </b> {food.meals[0].strArea}
          </p>

          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((n) => (
              <li>{n}</li>
            ))}
          </ul>
        </div>

        <div>
          <Typography variant='h4'>{food.meals[0].strMeal}</Typography>
          <Typography variant='body1'>
            {food.meals[0].strInstructions}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Result;
