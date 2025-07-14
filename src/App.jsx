import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails';

function App() {
  // Estado para almacenar el Pokémon seleccionado desde la lista
  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <>
      {/* Si hay un Pokémon seleccionado, se muestra la sección de detalles */}
      {selectedPokemon && (
        <div>
          <h2>Pokemon Seleccionado</h2>
          {/* Componente que muestra los detalles del Pokémon seleccionado */}
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
        </div>
      )}
      <h2>Lista de Pokemons</h2>

      {/* Componente que muestra la lista de Pokémons.
          Se le pasa una función para seleccionar un Pokémon */}
      <PokemonList selectPokemon={setSelectedPokemon}></PokemonList> 
    </>
  )
}

export default App
