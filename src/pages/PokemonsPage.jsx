import { useState } from 'react'
import PokemonList from '../components/PokemonList'
import PokemonDetails from '../components/PokemonDetails';
import PokemonDetails2 from '../components/PokemonDetails2';
import DetailsWrapper from '../hoc/DetailsWrapper';

function PokemonsPage() {
    // Estado para almacenar el Pokémon seleccionado desde la lista
    const [selectedPokemon, setSelectedPokemon] = useState();
    // Estado para almacenar el Pokémon seleccionado 2 desde la lista
    const [selectedPokemon2, setSelectedPokemon2] = useState();

    const getDetails1 = (likes, increaseLikes) => {
        return (
            <PokemonDetails
                pokemon={selectedPokemon}
                likes={likes}
                increaseLikes={increaseLikes}
            ></PokemonDetails>
        )
    }

    const getDetails2 = (likes, increaseLikes) => {
        return (
            <PokemonDetails2
                pokemon={selectedPokemon}
                likes={likes}
                increaseLikes={increaseLikes}
            ></PokemonDetails2>
        )
    }

    return (
        <>
            {/* Si hay un Pokémon seleccionado, se muestra la sección de detalles */}
            <h2>Pokemons Seleccionado</h2>
            {/* Componente que muestra los detalles del Pokémon seleccionado */}
            {selectedPokemon && (
                <DetailsWrapper render={getDetails1}></DetailsWrapper>
            )}
            {/* Componente que muestra los detalles del Pokémon seleccionado */}
            {selectedPokemon2 && (
                <DetailsWrapper render={getDetails2}></DetailsWrapper>
            )}
            <h2>Lista de Pokemons</h2>

            {/* Componente que muestra la lista de Pokémons.
          Se le pasa una función para seleccionar un Pokémon */}
            <PokemonList selectPokemon={setSelectedPokemon}
                selectPokemon2={setSelectedPokemon2}></PokemonList>
        </>
    )
}

export default PokemonsPage