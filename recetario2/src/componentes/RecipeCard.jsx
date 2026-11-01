import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({receta}) => {
    const {idMeal, strMeal, strMealThumb} = receta;

    return (
        <div className='card'>
            <img src={strMealThumb} 
            alt={strMeal}
            className='card-imagen' />

           <div className='card-body'>
            <h3>{strMeal}</h3>
            <Link to={`/instrucciones/${idMeal}`} className="boton-realizar">
              Realizar!
            </Link>
           </div>
        </div>
    )
};

export default RecipeCard;


