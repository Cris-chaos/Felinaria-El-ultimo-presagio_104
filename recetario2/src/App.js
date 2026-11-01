import { useState, useEffect } from 'react';
import './App.css';
import RecipeCard from "./componentes/RecipeCard";

function App() {
  const [isLoading, setIsLoading] = useState (false);
  const [Query, setQuery] = useState ("");
  const [recetas, useRecetas] = useState ([]);

   return (
    <div className="contenedor">
      <h2>(｡˃ ᵕ ˂ )⸝ ♨ Recetario!!! </h2>
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