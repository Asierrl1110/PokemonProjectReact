import "./PokemonDetails.css";

function PokemonDetails(props) {

    // Se extrae el objeto 'pokemon' de las props
    const { pokemon } = props;

    return (
        <section className="selected-pokemon">
            <div className="pokemon-container">
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


export default PokemonDetails