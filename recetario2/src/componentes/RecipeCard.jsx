import React from 'react'
import { useNavigate } from 'react-router-dom';


const RecipeCard = ({receta}) => {
    const {idMeal, strMeal, strMealThumb} = receta;
      const navigate = useNavigate();

    return (
        <div className='card'>
            <img src={strMealThumb} 
            alt={strMeal}
            className='card-imagen' />

           <div className='card-body'>
            <h3>{strMeal}</h3>
             <button onClick={() => navigate(`/instrucciones/${idMeal}`)}>
                Realizar!!
             </button>
           </div>
        </div>
    )
};

export default RecipeCard;


