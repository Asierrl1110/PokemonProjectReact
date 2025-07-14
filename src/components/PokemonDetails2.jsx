import { useState } from "react";
import "./PokemonDetails.css";
import DetailsWrapper from "../hoc/DetailsWrapper";

function PokemonDetails2(props) {
    // Se extrae el objeto 'pokemon' de las props
    const { pokemon, likes, increaseLikes } = props;

    return (
        <section className="selected-pokemon">
            <div>
                <h3>Pokémon 2</h3>
                <h3>
                    Likes {likes}
                    <button onClick={increaseLikes}>+</button>
                </h3>
            </div>
            <div className="pokemon-container pokemon-2">
                {/* Muestra el nombre del Pokémon */}
                <h2 className="text">{pokemon.name}</h2>

                {/* Muestra la imagen frontal del Pokémon */}
                <img
                    src={pokemon.sprites.front_default}
                    alt="pokemon img"
                    className="pokemon-img" />

                {/* Muestra el valor de HP (puntos de salud) del Pokémon */}
                <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
            </div>
        </section>
    )
}


export default DetailsWrapper(PokemonDetails2);