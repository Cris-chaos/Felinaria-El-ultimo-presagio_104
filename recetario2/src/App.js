import { useState } from 'react';
import './App.css';
import RecipeCard from "./componentes/RecipeCard";
import Instrucciones from './componentes/Instrucciones';
import useSound from 'use-sound';
import clickSound from './audio/meow.wav'
import { Routes, Route } from 'react-router-dom';


function App() {

  const [play] = useSound(clickSound);

  const [recetas, setRecetas] = useState([
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
    <Routes>

      <Route path="/" element={
    <div className="contenedor">

      <h2>(｡˃ ᵕ ˂ )⸝ ♨ Recetario!!! </h2>
        
      <img
        src="https://file.garden/arKg2AStrcWSmWTa/image-removebg-preview.png"
        alt="Cocina"
        onClick={play} 
        className="hero-img"
      />

      <div className="recetas">
        {recetas ? recetas.map(receta => (
          <RecipeCard
            key={receta.idMeal}
            receta={receta}
          />
        )) : "No hay recetas :("}
      </div>

    </div>
  } />

  <Route
    path="/instrucciones/:idMeal"
    element={<Instrucciones />}
  />

</Routes>
  );
}


export default App;