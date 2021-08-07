import React, { useEffect, useState } from 'react';
import './Result.css';
import Typography from '@material-ui/core/Typography';

function Result({ food }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ingredient = [];
    for (let i = 1; i <= 20; i++) {
      let ingredient1 = 'strIngredient' + i;
      let measure1 = 'strMeasure' + i;

      if (food.meals[0][ingredient1]) {
        ingredient.push([food.meals[0][ingredient1], food.meals[0][measure1]]);
      } else {
        break;
      }
    }
    setIngredients(ingredient);
    console.log(ingredient);
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

          <p>
            <b>Tags: </b> {food.meals[0].strTags ? food.meals[0].strTags : '-'}
          </p>

          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((n) => (
              <li>
                {n[0]} - {n[1]}
              </li>
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
      <iframe
        width='1280'
        height='800'
        title={food.meals[0].strMeal}
        src={`https://www.youtube.com/embed/${food.meals[0].strYoutube.slice(
          -11
        )}`}
      ></iframe>
    </div>
  );
}

export default Result;
