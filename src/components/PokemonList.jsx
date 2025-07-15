import { useContext, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import "./PokemonList.css"
import GetForm from "./GetForm";
import { PokemonContext } from "../context/pokemon.context";

function PokemonList(props) {
  // Usamos el estado del contexto de PokemonContext para almacenar la lista de Pokémons
  const { pokemons, setPokemons, fetchPokemon } = useContext(PokemonContext);

  // useEffect se ejecuta al montar el componente por primera vez
  // Carga inicial de los primeros 10 Pokémons
  useEffect(() => {
    getPokemons(1, 10);
  }, []);

  // Función que obtiene un rango de Pokémons y actualiza el estado
  const getPokemons = async (from, to) => {
    const pokemonArray = [];

    // Recorre el rango indicado y agrega cada Pokémon a la lista
    for (let i = from; i <= to; i++) {
      const pokemon = await fetchPokemon(i);
      pokemonArray.push(pokemon);
    }

    // Actualiza el estado con la lista obtenida
    setPokemons(pokemonArray);
  }

  // Mapea la lista de Pokémons al componente PokemonCard
  const pokemonCards = pokemons.map((pokemon) => {
    return <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      selectPokemon={props.selectPokemon}
      selectPokemon2={props.selectPokemon2}>
    </PokemonCard>;
  });

  return (
    <div>
      {/* Formulario que permite modificar el rango de Pokémons a mostrar */}
      <GetForm getPokemons={getPokemons}></GetForm>

      {/* Lista visual de las tarjetas de Pokémons */}
      <ul className="pokemon-list">
        {pokemonCards}
      </ul>
    </div>
  )
}


export default PokemonList