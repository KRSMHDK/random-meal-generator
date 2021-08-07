import { Button } from '@material-ui/core';
import React from 'react';
import './SearchMeal.css';
import FastfoodIcon from '@material-ui/icons/Fastfood';

function SearchMeal({ setFood }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((res) => setFood(res));
  };

  return (
    <div className='searchmeal__form'>
      <h2>
        Want Some Food? <FastfoodIcon />
      </h2>

      <h3>Get a random meal by clicking below</h3>

      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Get Meal
      </Button>
    </div>
  );
}

export default SearchMeal;
