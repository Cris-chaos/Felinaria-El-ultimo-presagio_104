import React from 'react';

const RecipeCard = ({ receta }) => {
  const { idMeal, strMeal, strMealThumb } = receta;

  return (
    <div className="card">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="card-imagen"
      />
      <div className="card-body">
        <h3>{strMeal}</h3>
        <a
          href={`https://www.themealdb.com/meal/${idMeal}`}
          target="_blank"
          rel="noreferrer"
        >
          Realizar!
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;