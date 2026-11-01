import { useState, useEffect } from 'react';
import './App.css';
import RecipeCard from "./componentes/RecipeCard";
import Instrucciones from './componentes/Instrucciones'; 



function App() {
  const [isLoading, setIsLoading] = useState (false);
  const [Query, setQuery] = useState ("");
  const [recetas, useRecetas] = useState ([
    {
    idMeal: 1,
    strMeal: 'Pizza',
    strMealThumb: 'https://i.pinimg.com/736x/e4/33/09/e43309fa63b61f2f89db97c3b7a2ecf9.jpg',
  },
  {
    idMeal: 2,
    strMeal: 'Tarta de Frutos Rojos',
    strMealThumb: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
  }
  ]);

   return (

    <div className="contenedor">
      <h2>(｡˃ ᵕ ˂ )⸝ ♨ Recetario!!! </h2>
      <img 
          src="https://file.garden/arKg2AStrcWSmWTa/image-removebg-preview.png" 
          alt="Cocina" 
          className="hero-img" 
        />Recetas más ricas que comer verga
        
      <div className="recetas">
        {recetas ? recetas.map(receta => ( //la funcion mapa se usa para ver si se teien recetas y renderizarlas 
              <RecipeCard 
              key={receta.idMeal} 
              receta={receta} />
            ))
          : "No hay recetas :("}
      </div>
      
    </div>
  );
}

export default App;