import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails';
import PokemonDetails2 from './components/PokemonDetails2';

function App() {
  // Estado para almacenar el Pokémon seleccionado desde la lista
  const [selectedPokemon, setSelectedPokemon] = useState();

  const [selectedPokemon2, setSelectedPokemon2] = useState();

  return (
    <>
      {/* Si hay un Pokémon seleccionado, se muestra la sección de detalles */}
      <h2>Pokemons Seleccionado</h2>
      {/* Componente que muestra los detalles del Pokémon seleccionado */}
      {selectedPokemon && (
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
      )}
      {/* Componente que muestra los detalles del Pokémon seleccionado */}
      {selectedPokemon2 && (
          <PokemonDetails2 pokemon={selectedPokemon2}></PokemonDetails2>
      )}
      <h2>Lista de Pokemons</h2>

      {/* Componente que muestra la lista de Pokémons.
          Se le pasa una función para seleccionar un Pokémon */}
      <PokemonList selectPokemon={setSelectedPokemon}
                   selectPokemon2={setSelectedPokemon2}></PokemonList> 
    </>
  )
}

export default App
