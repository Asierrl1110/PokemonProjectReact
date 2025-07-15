import { createContext, useState } from "react";

const PokemonContext = createContext();

function PokemonProviderWrapper(props) {
    // Estado para almacenar la lista de Pokémons
    const [pokemons, setPokemons] = useState([]);

    // Función que obtiene los datos de un Pokémon a partir de su índice
    const fetchPokemon = async (index) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data;
    }

    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons, fetchPokemon }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProviderWrapper };