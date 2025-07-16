import "./PokemonCard.css"
import React from "react";

function PokemonCard(props) {

    // Se extraen el objeto 'pokemon' y la función 'selectPokemon' de las props
    const { pokemon, selectPokemon, selectPokemon2 } = props;    

    return pokemon.id ? (
        // Si el Pokémon tiene un ID (es decir, los datos ya fueron cargados), se muestra la tarjeta
        <li className="pokemon-card"
            onClick={() => selectPokemon(pokemon)}
            onAuxClick={() => selectPokemon2(pokemon)}>
            {/* Nombre del Pokémon */}
            <h2 className="pokemon-name">{pokemon.name}</h2>

            {/* Imagen frontal del Pokémon */}
            <img 
                src={pokemon.sprites.front_default} 
                alt="pokemon img" 
                className="pokemon-img" />

            {/* HP del Pokémon (primer valor del arreglo de stats) */}
            <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
        </li>
    ) : (
        // Si no hay ID, se considera que está cargando
        <p className="loading">Loading...</p>
    )
}


export default React.memo(PokemonCard);