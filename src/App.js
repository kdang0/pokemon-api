import { useState } from 'react';
import './App.css';


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleClick = (() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response => setPokemonList(response.results))
  })
  return (
    <div className = "App">
        <button onClick={handleClick}>Fetch Pokemon</button>
        <ul className="d-flex flex-column align-items-center">
          {
            pokemonList.length > 0 && pokemonList.map((pokemon, i) => {
              return(
              <li key={i}>
                {pokemon.name}
              </li>)
            })
          }  
        </ul>    
    </div>
  );
}

export default App;
